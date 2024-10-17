import { MetaResponse, Trailers } from "@/app";
import { create } from "zustand";

interface TrailersStore {
  trailers: Trailers;
  trailerMeta: MetaResponse;
}

export const useTrailersStore = create<TrailersStore>((set) => ({
  trailers: [],
  trailerMeta: {
    totalDocs: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
    page: 0,
    limit: 0,
  },
}));
