import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
if (process.platform === "darwin") {
  // Apple Silicon: let headless Chrome rasterise on the GPU (Metal-backed ANGLE).
  Config.setChromiumOpenGlRenderer("angle");
}
