import * as fs from "node:fs";
import * as os from "node:os";
import { join } from "node:path";

export const homeDir = join(process.cwd(), ".media_files");
export const videosDir = `${homeDir}/videos`;
export const imagesDir = `${homeDir}/images`;
export const castDir = `${homeDir}/casts`;

(() => {
  //fs make directory if not exist
  if (!fs.existsSync(homeDir)) fs.mkdirSync(homeDir, { recursive: true }), console.log("Root Directory Created");
  if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir), console.log("Videos Directory Created");
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir), console.log("Images Directory Created");
  if (!fs.existsSync(castDir)) fs.mkdirSync(castDir), console.log("Casts Directory Created");
})();
