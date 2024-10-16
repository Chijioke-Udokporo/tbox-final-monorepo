import { z } from "zod";

const LoginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const CreateUserInputSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export { LoginInputSchema, CreateUserInputSchema };
