import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const CastsScalarFieldEnumSchema = z.enum(['id','name','image','createdAt','updatedAt']);

export const FavoritesScalarFieldEnumSchema = z.enum(['id','userId','trailerId','createdAt','updatedAt']);

export const TrailersScalarFieldEnumSchema = z.enum(['id','title','mediaId','poster','alias','releaseDate','director','runtime','rating','plot','tomatometer','audienceScore','genre','casts','writers','isPublished','createdAt','updatedAt']);

export const UsersScalarFieldEnumSchema = z.enum(['id','firstName','lastName','email','role','password','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CASTS SCHEMA
/////////////////////////////////////////

export const castsSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type casts = z.infer<typeof castsSchema>

/////////////////////////////////////////
// FAVORITES SCHEMA
/////////////////////////////////////////

export const favoritesSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  trailerId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type favorites = z.infer<typeof favoritesSchema>

/////////////////////////////////////////
// TRAILERS SCHEMA
/////////////////////////////////////////

export const trailersSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().nullable(),
  alias: z.string().nullable(),
  releaseDate: z.coerce.date().nullable(),
  director: z.string().nullable(),
  runtime: z.string().nullable(),
  rating: z.string().nullable(),
  plot: z.string().nullable(),
  tomatometer: z.string().nullable(),
  audienceScore: z.string().nullable(),
  genre: z.string().nullable(),
  casts: z.string().nullable(),
  writers: z.string().nullable(),
  isPublished: z.boolean().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type trailers = z.infer<typeof trailersSchema>

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  id: z.string().cuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CASTS
//------------------------------------------------------

export const castsSelectSchema: z.ZodType<Prisma.castsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// FAVORITES
//------------------------------------------------------

export const favoritesIncludeSchema: z.ZodType<Prisma.favoritesInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  trailer: z.union([z.boolean(),z.lazy(() => trailersArgsSchema)]).optional(),
}).strict()

export const favoritesArgsSchema: z.ZodType<Prisma.favoritesDefaultArgs> = z.object({
  select: z.lazy(() => favoritesSelectSchema).optional(),
  include: z.lazy(() => favoritesIncludeSchema).optional(),
}).strict();

export const favoritesSelectSchema: z.ZodType<Prisma.favoritesSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  trailerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  trailer: z.union([z.boolean(),z.lazy(() => trailersArgsSchema)]).optional(),
}).strict()

// TRAILERS
//------------------------------------------------------

export const trailersIncludeSchema: z.ZodType<Prisma.trailersInclude> = z.object({
  favorites: z.union([z.boolean(),z.lazy(() => favoritesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TrailersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const trailersArgsSchema: z.ZodType<Prisma.trailersDefaultArgs> = z.object({
  select: z.lazy(() => trailersSelectSchema).optional(),
  include: z.lazy(() => trailersIncludeSchema).optional(),
}).strict();

export const trailersCountOutputTypeArgsSchema: z.ZodType<Prisma.trailersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => trailersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const trailersCountOutputTypeSelectSchema: z.ZodType<Prisma.trailersCountOutputTypeSelect> = z.object({
  favorites: z.boolean().optional(),
}).strict();

export const trailersSelectSchema: z.ZodType<Prisma.trailersSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  mediaId: z.boolean().optional(),
  poster: z.boolean().optional(),
  alias: z.boolean().optional(),
  releaseDate: z.boolean().optional(),
  director: z.boolean().optional(),
  runtime: z.boolean().optional(),
  rating: z.boolean().optional(),
  plot: z.boolean().optional(),
  tomatometer: z.boolean().optional(),
  audienceScore: z.boolean().optional(),
  genre: z.boolean().optional(),
  casts: z.boolean().optional(),
  writers: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  favorites: z.union([z.boolean(),z.lazy(() => favoritesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TrailersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USERS
//------------------------------------------------------

export const usersIncludeSchema: z.ZodType<Prisma.usersInclude> = z.object({
  favorites: z.union([z.boolean(),z.lazy(() => favoritesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const usersArgsSchema: z.ZodType<Prisma.usersDefaultArgs> = z.object({
  select: z.lazy(() => usersSelectSchema).optional(),
  include: z.lazy(() => usersIncludeSchema).optional(),
}).strict();

export const usersCountOutputTypeArgsSchema: z.ZodType<Prisma.usersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => usersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const usersCountOutputTypeSelectSchema: z.ZodType<Prisma.usersCountOutputTypeSelect> = z.object({
  favorites: z.boolean().optional(),
}).strict();

export const usersSelectSchema: z.ZodType<Prisma.usersSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  favorites: z.union([z.boolean(),z.lazy(() => favoritesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const castsWhereInputSchema: z.ZodType<Prisma.castsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => castsWhereInputSchema),z.lazy(() => castsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => castsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => castsWhereInputSchema),z.lazy(() => castsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const castsOrderByWithRelationInputSchema: z.ZodType<Prisma.castsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const castsWhereUniqueInputSchema: z.ZodType<Prisma.castsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => castsWhereInputSchema),z.lazy(() => castsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => castsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => castsWhereInputSchema),z.lazy(() => castsWhereInputSchema).array() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const castsOrderByWithAggregationInputSchema: z.ZodType<Prisma.castsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => castsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => castsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => castsMinOrderByAggregateInputSchema).optional()
}).strict();

export const castsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.castsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => castsScalarWhereWithAggregatesInputSchema),z.lazy(() => castsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => castsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => castsScalarWhereWithAggregatesInputSchema),z.lazy(() => castsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const favoritesWhereInputSchema: z.ZodType<Prisma.favoritesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => favoritesWhereInputSchema),z.lazy(() => favoritesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => favoritesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => favoritesWhereInputSchema),z.lazy(() => favoritesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trailerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  trailer: z.union([ z.lazy(() => TrailersRelationFilterSchema),z.lazy(() => trailersWhereInputSchema) ]).optional(),
}).strict();

export const favoritesOrderByWithRelationInputSchema: z.ZodType<Prisma.favoritesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  trailerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  trailer: z.lazy(() => trailersOrderByWithRelationInputSchema).optional()
}).strict();

export const favoritesWhereUniqueInputSchema: z.ZodType<Prisma.favoritesWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => favoritesWhereInputSchema),z.lazy(() => favoritesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => favoritesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => favoritesWhereInputSchema),z.lazy(() => favoritesWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trailerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  trailer: z.union([ z.lazy(() => TrailersRelationFilterSchema),z.lazy(() => trailersWhereInputSchema) ]).optional(),
}).strict());

export const favoritesOrderByWithAggregationInputSchema: z.ZodType<Prisma.favoritesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  trailerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => favoritesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => favoritesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => favoritesMinOrderByAggregateInputSchema).optional()
}).strict();

export const favoritesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.favoritesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => favoritesScalarWhereWithAggregatesInputSchema),z.lazy(() => favoritesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => favoritesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => favoritesScalarWhereWithAggregatesInputSchema),z.lazy(() => favoritesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  trailerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const trailersWhereInputSchema: z.ZodType<Prisma.trailersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => trailersWhereInputSchema),z.lazy(() => trailersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => trailersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => trailersWhereInputSchema),z.lazy(() => trailersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mediaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  poster: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  alias: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  releaseDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  director: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  runtime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  plot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tomatometer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  audienceScore: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genre: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  casts: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  writers: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  favorites: z.lazy(() => FavoritesListRelationFilterSchema).optional()
}).strict();

