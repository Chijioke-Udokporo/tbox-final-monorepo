import type { Context } from "hono";
import { getCookie } from "hono/cookie";

import { responseError } from "../utils/response";
import { AppConfig } from "../utils/config";
import { AppConstant } from "../utils/constant";
import { verifyToken } from "../utils/validation";
export type UserVariables = {
  user: {
    id: string;
    email: string;
    role: string;
    companyId: string;
  };
};

const AuthMiddleware = async (c: Context, next: () => Promise<void>) => {
  try {
    const method = c.req.method;
    const url = c.req.url;

    const allowedRoutes = "/trailers";
    const isAllowedRoute = url.includes(allowedRoutes) && method === "GET";
    const CookieAuthorization = getCookie(c, AppConfig.security.cookieName);
    const Authorization = c.req.header("Authorization");

    if (!CookieAuthorization && !Authorization && !isAllowedRoute)
      throw {
        userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED,
      };

    let payload: any;

    if (CookieAuthorization) {
      payload = (await verifyToken(CookieAuthorization)) as any;
    } else if (Authorization) {
      const token = Authorization?.split(" ")[1];
      if (token) {
        payload = (await verifyToken(token as string)) as any;
      }
    }

    if (!payload && !isAllowedRoute) throw { userError: AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED };

    c.set("user", payload as UserVariables["user"]);
    c.set("isAdmin", payload?.role === "admin" || false);
    await next();
  } catch (error: any) {
    return responseError(c, error);
  }
};

export default AuthMiddleware;
