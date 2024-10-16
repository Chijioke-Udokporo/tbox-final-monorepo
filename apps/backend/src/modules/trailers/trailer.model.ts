import { z } from "zod";
import { trailersCreateInputSchema, trailersSchema, trailersUpdateInputSchema } from "../../zod-schema";

const mediaInsertSchema = z.object({
  mediaId: z.string(),
  videoUrl: z.string(),
  posterUrl: z.string(),
});

const trailersInsertSchema = trailersCreateInputSchema;
const newTrailersInsertSchema = trailersInsertSchema.and(mediaInsertSchema);

const trailerUpdateSchema = z.object({
  id: z.string(),
  trailer: trailersUpdateInputSchema,
});

const trailersSelectSchema = trailersSchema.extend({
  genres: z.array(z.string()),
  director: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().optional(),
  }),
  casts: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        image: z.string().optional(),
      })
    )
    .optional(),
});

export const TrailerSchemas = {
  trailersSelectSchema,
  trailersInsertSchema: newTrailersInsertSchema,
  trailersUpdateSchema: trailerUpdateSchema,
  mediaInsertSchema: mediaInsertSchema,
};

export type ITrailer = {
  select: z.infer<typeof trailersSelectSchema>;
  insert: z.infer<typeof newTrailersInsertSchema>;
  update: z.infer<typeof trailerUpdateSchema>;
  media: z.infer<typeof mediaInsertSchema>;
};
