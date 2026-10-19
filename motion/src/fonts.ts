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
  // Enablement look: Poppins display, Inter body, Cairo for all Arabic (Cairo and Inter are variable fonts).
  ["Poppins", "Poppins-Medium.ttf", "500"],
  ["Poppins", "Poppins-SemiBold.ttf", "600"],
  ["Poppins", "Poppins-Bold.ttf", "700"],
  ["Poppins", "Poppins-ExtraBold.ttf", "800"],
  ["Inter", "Inter-Variable.ttf", "100 900"],
  ["Cairo", "Cairo-Variable.ttf", "200 1000"],
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
