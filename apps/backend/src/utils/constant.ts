import { z } from "zod";

export const AppConstant = {
  api: {
    pagination: {
      page: 1,
      limit: 10,
    },
  },
  schema: {
    FindManyArgsSchema: z
      .object({
        page: z.string().optional(),
        limit: z.string().optional(),
        where: z.object({}).optional(),
        orderBy: z.object({}).optional(),
      })
      .optional(),
  },

  API: {
    CODES: {
      OK: 200,
      UNAUTHORIZED: 401,
      CREATED: 201,
      FORBIDDEN: 403,
      BAD_REQUEST: 400,
      NOT_FOUND: 404,
      CONFLICT: 409,
      INTERNAL_SERVER_ERROR: 500,
      DATABASE_ERROR: 501,
    },

    ERROR_MESSAGES: {
      EXISTS: "Resource already exists",
      UNAUTHORIZED: "You are not authorized to perform this action",
      BAD_REQUEST: "Bad Request",
      INTERNAL_SERVER_ERROR: "Internal Server Error",
      DATABASE_ERROR: "Database Error",
      INVALID_CREDENTIALS: "Wrong email or password. Please try again with valid credentials",
      UNABLE_TO_PERFORM_ACTION: "Unable to perform this action at this time. Please try again later",
      USER_NOT_FOUND: "User not found",
      EMAIL_EXISTS: "This email address is already registered",
      INVALID_TOKEN: "Invalid token. Please use the token sent to your email address.",
      EXPIRED_TOKEN: "Token has expired. A new verification token has been sent to your email address.",
      ALREADY_VERIFIED: "This email has already been verified. Please login to your account.",
    },

    SUCCESS_MESSAGES: {
      CREATED: "Resource created successfully",
      UPDATED: "Resource updated successfully",
      DELETED: "Resource deleted successfully",
      REGISTERED: "User created successfully. Please verify your email address.",
      RESET_PASSWORD: "Password reset token sent to your email address",
      VERIFIED_EMAIL: "Email verified successfully. Please login to your account to continue.",
      CHANGED_PASSWORD: "Password changed successfully",
      RESENT_VERIFICATION_EMAIL:
        "Verification email resent successfully. Please check your email for the verification link.",
    },
  },
};
