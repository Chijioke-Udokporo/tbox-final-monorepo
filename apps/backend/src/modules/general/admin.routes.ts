import { Hono } from "hono";
import { scrapeIMDB, scrapeTomatoes } from "../../utils/scrapper";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { responseHandler } from "../../utils/response";

export const AdminRoutes = new Hono()
  .post("/scrape/tomatoes", zValidator("json", z.object({ tomatoesUrl: z.string() })), async (c) => {
    const { tomatoesUrl } = c.req.valid("json");
    const result = scrapeTomatoes({ tomatoesUrl });
    return responseHandler<typeof result>(c, result);
  })

  .post("/scrape/imdb", zValidator("json", z.object({ imdbUrl: z.string() })), async (c) => {
    const { imdbUrl } = c.req.valid("json");
    const result = scrapeIMDB({ imdbUrl });
    return responseHandler<typeof result>(c, result);
  });
