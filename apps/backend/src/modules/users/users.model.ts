import { z } from "zod";
import { usersCreateInputSchema, usersSchema as usersZodSchema } from "../../zod-schema";

const insertSchema = usersCreateInputSchema;
const selectSchema = usersZodSchema;
const updateSchema = z.object({
  id: z.string(),
  user: z.object({
    role: z.string(),
    email: z.string(),
  }),
});

export type IUsers = {
  insert: z.infer<typeof insertSchema>;
  select: z.infer<typeof selectSchema>;
  update: z.infer<typeof updateSchema>;
};

export const UsersSchema = {
  insert: insertSchema,
  select: selectSchema,
  update: updateSchema,
};
