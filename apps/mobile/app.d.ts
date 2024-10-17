import type { ITrailer, IUsers } from "@trailer-box/server/src/index";

type Trailers = ITrailer["select"][];

type Me = IUsers["select"];

type Trailer = ITrailer["select"];

type MetaResponse = {
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalDocs: number;
  totalPages: number;
};
