// Screenshot a page with headless Chrome over the DevTools protocol (Node 22+, no dependencies):
// set the viewport and pixel ratio, load the page, wait until the network has been idle and the page has settled,
// then capture. Used by sgv/screens.py, because Chrome's --screenshot flag fires on the load event, before design
// kits that fetch their screens after start-up have rendered.
// usage: node capture.mjs <chrome> <url> <out.png> <width> <height> <scale> <settle-ms>
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [chrome, url, out, w, h, scale, settle] = process.argv.slice(2);
const width = +w, height = +h, dpr = +scale, settleMs = +settle;
const profile = mkdtempSync(join(tmpdir(), "sgv-chrome-"));
const proc = spawn(chrome, ["--headless", "--no-first-run", "--hide-scrollbars", "--disable-gpu-sandbox",
  `--user-data-dir=${profile}`, "--remote-debugging-port=0", "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = (msg) => { console.error(msg); cleanup(); process.exit(1); };
const cleanup = () => { try { proc.kill(); } catch {} try { rmSync(profile, { recursive: true, force: true }); } catch {} };
setTimeout(() => fail("timed out"), 90000);

const wsUrl = await new Promise((resolve) => {
  let buf = "";
  proc.stderr.on("data", (d) => {
    buf += d;
    const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
    if (m) resolve(m[1]);
  });
});
const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0;
const pending = new Map(), listeners = [];
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  else listeners.forEach((fn) => fn(msg));
});
const send = (method, params = {}, sessionId) => new Promise((resolve) => {
  const mid = ++id;
  pending.set(mid, resolve);
  ws.send(JSON.stringify({ id: mid, method, params, ...(sessionId && { sessionId }) }));
});

const { result: { targetId } } = await send("Target.createTarget", { url: "about:blank" });
const { result: { sessionId } } = await send("Target.attachToTarget", { targetId, flatten: true });
const s = (m, p) => send(m, p, sessionId);
await s("Page.enable"); await s("Network.enable");
await s("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: dpr, mobile: false });

let inflight = 0, lastActivity = Date.now(), loaded = false;
listeners.push((m) => {
  if (m.sessionId !== sessionId) return;
  if (m.method === "Network.requestWillBeSent") { inflight++; lastActivity = Date.now(); }
  if (m.method === "Network.loadingFinished" || m.method === "Network.loadingFailed") { inflight = Math.max(0, inflight - 1); lastActivity = Date.now(); }
  if (m.method === "Page.loadEventFired") loaded = true;
});
await s("Page.navigate", { url });
const start = Date.now();
while (!(loaded && inflight === 0 && Date.now() - lastActivity > 800) && Date.now() - start < 30000) await sleep(100);
await sleep(settleMs); // entrance animations, fonts, images decoding
const shot = await s("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
if (!shot.result) fail(JSON.stringify(shot.error));
writeFileSync(out, Buffer.from(shot.result.data, "base64"));
cleanup();
process.exit(0);
