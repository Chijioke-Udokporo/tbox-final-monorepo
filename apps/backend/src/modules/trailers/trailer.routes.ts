import { ITrailer, TrailerSchemas } from "./trailer.model";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { responseHandler } from "../../utils/response";
import { TrailerController } from "./trailer.controller";
import { AppConstant } from "../../utils/constant";
import { z } from "zod";
import { createStorage } from "unstorage";
import { IUsers } from "../users/users.model";

const storage = createStorage(/* opts */);
const controller = new TrailerController();

export const TrailerRoutes = new Hono<{
  Variables: {
    user: IUsers["select"];
    isAdmin: boolean;
  };
}>()
  .get("/", zValidator("query", AppConstant.schema.FindManyArgsSchema), async (c) => {
    const isAdmin = c.get("isAdmin");
    const args = c.req.valid("query") as any;
    if (!isAdmin) {
      args.where = { isPublished: true };
    }
    const result = controller.trailers(args as ManyArgs);
    return responseHandler<typeof result>(c, result);
  })

  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const result = controller.trailer(id);
    return responseHandler<typeof result>(c, result);
  })

  .post("/", zValidator("json", z.any()), async (c) => {
    const input = c.req.valid("json");
    const result = controller.createTrailer(input);
    return responseHandler<typeof result>(c, result);
  })

  .patch("/:id", zValidator("json", TrailerSchemas.trailersUpdateSchema), async (c) => {
    const user = c.get("user");
    const input = c.req.valid("json");

    const result = controller.updateTrailer(input);
    return responseHandler<typeof result>(c, result);
  })

  .delete("/:id", (c) => {
    const id = c.req.param("id");
    const result = controller.deleteTrailer(id);
    return responseHandler<typeof result>(c, result);
  });
