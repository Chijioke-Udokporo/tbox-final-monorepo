import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { AppConfig } from "../utils/config";
import { rateLimiter } from "hono-rate-limiter";

export const SecurityMiddleware = {
  csrf: csrf({
    origin: AppConfig.security.allowedOrigins,
  }),

  cors: cors({
    origin: AppConfig.security.allowedOrigins,
    allowHeaders: ["Content-Type", "Authorization", "Credentials", "Map"],
    allowMethods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),

  rateLimiter: rateLimiter({
    windowMs: 60 * 1000,
    limit: 100,
    standardHeaders: "draft-6",
    keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "",
  }),
};
