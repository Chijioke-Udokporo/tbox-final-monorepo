import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { responseHandler } from "../../utils/response";
import { AppConstant } from "../../utils/constant";
import { z } from "zod";
import { IUsers, UsersSchema } from "./users.model";
import { UserService } from "./users.service";
import { dbPrisma } from "../../lib/prisma";

const service = new UserService(dbPrisma);

export const UserRoutes = new Hono<{
  Variables: {
    user: IUsers["select"];
    isAdmin: boolean;
  };
}>()
  .get("/me", async (c) => {
    const user = c.get("user");
    const result = service.user(user.id);
    return responseHandler<typeof result>(c, result);
  })
  .get("/", zValidator("query", AppConstant.schema.FindManyArgsSchema), async (c) => {
    const isAdmin = c.get("isAdmin");
    if (!isAdmin) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };

    const args = c.req.valid("query");
    const result = service.users(args as ManyArgs);
    return responseHandler<typeof result>(c, result);
  })

  .get("/:id", async (c) => {
    const isAdmin = c.get("isAdmin");
    if (!isAdmin) {
      const user = c.get("user");
      const id = c.req.param("id");
      if (user.id !== id) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };
    }

    const id = c.req.param("id");
    const result = service.user(id);
    return responseHandler<typeof result>(c, result);
  })

  .post("/", zValidator("json", z.any()), async (c) => {
    const isAdmin = c.get("isAdmin");
    if (!isAdmin) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };

    const input = c.req.valid("json");
    const result = service.create(input);
    return responseHandler<typeof result>(c, result);
  })

  .patch("/:id", zValidator("json", UsersSchema.update), async (c) => {
    const isAdmin = c.get("isAdmin");
    if (!isAdmin) {
      const user = c.get("user");
      const id = c.req.param("id");
      if (user.id !== id) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };
    }

    const input = c.req.valid("json");
    const result = service.update(input);
    return responseHandler<typeof result>(c, result);
  })

  .delete("/:id", (c) => {
    const isAdmin = c.get("isAdmin");
    if (!isAdmin) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };

    const id = c.req.param("id");
    const result = service.delete(id);
    return responseHandler<typeof result>(c, result);
  });