export const trailersOrderByWithRelationInputSchema: z.ZodType<Prisma.trailersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  mediaId: z.lazy(() => SortOrderSchema).optional(),
  poster: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  releaseDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  director: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  runtime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rating: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  plot: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tomatometer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  audienceScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genre: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  casts: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  writers: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPublished: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  favorites: z.lazy(() => favoritesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const trailersWhereUniqueInputSchema: z.ZodType<Prisma.trailersWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => trailersWhereInputSchema),z.lazy(() => trailersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => trailersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => trailersWhereInputSchema),z.lazy(() => trailersWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mediaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  poster: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  alias: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  releaseDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  director: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  runtime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  plot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tomatometer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  audienceScore: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genre: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  casts: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  writers: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  favorites: z.lazy(() => FavoritesListRelationFilterSchema).optional()
}).strict());

export const trailersOrderByWithAggregationInputSchema: z.ZodType<Prisma.trailersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  mediaId: z.lazy(() => SortOrderSchema).optional(),
  poster: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  releaseDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  director: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  runtime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rating: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  plot: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tomatometer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  audienceScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genre: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  casts: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  writers: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPublished: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => trailersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => trailersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => trailersMinOrderByAggregateInputSchema).optional()
}).strict();

export const trailersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.trailersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => trailersScalarWhereWithAggregatesInputSchema),z.lazy(() => trailersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => trailersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => trailersScalarWhereWithAggregatesInputSchema),z.lazy(() => trailersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mediaId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  poster: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  alias: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  releaseDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  director: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  runtime: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rating: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  plot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tomatometer: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  audienceScore: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  genre: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  casts: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  writers: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isPublished: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const usersWhereInputSchema: z.ZodType<Prisma.usersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  favorites: z.lazy(() => FavoritesListRelationFilterSchema).optional()
}).strict();

export const usersOrderByWithRelationInputSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  favorites: z.lazy(() => favoritesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const usersWhereUniqueInputSchema: z.ZodType<Prisma.usersWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  favorites: z.lazy(() => FavoritesListRelationFilterSchema).optional()
}).strict());

export const usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => usersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => usersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => usersMinOrderByAggregateInputSchema).optional()
}).strict();

export const usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.usersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const castsCreateInputSchema: z.ZodType<Prisma.castsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const castsUncheckedCreateInputSchema: z.ZodType<Prisma.castsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const castsUpdateInputSchema: z.ZodType<Prisma.castsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const castsUncheckedUpdateInputSchema: z.ZodType<Prisma.castsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const castsCreateManyInputSchema: z.ZodType<Prisma.castsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const castsUpdateManyMutationInputSchema: z.ZodType<Prisma.castsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const castsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.castsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesCreateInputSchema: z.ZodType<Prisma.favoritesCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutFavoritesInputSchema),
  trailer: z.lazy(() => trailersCreateNestedOneWithoutFavoritesInputSchema)
}).strict();

