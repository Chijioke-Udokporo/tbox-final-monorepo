import { type Context } from "hono";
import { setCookie } from "hono/cookie";
import { type StatusCode } from "hono/utils/http-status";
import { AppConfig } from "./config";
import { AppConstant } from "./constant";
import AppLogger from "../lib/consola";
import { Prisma } from "@prisma/client";

type ResponseMeta<T> = {
  status?: number;
  error?: string | null;
  data?: T | null;
};

const responseMeta = <T>({ status, error = null, data }: ResponseMeta<T>) => {
  return { status, error, payload: data };
};

export const responseSuccess = <T>(c: Context, data: T) => {
  AppLogger.success("Response Success");
  return c.json(
    responseMeta({
      status: AppConstant.API.CODES.OK,
      data,
    }),
    AppConstant.API.CODES.OK as StatusCode
  );
};

export const responseError = (c: Context, err: any) => {
  //AppLogger.error(err.userError);

  if (err?.userError?.includes(AppConstant.API.ERROR_MESSAGES.UNAUTHORIZED)) {
    return c.json(
      responseMeta({
        error: err.userError,
        status: AppConstant.API.CODES.UNAUTHORIZED,
      }),
      AppConstant.API.CODES.UNAUTHORIZED as StatusCode
    );
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return c.json(
      responseMeta({
        error: err.message,
        status: AppConstant.API.CODES.BAD_REQUEST,
      }),
      AppConstant.API.CODES.BAD_REQUEST as StatusCode
    );
  }

  if (err.userError) {
    return c.json(
      responseMeta({
        error: err.userError,
        status: AppConstant.API.CODES.BAD_REQUEST,
      }),
      AppConstant.API.CODES.BAD_REQUEST as StatusCode
    );
  }

  return c.json(
    responseMeta({
      error: AppConstant.API.ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      status: AppConstant.API.CODES.INTERNAL_SERVER_ERROR,
    }),
    AppConstant.API.CODES.INTERNAL_SERVER_ERROR as StatusCode
  );
};

export const responseHandler = async <T>(c: Context, next: T) => {
  try {
    const data = await next;
    const result = data as any;

    if (result?.token) {
      setCookie(c, AppConfig.security.cookieName, result?.token, {
        sameSite: "lax",
        secure: false,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 1,
      });
    }

    return responseSuccess<typeof data>(c, data);
  } catch (error: any) {
    //AppLogger.error(error?.message);
    return responseError(c, error);
  }
};
