import * as bcrypt from "bcryptjs";
import { jwtVerify, SignJWT } from "jose";
import { AppConfig } from "./config";

const saltRounds = AppConfig.security.saltRounds;
const jwtSecret = new TextEncoder().encode(AppConfig.security.jwtSecret);

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const signToken = async (token: { id: string; email: string; role: string }): Promise<string> => {
  return await new SignJWT(token)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h") // Token expires in 2 hours
    .sign(jwtSecret);
};

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, jwtSecret, { algorithms: ["HS256"] });
    return payload as { id: string; email: string; accountType: string };
  } catch (error) {
    return null;
  }
};