export const favoritesUncheckedCreateInputSchema: z.ZodType<Prisma.favoritesUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  trailerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesUpdateInputSchema: z.ZodType<Prisma.favoritesUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutFavoritesNestedInputSchema).optional(),
  trailer: z.lazy(() => trailersUpdateOneRequiredWithoutFavoritesNestedInputSchema).optional()
}).strict();

export const favoritesUncheckedUpdateInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trailerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesCreateManyInputSchema: z.ZodType<Prisma.favoritesCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  trailerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesUpdateManyMutationInputSchema: z.ZodType<Prisma.favoritesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trailerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const trailersCreateInputSchema: z.ZodType<Prisma.trailersCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().optional().nullable(),
  alias: z.string().optional().nullable(),
  releaseDate: z.coerce.date().optional().nullable(),
  director: z.string().optional().nullable(),
  runtime: z.string().optional().nullable(),
  rating: z.string().optional().nullable(),
  plot: z.string().optional().nullable(),
  tomatometer: z.string().optional().nullable(),
  audienceScore: z.string().optional().nullable(),
  genre: z.string().optional().nullable(),
  casts: z.string().optional().nullable(),
  writers: z.string().optional().nullable(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  favorites: z.lazy(() => favoritesCreateNestedManyWithoutTrailerInputSchema).optional()
}).strict();

export const trailersUncheckedCreateInputSchema: z.ZodType<Prisma.trailersUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().optional().nullable(),
  alias: z.string().optional().nullable(),
  releaseDate: z.coerce.date().optional().nullable(),
  director: z.string().optional().nullable(),
  runtime: z.string().optional().nullable(),
  rating: z.string().optional().nullable(),
  plot: z.string().optional().nullable(),
  tomatometer: z.string().optional().nullable(),
  audienceScore: z.string().optional().nullable(),
  genre: z.string().optional().nullable(),
  casts: z.string().optional().nullable(),
  writers: z.string().optional().nullable(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  favorites: z.lazy(() => favoritesUncheckedCreateNestedManyWithoutTrailerInputSchema).optional()
}).strict();

export const trailersUpdateInputSchema: z.ZodType<Prisma.trailersUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  favorites: z.lazy(() => favoritesUpdateManyWithoutTrailerNestedInputSchema).optional()
}).strict();

export const trailersUncheckedUpdateInputSchema: z.ZodType<Prisma.trailersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  favorites: z.lazy(() => favoritesUncheckedUpdateManyWithoutTrailerNestedInputSchema).optional()
}).strict();

