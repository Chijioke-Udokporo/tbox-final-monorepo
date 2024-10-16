import { type IUsers } from "./modules/users/users.model";
import { Hono } from "hono";
import { TrailerRoutes } from "./modules/trailers/trailer.routes";
import { AdminRoutes, FTPRouter } from "./modules/general";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { SecurityMiddleware } from "./security/security.middleware";
import AuthMiddleware from "./security/auth.middleware";
import { UserRoutes } from "./modules/users/users.routes";
import { type ITrailer } from "./modules/trailers/trailer.model";

const app = new Hono()
  .basePath("/api")
  .use(SecurityMiddleware.csrf)
  .use(SecurityMiddleware.cors)
  .use(SecurityMiddleware.rateLimiter);

const HealthzRouter = app.get("/", (c) => c.text("OK"));

const AppRouter = app
  .route("/healthz", HealthzRouter)
  .route("/auth", AuthRoutes)
  .route("/ftp", FTPRouter)
  .use(AuthMiddleware)
  .route("/trailers", TrailerRoutes)
  .route("/admin", AdminRoutes)
  .route("/users", UserRoutes);

export default app;

export type AppRouter = typeof AppRouter;
export { ITrailer, IUsers };
