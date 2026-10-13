import { continueRender, delayRender, staticFile } from "remotion";

const faces: [family: string, file: string, weight: string][] = [
  ["Plus Jakarta Sans", "PlusJakartaSans-Regular.ttf", "400"],
  ["Plus Jakarta Sans", "PlusJakartaSans-Medium.ttf", "500"],
  ["Plus Jakarta Sans", "PlusJakartaSans-SemiBold.ttf", "600"],
  ["Plus Jakarta Sans", "PlusJakartaSans-Bold.ttf", "700"],
  ["Plus Jakarta Sans", "PlusJakartaSans-ExtraBold.ttf", "800"],
  ["IBM Plex Sans Arabic", "IBMPlexSansArabic-Regular.ttf", "400"],
  ["IBM Plex Sans Arabic", "IBMPlexSansArabic-SemiBold.ttf", "600"],
  ["IBM Plex Sans Arabic", "IBMPlexSansArabic-Bold.ttf", "700"],
  ["JetBrains Mono", "JetBrainsMono-Regular.ttf", "400"],
  ["JetBrains Mono", "JetBrainsMono-Medium.ttf", "500"],
];

let loaded = false;

/** Loads the brand fonts once; rendering waits until they are ready. */
export const loadBrandFonts = () => {
  if (loaded || typeof document === "undefined") return;
  loaded = true;
  const handle = delayRender("Loading brand fonts");
  Promise.all(
    faces.map(([family, file, weight]) => {
      const face = new FontFace(family, `url(${staticFile(`brand/fonts/${file}`)})`, { weight });
      (document.fonts as unknown as { add: (f: FontFace) => void }).add(face);
      return face.load();
    }),
  )
    .then(() => continueRender(handle))
    .catch((err) => {
      console.error(err);
      continueRender(handle);
    });
};