export const trailersCreateManyInputSchema: z.ZodType<Prisma.trailersCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().optional().nullable(),
  alias: z.string().optional().nullable(),
  releaseDate: z.coerce.date().optional().nullable(),
  director: z.string().optional().nullable(),
  runtime: z.string().optional().nullable(),
  rating: z.string().optional().nullable(),
  plot: z.string().optional().nullable(),
  tomatometer: z.string().optional().nullable(),
  audienceScore: z.string().optional().nullable(),
  genre: z.string().optional().nullable(),
  casts: z.string().optional().nullable(),
  writers: z.string().optional().nullable(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const trailersUpdateManyMutationInputSchema: z.ZodType<Prisma.trailersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const trailersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.trailersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersCreateInputSchema: z.ZodType<Prisma.usersCreateInput> = z.object({
  id: z.string().cuid().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  favorites: z.lazy(() => favoritesCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const usersUncheckedCreateInputSchema: z.ZodType<Prisma.usersUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  favorites: z.lazy(() => favoritesUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const usersUpdateInputSchema: z.ZodType<Prisma.usersUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  favorites: z.lazy(() => favoritesUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateInputSchema: z.ZodType<Prisma.usersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  favorites: z.lazy(() => favoritesUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const usersCreateManyInputSchema: z.ZodType<Prisma.usersCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const usersUpdateManyMutationInputSchema: z.ZodType<Prisma.usersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const castsCountOrderByAggregateInputSchema: z.ZodType<Prisma.castsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const castsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.castsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const castsMinOrderByAggregateInputSchema: z.ZodType<Prisma.castsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UsersRelationFilterSchema: z.ZodType<Prisma.UsersRelationFilter> = z.object({
  is: z.lazy(() => usersWhereInputSchema).optional(),
  isNot: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const TrailersRelationFilterSchema: z.ZodType<Prisma.TrailersRelationFilter> = z.object({
  is: z.lazy(() => trailersWhereInputSchema).optional(),
  isNot: z.lazy(() => trailersWhereInputSchema).optional()
}).strict();

export const favoritesCountOrderByAggregateInputSchema: z.ZodType<Prisma.favoritesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  trailerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const favoritesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.favoritesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  trailerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const favoritesMinOrderByAggregateInputSchema: z.ZodType<Prisma.favoritesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  trailerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const FavoritesListRelationFilterSchema: z.ZodType<Prisma.FavoritesListRelationFilter> = z.object({
  every: z.lazy(() => favoritesWhereInputSchema).optional(),
  some: z.lazy(() => favoritesWhereInputSchema).optional(),
  none: z.lazy(() => favoritesWhereInputSchema).optional()
}).strict();

export const favoritesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.favoritesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const trailersCountOrderByAggregateInputSchema: z.ZodType<Prisma.trailersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  mediaId: z.lazy(() => SortOrderSchema).optional(),
  poster: z.lazy(() => SortOrderSchema).optional(),
  alias: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  director: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  plot: z.lazy(() => SortOrderSchema).optional(),
  tomatometer: z.lazy(() => SortOrderSchema).optional(),
  audienceScore: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  casts: z.lazy(() => SortOrderSchema).optional(),
  writers: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const trailersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.trailersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  mediaId: z.lazy(() => SortOrderSchema).optional(),
  poster: z.lazy(() => SortOrderSchema).optional(),
  alias: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  director: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  plot: z.lazy(() => SortOrderSchema).optional(),
  tomatometer: z.lazy(() => SortOrderSchema).optional(),
  audienceScore: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  casts: z.lazy(() => SortOrderSchema).optional(),
  writers: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const trailersMinOrderByAggregateInputSchema: z.ZodType<Prisma.trailersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  mediaId: z.lazy(() => SortOrderSchema).optional(),
  poster: z.lazy(() => SortOrderSchema).optional(),
  alias: z.lazy(() => SortOrderSchema).optional(),
  releaseDate: z.lazy(() => SortOrderSchema).optional(),
  director: z.lazy(() => SortOrderSchema).optional(),
  runtime: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  plot: z.lazy(() => SortOrderSchema).optional(),
  tomatometer: z.lazy(() => SortOrderSchema).optional(),
  audienceScore: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  casts: z.lazy(() => SortOrderSchema).optional(),
  writers: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.usersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.usersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMinOrderByAggregateInputSchema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const usersCreateNestedOneWithoutFavoritesInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutFavoritesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedCreateWithoutFavoritesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFavoritesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export const trailersCreateNestedOneWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersCreateNestedOneWithoutFavoritesInput> = z.object({
  create: z.union([ z.lazy(() => trailersCreateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedCreateWithoutFavoritesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => trailersCreateOrConnectWithoutFavoritesInputSchema).optional(),
  connect: z.lazy(() => trailersWhereUniqueInputSchema).optional()
}).strict();

export const usersUpdateOneRequiredWithoutFavoritesNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutFavoritesNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedCreateWithoutFavoritesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFavoritesInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutFavoritesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutFavoritesInputSchema),z.lazy(() => usersUpdateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutFavoritesInputSchema) ]).optional(),
}).strict();

export const trailersUpdateOneRequiredWithoutFavoritesNestedInputSchema: z.ZodType<Prisma.trailersUpdateOneRequiredWithoutFavoritesNestedInput> = z.object({
  create: z.union([ z.lazy(() => trailersCreateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedCreateWithoutFavoritesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => trailersCreateOrConnectWithoutFavoritesInputSchema).optional(),
  upsert: z.lazy(() => trailersUpsertWithoutFavoritesInputSchema).optional(),
  connect: z.lazy(() => trailersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => trailersUpdateToOneWithWhereWithoutFavoritesInputSchema),z.lazy(() => trailersUpdateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedUpdateWithoutFavoritesInputSchema) ]).optional(),
}).strict();

export const favoritesCreateNestedManyWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesCreateNestedManyWithoutTrailerInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesCreateWithoutTrailerInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyTrailerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const favoritesUncheckedCreateNestedManyWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUncheckedCreateNestedManyWithoutTrailerInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesCreateWithoutTrailerInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyTrailerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const favoritesUpdateManyWithoutTrailerNestedInputSchema: z.ZodType<Prisma.favoritesUpdateManyWithoutTrailerNestedInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesCreateWithoutTrailerInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => favoritesUpsertWithWhereUniqueWithoutTrailerInputSchema),z.lazy(() => favoritesUpsertWithWhereUniqueWithoutTrailerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyTrailerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => favoritesUpdateWithWhereUniqueWithoutTrailerInputSchema),z.lazy(() => favoritesUpdateWithWhereUniqueWithoutTrailerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => favoritesUpdateManyWithWhereWithoutTrailerInputSchema),z.lazy(() => favoritesUpdateManyWithWhereWithoutTrailerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const favoritesUncheckedUpdateManyWithoutTrailerNestedInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateManyWithoutTrailerNestedInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesCreateWithoutTrailerInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutTrailerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => favoritesUpsertWithWhereUniqueWithoutTrailerInputSchema),z.lazy(() => favoritesUpsertWithWhereUniqueWithoutTrailerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyTrailerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => favoritesUpdateWithWhereUniqueWithoutTrailerInputSchema),z.lazy(() => favoritesUpdateWithWhereUniqueWithoutTrailerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => favoritesUpdateManyWithWhereWithoutTrailerInputSchema),z.lazy(() => favoritesUpdateManyWithWhereWithoutTrailerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const favoritesCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.favoritesCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesCreateWithoutUserInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const favoritesUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.favoritesUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesCreateWithoutUserInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const favoritesUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.favoritesUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesCreateWithoutUserInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => favoritesUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => favoritesUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => favoritesUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => favoritesUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => favoritesUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => favoritesUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const favoritesUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesCreateWithoutUserInputSchema).array(),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema),z.lazy(() => favoritesCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => favoritesUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => favoritesUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => favoritesCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => favoritesWhereUniqueInputSchema),z.lazy(() => favoritesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => favoritesUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => favoritesUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => favoritesUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => favoritesUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const usersCreateWithoutFavoritesInputSchema: z.ZodType<Prisma.usersCreateWithoutFavoritesInput> = z.object({
  id: z.string().cuid().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const usersUncheckedCreateWithoutFavoritesInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutFavoritesInput> = z.object({
  id: z.string().cuid().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const usersCreateOrConnectWithoutFavoritesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutFavoritesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedCreateWithoutFavoritesInputSchema) ]),
}).strict();

export const trailersCreateWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersCreateWithoutFavoritesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().optional().nullable(),
  alias: z.string().optional().nullable(),
  releaseDate: z.coerce.date().optional().nullable(),
  director: z.string().optional().nullable(),
  runtime: z.string().optional().nullable(),
  rating: z.string().optional().nullable(),
  plot: z.string().optional().nullable(),
  tomatometer: z.string().optional().nullable(),
  audienceScore: z.string().optional().nullable(),
  genre: z.string().optional().nullable(),
  casts: z.string().optional().nullable(),
  writers: z.string().optional().nullable(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const trailersUncheckedCreateWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersUncheckedCreateWithoutFavoritesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  mediaId: z.string(),
  poster: z.string().optional().nullable(),
  alias: z.string().optional().nullable(),
  releaseDate: z.coerce.date().optional().nullable(),
  director: z.string().optional().nullable(),
  runtime: z.string().optional().nullable(),
  rating: z.string().optional().nullable(),
  plot: z.string().optional().nullable(),
  tomatometer: z.string().optional().nullable(),
  audienceScore: z.string().optional().nullable(),
  genre: z.string().optional().nullable(),
  casts: z.string().optional().nullable(),
  writers: z.string().optional().nullable(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const trailersCreateOrConnectWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersCreateOrConnectWithoutFavoritesInput> = z.object({
  where: z.lazy(() => trailersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => trailersCreateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedCreateWithoutFavoritesInputSchema) ]),
}).strict();

export const usersUpsertWithoutFavoritesInputSchema: z.ZodType<Prisma.usersUpsertWithoutFavoritesInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutFavoritesInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedCreateWithoutFavoritesInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersUpdateToOneWithWhereWithoutFavoritesInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutFavoritesInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutFavoritesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutFavoritesInputSchema) ]),
}).strict();

