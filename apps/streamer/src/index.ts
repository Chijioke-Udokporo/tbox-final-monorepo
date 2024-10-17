import { Context, Hono } from "hono";
import StreamingRouter from "./streamer";
import { cors } from "hono/cors";
import { rateLimiter } from "hono-rate-limiter";

const app = new Hono();

app.use("*", async (c, next) => {
  const referer = c.req.header("referer");
  const origin = c.req.header("origin");
  const isIphone = c.req.header("user-agent")?.includes("iPhone") || false;
  const isAndroid = c.req.header("user-agent")?.includes("okhttp") || false;

  return await next();

  if (referer === "trailer-box-mobile" && (isIphone || isAndroid)) {
    c.header("Cross-Origin-Resource-Policy", "same-site");
    return await next();
  }

  if (process.env.CORS_ORIGIN?.split(",").includes(origin!)) {
    c.header("Cross-Origin-Resource-Policy", "same-site");
    return await next();
  }

  return c.text("No origin provided or unauthorize", 400);
});

app.use(
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 100,
    standardHeaders: "draft-6",
    keyGenerator: (c: Context) => c.req.header("cf-connecting-ip") ?? "",
  })
);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || [],
    allowHeaders: ["Content-Type", "Authorization", "Referer", "Credentials"],
    credentials: true,
  })
);

app.route("/streamer/video", StreamingRouter);

export default app;
