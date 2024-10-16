import axios from "axios";
import { load } from "cheerio";
import { convertUrlToBlob, uploadFromUrl } from "./file-upload";
import { castDir, imagesDir, videosDir } from "../lib/fs";
import AppLogger from "../lib/consola";
import { dbPrisma } from "../lib/prisma";

type Cast = {
  name: string;
  imageUrl: string;
  imageId?: string;
};

const Scraper = async (args: { url: string }) => {
  const { url } = args;

  const result = await fetch(url);
  const data = await result.text();
  const $ = load(data);
  return $;
};

const scrapeIMDB = async ({ imdbUrl }: { imdbUrl: string }) => {
  const $ = await Scraper({ url: imdbUrl });
  if (!$) throw new Error("Connection Error. Please try again later");

  const allOfIt = $("script[type='application/ld+json']").html() as string;
  const Meta = JSON.parse(allOfIt);

  return Meta;
};

const scrapeTomatoes = async ({ tomatoesUrl }: { tomatoesUrl: string }) => {
  try {
    const $ = await Scraper({ url: tomatoesUrl });
    if (!$) throw new Error("Connection Error. Please try again later");

    const allOfIt = $("script[type='application/ld+json']").html() as string;
    const Meta = JSON.parse(allOfIt);

    const tomatometer = $?.('rt-button[slot="criticsScore"]').text().replace(/\s\s+/g, " ").trim();
    const audienceScore = $?.('rt-button[slot="audienceScore"]').text().replace(/\s\s+/g, " ").trim();
    const runtime = $?.('rt-text[slot="duration"]').text().replace(/\s\s+/g, " ").trim();
    const plot = $?.('meta[name="description"]').attr("content");
    const alias = Meta?.name?.replace(/\s/g, "_").toLowerCase();

    return {
      posterUrl: Meta?.image,
      mediaId: alias,
      title: Meta?.name,
      alias: alias,
      releaseDate: Meta?.releaseDate,
      director: getPerson(Meta?.director),
      runtime: runtime || "",
      rating: Meta?.contentRating,
      plot,
      tomatometer,
      audienceScore,
      genre: Meta?.genre,
      casts: getPerson(Meta?.actor),
      writers: Meta?.creator || "",
    };
  } catch (error: any) {
    AppLogger.error(error);
    return { error: error?.message };
  }
};

const getPerson = (allCast: { name: string; image: string; sameAs: string }[]) => {
  let result: Cast[] = [];
  allCast.forEach((el) => {
    const imageSplit = el?.sameAs.split("/");
    const imageId = imageSplit?.length > 0 ? imageSplit?.pop() : undefined;
    result.push({ name: el.name, imageUrl: el.image, imageId });
  });

  return result;
};

const storeCast = async (casts: any[]) => {
  const castIds: string[] = [];

  for (const c of casts) {
    const isExist = await dbPrisma.casts.findUnique({ where: { name: c.name } });
    if (isExist) {
      castIds.push(isExist.id);
      continue;
    } else {
      await uploadFromUrl({ fullPath: `${castDir}/${c?.imageId}.png`, url: c.imageUrl });
      const cast = await dbPrisma.casts.create({
        data: { name: c.name, image: c?.imageId },
      });
      castIds.push(cast.id);
    }
  }
  return { castIds };
};

const storeVideo = async (args: { mediaId: string; videoUrl: string }) => {
  const { mediaId, videoUrl } = args;
  await uploadFromUrl({ fullPath: `${videosDir}/${mediaId}.mp4`, url: videoUrl });
  return { message: "Video Stored" };
};

const storeImage = async (args: { imageUrl: string; mediaId: string }) => {
  const { imageUrl, mediaId } = args;
  await uploadFromUrl({ fullPath: `${imagesDir}/${mediaId}.png`, url: imageUrl });
  return { message: "Image Stored" };
};

export { scrapeTomatoes, scrapeIMDB, storeCast, storeVideo, storeImage };
