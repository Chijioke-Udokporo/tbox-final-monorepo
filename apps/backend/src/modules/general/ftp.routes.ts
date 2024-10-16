import { Hono } from "hono";
import { createReadStream } from "node:fs";
import { castDir, imagesDir } from "../../lib/fs";
import { resolve } from "node:path";

export const FTPRouter = new Hono()
  .get("/image/:id", async (c) => {
    const id = c.req.param("id");
    const filePath = createReadStream(resolve(imagesDir, `${id}.png`)) as any;
    try {
      return new Response(filePath, { headers: { "Content-Type": "image/png" } });
    } catch (error) {
      console.error(`Error streaming video ${filePath}:`, error);
      return c.text("Internal Server Error", 500);
    }
  })
  .get("/cast/:id", async (c) => {
    const id = c.req.param("id");
    const filePath = createReadStream(resolve(castDir, `${id}.png`)) as any;
    try {
      return new Response(filePath, { headers: { "Content-Type": "image/png" } });
    } catch (error) {
      console.error(`Error streaming video ${filePath}:`, error);
      return c.text("Internal Server Error", 500);
    }
  });