export const usersUpdateWithoutFavoritesInputSchema: z.ZodType<Prisma.usersUpdateWithoutFavoritesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersUncheckedUpdateWithoutFavoritesInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutFavoritesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const trailersUpsertWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersUpsertWithoutFavoritesInput> = z.object({
  update: z.union([ z.lazy(() => trailersUpdateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedUpdateWithoutFavoritesInputSchema) ]),
  create: z.union([ z.lazy(() => trailersCreateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedCreateWithoutFavoritesInputSchema) ]),
  where: z.lazy(() => trailersWhereInputSchema).optional()
}).strict();

export const trailersUpdateToOneWithWhereWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersUpdateToOneWithWhereWithoutFavoritesInput> = z.object({
  where: z.lazy(() => trailersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => trailersUpdateWithoutFavoritesInputSchema),z.lazy(() => trailersUncheckedUpdateWithoutFavoritesInputSchema) ]),
}).strict();

export const trailersUpdateWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersUpdateWithoutFavoritesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const trailersUncheckedUpdateWithoutFavoritesInputSchema: z.ZodType<Prisma.trailersUncheckedUpdateWithoutFavoritesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mediaId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poster: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alias: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  releaseDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  director: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  runtime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rating: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  plot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tomatometer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  audienceScore: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casts: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  writers: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isPublished: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesCreateWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesCreateWithoutTrailerInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutFavoritesInputSchema)
}).strict();

export const favoritesUncheckedCreateWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUncheckedCreateWithoutTrailerInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesCreateOrConnectWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesCreateOrConnectWithoutTrailerInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema) ]),
}).strict();

export const favoritesCreateManyTrailerInputEnvelopeSchema: z.ZodType<Prisma.favoritesCreateManyTrailerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => favoritesCreateManyTrailerInputSchema),z.lazy(() => favoritesCreateManyTrailerInputSchema).array() ]),
}).strict();

export const favoritesUpsertWithWhereUniqueWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUpsertWithWhereUniqueWithoutTrailerInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => favoritesUpdateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedUpdateWithoutTrailerInputSchema) ]),
  create: z.union([ z.lazy(() => favoritesCreateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutTrailerInputSchema) ]),
}).strict();

export const favoritesUpdateWithWhereUniqueWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUpdateWithWhereUniqueWithoutTrailerInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => favoritesUpdateWithoutTrailerInputSchema),z.lazy(() => favoritesUncheckedUpdateWithoutTrailerInputSchema) ]),
}).strict();

export const favoritesUpdateManyWithWhereWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUpdateManyWithWhereWithoutTrailerInput> = z.object({
  where: z.lazy(() => favoritesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => favoritesUpdateManyMutationInputSchema),z.lazy(() => favoritesUncheckedUpdateManyWithoutTrailerInputSchema) ]),
}).strict();

