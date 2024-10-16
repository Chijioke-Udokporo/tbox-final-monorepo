import { z } from "zod";
import { castsCreateInputSchema, castsUpdateInputSchema, castsSchema } from "~~/server/zod-schema";

const CastsInsertSchema = castsCreateInputSchema;
const CastsUpdateSchema = z.object({
  id: z.string(),
  cast: castsUpdateInputSchema,
});

export const CastSchemas = {
  castsSelectSchema: castsSchema,
  castsInsertSchema: CastsInsertSchema,
  castsUpdateSchema: CastsUpdateSchema,
};

export type ICast = {
  select: z.infer<typeof castsSchema>;
  insert: z.infer<typeof castsCreateInputSchema>;
  update: z.infer<typeof castsUpdateInputSchema>;
};
