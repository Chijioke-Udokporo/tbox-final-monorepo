import { join } from "node:path";

export const homeDir = join(process.cwd(), ".media_files");
export const videosDir = `${homeDir}/videos`;
export const imagesDir = `${homeDir}/images`;
export const castDir = `${homeDir}/casts`;