export const favoritesScalarWhereInputSchema: z.ZodType<Prisma.favoritesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => favoritesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => favoritesScalarWhereInputSchema),z.lazy(() => favoritesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  trailerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const favoritesCreateWithoutUserInputSchema: z.ZodType<Prisma.favoritesCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  trailer: z.lazy(() => trailersCreateNestedOneWithoutFavoritesInputSchema)
}).strict();

export const favoritesUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.favoritesUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  trailerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.favoritesCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const favoritesCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.favoritesCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => favoritesCreateManyUserInputSchema),z.lazy(() => favoritesCreateManyUserInputSchema).array() ]),
}).strict();

export const favoritesUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.favoritesUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => favoritesUpdateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => favoritesCreateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const favoritesUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.favoritesUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => favoritesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => favoritesUpdateWithoutUserInputSchema),z.lazy(() => favoritesUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const favoritesUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.favoritesUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => favoritesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => favoritesUpdateManyMutationInputSchema),z.lazy(() => favoritesUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const favoritesCreateManyTrailerInputSchema: z.ZodType<Prisma.favoritesCreateManyTrailerInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesUpdateWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUpdateWithoutTrailerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutFavoritesNestedInputSchema).optional()
}).strict();

export const favoritesUncheckedUpdateWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateWithoutTrailerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesUncheckedUpdateManyWithoutTrailerInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateManyWithoutTrailerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesCreateManyUserInputSchema: z.ZodType<Prisma.favoritesCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  trailerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const favoritesUpdateWithoutUserInputSchema: z.ZodType<Prisma.favoritesUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trailer: z.lazy(() => trailersUpdateOneRequiredWithoutFavoritesNestedInputSchema).optional()
}).strict();

export const favoritesUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trailerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const favoritesUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.favoritesUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trailerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const castsFindFirstArgsSchema: z.ZodType<Prisma.castsFindFirstArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereInputSchema.optional(),
  orderBy: z.union([ castsOrderByWithRelationInputSchema.array(),castsOrderByWithRelationInputSchema ]).optional(),
  cursor: castsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CastsScalarFieldEnumSchema,CastsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const castsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.castsFindFirstOrThrowArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereInputSchema.optional(),
  orderBy: z.union([ castsOrderByWithRelationInputSchema.array(),castsOrderByWithRelationInputSchema ]).optional(),
  cursor: castsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CastsScalarFieldEnumSchema,CastsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const castsFindManyArgsSchema: z.ZodType<Prisma.castsFindManyArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereInputSchema.optional(),
  orderBy: z.union([ castsOrderByWithRelationInputSchema.array(),castsOrderByWithRelationInputSchema ]).optional(),
  cursor: castsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CastsScalarFieldEnumSchema,CastsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const castsAggregateArgsSchema: z.ZodType<Prisma.castsAggregateArgs> = z.object({
  where: castsWhereInputSchema.optional(),
  orderBy: z.union([ castsOrderByWithRelationInputSchema.array(),castsOrderByWithRelationInputSchema ]).optional(),
  cursor: castsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const castsGroupByArgsSchema: z.ZodType<Prisma.castsGroupByArgs> = z.object({
  where: castsWhereInputSchema.optional(),
  orderBy: z.union([ castsOrderByWithAggregationInputSchema.array(),castsOrderByWithAggregationInputSchema ]).optional(),
  by: CastsScalarFieldEnumSchema.array(),
  having: castsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const castsFindUniqueArgsSchema: z.ZodType<Prisma.castsFindUniqueArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereUniqueInputSchema,
}).strict() ;

export const castsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.castsFindUniqueOrThrowArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereUniqueInputSchema,
}).strict() ;

export const favoritesFindFirstArgsSchema: z.ZodType<Prisma.favoritesFindFirstArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereInputSchema.optional(),
  orderBy: z.union([ favoritesOrderByWithRelationInputSchema.array(),favoritesOrderByWithRelationInputSchema ]).optional(),
  cursor: favoritesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FavoritesScalarFieldEnumSchema,FavoritesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const favoritesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.favoritesFindFirstOrThrowArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereInputSchema.optional(),
  orderBy: z.union([ favoritesOrderByWithRelationInputSchema.array(),favoritesOrderByWithRelationInputSchema ]).optional(),
  cursor: favoritesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FavoritesScalarFieldEnumSchema,FavoritesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const favoritesFindManyArgsSchema: z.ZodType<Prisma.favoritesFindManyArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereInputSchema.optional(),
  orderBy: z.union([ favoritesOrderByWithRelationInputSchema.array(),favoritesOrderByWithRelationInputSchema ]).optional(),
  cursor: favoritesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FavoritesScalarFieldEnumSchema,FavoritesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const favoritesAggregateArgsSchema: z.ZodType<Prisma.favoritesAggregateArgs> = z.object({
  where: favoritesWhereInputSchema.optional(),
  orderBy: z.union([ favoritesOrderByWithRelationInputSchema.array(),favoritesOrderByWithRelationInputSchema ]).optional(),
  cursor: favoritesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const favoritesGroupByArgsSchema: z.ZodType<Prisma.favoritesGroupByArgs> = z.object({
  where: favoritesWhereInputSchema.optional(),
  orderBy: z.union([ favoritesOrderByWithAggregationInputSchema.array(),favoritesOrderByWithAggregationInputSchema ]).optional(),
  by: FavoritesScalarFieldEnumSchema.array(),
  having: favoritesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const favoritesFindUniqueArgsSchema: z.ZodType<Prisma.favoritesFindUniqueArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereUniqueInputSchema,
}).strict() ;

export const favoritesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.favoritesFindUniqueOrThrowArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereUniqueInputSchema,
}).strict() ;

