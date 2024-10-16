import { promisify } from "util";
import fs from "fs";
import { pipeline } from "stream";
import axios from "axios";
import { dbPrisma } from "../lib/prisma";
import { Jimp } from "jimp";

export const uploadFromUrl = async (input: { fullPath: string; url: string }) => {
  const { fullPath, url } = input;
  return new Promise(async (resolve) => {
    if (fs.existsSync(fullPath)) resolve({ error: "File Exist", fullPath });

    const streamPipeline = promisify(pipeline);
    const response = await fetch(url);
    const respondAny = response.body as any;

    await streamPipeline(respondAny, fs.createWriteStream(fullPath))
      .then(() => resolve({ message: "FileStored" }))
      .catch((err) => resolve({ error: err?.message }));
  });
};

export const convertUrlToBlob = async (imageUrl: string) => {
  try {
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      timeout: 5000, // Set a timeout of 5 seconds
    });

    //reduce the image width to 500px
    const image = await Jimp.read(response.data);
    image.resize({ w: 350 });
    const jimpImage = await image.getBase64("image/png");

    return jimpImage;
  } catch (error: any) {
    // Explicitly type error as any
    console.error("Error fetching image:", error.message || error);
    throw new Error("Failed to fetch image");
  }
};

export const convertStringUrlToBase64 = (url: string) => {
  return "";
};
