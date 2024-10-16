import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { CreateUserInputSchema, LoginInputSchema } from "./auth.model";
import * as bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { AppConstant } from "../../utils/constant";
import { AppConfig } from "../../utils/config";

export class AuthService {
  constructor(private readonly db: PrismaClient) {}

  async createAdminUser(input: z.infer<typeof CreateUserInputSchema>) {
    const { password, email, ...rest } = input;

    const existingUser = await this.db.users.findFirst({ where: { role: "admin" } });
    if (email === existingUser?.email) throw { userError: AppConstant.API.ERROR_MESSAGES.EXISTS };

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await this.db.users.create({
      data: { ...rest, password: hashedPassword, email, role: "admin" },
    });

    return { message: "Admin user created successfully. Please login to continue" };
  }

  async createUser(input: z.infer<typeof CreateUserInputSchema>) {
    const { password, email, ...rest } = input;

    const existingUser = await this.db.users.findUnique({
      where: { email },
    });

    if (existingUser) throw { userError: AppConstant.API.ERROR_MESSAGES.EXISTS };
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await this.db.users.create({
      data: { ...rest, password: hashedPassword, email, role: "user" },
    });
  }

  async loginUser(input: z.infer<typeof LoginInputSchema>) {
    const { email, password } = input;

    const user = await this.db.users.findUnique({
      where: { email },
    });

    if (!user) throw { userError: AppConstant.API.ERROR_MESSAGES.INVALID_CREDENTIALS };

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) throw { userError: AppConstant.API.ERROR_MESSAGES.INVALID_CREDENTIALS };

    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("240h")
      .sign(new TextEncoder().encode(AppConfig.security.jwtSecret));

    return { token };
  }
}