export const trailersFindFirstArgsSchema: z.ZodType<Prisma.trailersFindFirstArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereInputSchema.optional(),
  orderBy: z.union([ trailersOrderByWithRelationInputSchema.array(),trailersOrderByWithRelationInputSchema ]).optional(),
  cursor: trailersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrailersScalarFieldEnumSchema,TrailersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const trailersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.trailersFindFirstOrThrowArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereInputSchema.optional(),
  orderBy: z.union([ trailersOrderByWithRelationInputSchema.array(),trailersOrderByWithRelationInputSchema ]).optional(),
  cursor: trailersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrailersScalarFieldEnumSchema,TrailersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const trailersFindManyArgsSchema: z.ZodType<Prisma.trailersFindManyArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereInputSchema.optional(),
  orderBy: z.union([ trailersOrderByWithRelationInputSchema.array(),trailersOrderByWithRelationInputSchema ]).optional(),
  cursor: trailersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrailersScalarFieldEnumSchema,TrailersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const trailersAggregateArgsSchema: z.ZodType<Prisma.trailersAggregateArgs> = z.object({
  where: trailersWhereInputSchema.optional(),
  orderBy: z.union([ trailersOrderByWithRelationInputSchema.array(),trailersOrderByWithRelationInputSchema ]).optional(),
  cursor: trailersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const trailersGroupByArgsSchema: z.ZodType<Prisma.trailersGroupByArgs> = z.object({
  where: trailersWhereInputSchema.optional(),
  orderBy: z.union([ trailersOrderByWithAggregationInputSchema.array(),trailersOrderByWithAggregationInputSchema ]).optional(),
  by: TrailersScalarFieldEnumSchema.array(),
  having: trailersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const trailersFindUniqueArgsSchema: z.ZodType<Prisma.trailersFindUniqueArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereUniqueInputSchema,
}).strict() ;

export const trailersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.trailersFindUniqueOrThrowArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereUniqueInputSchema,
}).strict() ;

export const usersFindFirstArgsSchema: z.ZodType<Prisma.usersFindFirstArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.usersFindFirstOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindManyArgsSchema: z.ZodType<Prisma.usersFindManyArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersAggregateArgsSchema: z.ZodType<Prisma.usersAggregateArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersGroupByArgsSchema: z.ZodType<Prisma.usersGroupByArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithAggregationInputSchema.array(),usersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: usersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersFindUniqueArgsSchema: z.ZodType<Prisma.usersFindUniqueArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const castsCreateArgsSchema: z.ZodType<Prisma.castsCreateArgs> = z.object({
  select: castsSelectSchema.optional(),
  data: z.union([ castsCreateInputSchema,castsUncheckedCreateInputSchema ]),
}).strict() ;

export const castsUpsertArgsSchema: z.ZodType<Prisma.castsUpsertArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereUniqueInputSchema,
  create: z.union([ castsCreateInputSchema,castsUncheckedCreateInputSchema ]),
  update: z.union([ castsUpdateInputSchema,castsUncheckedUpdateInputSchema ]),
}).strict() ;

export const castsCreateManyArgsSchema: z.ZodType<Prisma.castsCreateManyArgs> = z.object({
  data: z.union([ castsCreateManyInputSchema,castsCreateManyInputSchema.array() ]),
}).strict() ;

export const castsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.castsCreateManyAndReturnArgs> = z.object({
  data: z.union([ castsCreateManyInputSchema,castsCreateManyInputSchema.array() ]),
}).strict() ;

export const castsDeleteArgsSchema: z.ZodType<Prisma.castsDeleteArgs> = z.object({
  select: castsSelectSchema.optional(),
  where: castsWhereUniqueInputSchema,
}).strict() ;

export const castsUpdateArgsSchema: z.ZodType<Prisma.castsUpdateArgs> = z.object({
  select: castsSelectSchema.optional(),
  data: z.union([ castsUpdateInputSchema,castsUncheckedUpdateInputSchema ]),
  where: castsWhereUniqueInputSchema,
}).strict() ;

export const castsUpdateManyArgsSchema: z.ZodType<Prisma.castsUpdateManyArgs> = z.object({
  data: z.union([ castsUpdateManyMutationInputSchema,castsUncheckedUpdateManyInputSchema ]),
  where: castsWhereInputSchema.optional(),
}).strict() ;

export const castsDeleteManyArgsSchema: z.ZodType<Prisma.castsDeleteManyArgs> = z.object({
  where: castsWhereInputSchema.optional(),
}).strict() ;

export const favoritesCreateArgsSchema: z.ZodType<Prisma.favoritesCreateArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  data: z.union([ favoritesCreateInputSchema,favoritesUncheckedCreateInputSchema ]),
}).strict() ;

