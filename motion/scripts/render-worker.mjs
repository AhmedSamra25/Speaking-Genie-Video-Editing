// Render a batch of motion graphics with one bundle and one browser.
// Usage: node scripts/render-worker.mjs <job.json>
// job: { bundleDir, concurrency, browserExecutable?, items: [{ id, props, out, alpha, crf, jpegQuality, frame? }] }
// An item with `frame` renders that one frame as a PNG (renderStill) instead of the clip.
// sgv (sgv/motion.py) writes the job, caches the bundle by source hash and reads one line per finished item.
import { existsSync, readFileSync, renameSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { openBrowser, renderMedia, renderStill, selectComposition } from "@remotion/renderer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const job = JSON.parse(readFileSync(process.argv[2], "utf8"));
const chromiumOptions = process.platform === "darwin" ? { gl: "angle" } : {};

let serveUrl = job.bundleDir;
if (!existsSync(path.join(serveUrl, "index.html"))) {
  const t = Date.now();
  serveUrl = await bundle({ entryPoint: path.join(root, "src/index.ts"), outDir: job.bundleDir });
  console.log(`bundled ${((Date.now() - t) / 1000).toFixed(1)}s`);
}

const browser = await openBrowser("chrome", {
  browserExecutable: job.browserExecutable || null,
  chromiumOptions,
});
try {
  for (const item of job.items) {
    const t = Date.now();
    const composition = await selectComposition({
      serveUrl, id: item.id, inputProps: item.props, puppeteerInstance: browser, chromiumOptions,
    });
    const tmp = item.out.replace(/(\.[^.]+)$/, ".part$1");
    if (item.frame !== undefined) {
      await renderStill({
        composition, serveUrl, output: tmp, frame: item.frame, inputProps: item.props, puppeteerInstance: browser,
        chromiumOptions, imageFormat: "png", overwrite: true, logLevel: "error",
      });
      renameSync(tmp, item.out);
      console.log(`done ${item.id} still ${((Date.now() - t) / 1000).toFixed(1)}s ${item.out}`);
      continue;
    }
    const format = item.alpha
      ? { codec: "prores", proResProfile: "4444", pixelFormat: "yuva444p10le", imageFormat: "png" }
      : { codec: "h264", crf: item.crf, imageFormat: "jpeg", jpegQuality: item.jpegQuality };
    await renderMedia({
      composition, serveUrl, outputLocation: tmp, inputProps: item.props, puppeteerInstance: browser,
      chromiumOptions, concurrency: job.concurrency, overwrite: true, logLevel: "error", ...format,
    });
    renameSync(tmp, item.out);
    console.log(`done ${item.id} ${((Date.now() - t) / 1000).toFixed(1)}s ${item.out}`);
  }
} finally {
  await browser.close({ silent: true });
}
