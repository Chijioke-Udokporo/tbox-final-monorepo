import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { AuthService } from "./auth.service";
import { CreateUserInputSchema, LoginInputSchema } from "./auth.model";
import { dbPrisma } from "../../lib/prisma";
import { responseHandler } from "../../utils/response";

const service = new AuthService(dbPrisma);

export const AuthRoutes = new Hono()
  .post("/login", zValidator("json", LoginInputSchema), async (c) => {
    const input = c.req.valid("json");
    const result = service.loginUser(input);
    return responseHandler<typeof result>(c, result);
  })

  .post("/create-admin", zValidator("json", CreateUserInputSchema), async (c) => {
    const input = c.req.valid("json");
    const result = service.createAdminUser(input);
    return responseHandler<typeof result>(c, result);
  })

  .post("/create-user", zValidator("json", CreateUserInputSchema), async (c) => {
    const input = c.req.valid("json");
    const result = service.createUser(input);
    return responseHandler<typeof result>(c, result);
  });