export const favoritesUpsertArgsSchema: z.ZodType<Prisma.favoritesUpsertArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereUniqueInputSchema,
  create: z.union([ favoritesCreateInputSchema,favoritesUncheckedCreateInputSchema ]),
  update: z.union([ favoritesUpdateInputSchema,favoritesUncheckedUpdateInputSchema ]),
}).strict() ;

export const favoritesCreateManyArgsSchema: z.ZodType<Prisma.favoritesCreateManyArgs> = z.object({
  data: z.union([ favoritesCreateManyInputSchema,favoritesCreateManyInputSchema.array() ]),
}).strict() ;

export const favoritesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.favoritesCreateManyAndReturnArgs> = z.object({
  data: z.union([ favoritesCreateManyInputSchema,favoritesCreateManyInputSchema.array() ]),
}).strict() ;

export const favoritesDeleteArgsSchema: z.ZodType<Prisma.favoritesDeleteArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  where: favoritesWhereUniqueInputSchema,
}).strict() ;

export const favoritesUpdateArgsSchema: z.ZodType<Prisma.favoritesUpdateArgs> = z.object({
  select: favoritesSelectSchema.optional(),
  include: favoritesIncludeSchema.optional(),
  data: z.union([ favoritesUpdateInputSchema,favoritesUncheckedUpdateInputSchema ]),
  where: favoritesWhereUniqueInputSchema,
}).strict() ;

export const favoritesUpdateManyArgsSchema: z.ZodType<Prisma.favoritesUpdateManyArgs> = z.object({
  data: z.union([ favoritesUpdateManyMutationInputSchema,favoritesUncheckedUpdateManyInputSchema ]),
  where: favoritesWhereInputSchema.optional(),
}).strict() ;

export const favoritesDeleteManyArgsSchema: z.ZodType<Prisma.favoritesDeleteManyArgs> = z.object({
  where: favoritesWhereInputSchema.optional(),
}).strict() ;

export const trailersCreateArgsSchema: z.ZodType<Prisma.trailersCreateArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  data: z.union([ trailersCreateInputSchema,trailersUncheckedCreateInputSchema ]),
}).strict() ;

export const trailersUpsertArgsSchema: z.ZodType<Prisma.trailersUpsertArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereUniqueInputSchema,
  create: z.union([ trailersCreateInputSchema,trailersUncheckedCreateInputSchema ]),
  update: z.union([ trailersUpdateInputSchema,trailersUncheckedUpdateInputSchema ]),
}).strict() ;

export const trailersCreateManyArgsSchema: z.ZodType<Prisma.trailersCreateManyArgs> = z.object({
  data: z.union([ trailersCreateManyInputSchema,trailersCreateManyInputSchema.array() ]),
}).strict() ;

export const trailersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.trailersCreateManyAndReturnArgs> = z.object({
  data: z.union([ trailersCreateManyInputSchema,trailersCreateManyInputSchema.array() ]),
}).strict() ;

export const trailersDeleteArgsSchema: z.ZodType<Prisma.trailersDeleteArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  where: trailersWhereUniqueInputSchema,
}).strict() ;

export const trailersUpdateArgsSchema: z.ZodType<Prisma.trailersUpdateArgs> = z.object({
  select: trailersSelectSchema.optional(),
  include: trailersIncludeSchema.optional(),
  data: z.union([ trailersUpdateInputSchema,trailersUncheckedUpdateInputSchema ]),
  where: trailersWhereUniqueInputSchema,
}).strict() ;

export const trailersUpdateManyArgsSchema: z.ZodType<Prisma.trailersUpdateManyArgs> = z.object({
  data: z.union([ trailersUpdateManyMutationInputSchema,trailersUncheckedUpdateManyInputSchema ]),
  where: trailersWhereInputSchema.optional(),
}).strict() ;

export const trailersDeleteManyArgsSchema: z.ZodType<Prisma.trailersDeleteManyArgs> = z.object({
  where: trailersWhereInputSchema.optional(),
}).strict() ;

export const usersCreateArgsSchema: z.ZodType<Prisma.usersCreateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
}).strict() ;

export const usersUpsertArgsSchema: z.ZodType<Prisma.usersUpsertArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
  create: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
  update: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
}).strict() ;

export const usersCreateManyArgsSchema: z.ZodType<Prisma.usersCreateManyArgs> = z.object({
  data: z.union([ usersCreateManyInputSchema,usersCreateManyInputSchema.array() ]),
}).strict() ;

export const usersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.usersCreateManyAndReturnArgs> = z.object({
  data: z.union([ usersCreateManyInputSchema,usersCreateManyInputSchema.array() ]),
}).strict() ;

export const usersDeleteArgsSchema: z.ZodType<Prisma.usersDeleteArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateArgsSchema: z.ZodType<Prisma.usersUpdateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateManyArgsSchema: z.ZodType<Prisma.usersUpdateManyArgs> = z.object({
  data: z.union([ usersUpdateManyMutationInputSchema,usersUncheckedUpdateManyInputSchema ]),
  where: usersWhereInputSchema.optional(),
}).strict() ;

export const usersDeleteManyArgsSchema: z.ZodType<Prisma.usersDeleteManyArgs> = z.object({
  where: usersWhereInputSchema.optional(),
}).strict() ;