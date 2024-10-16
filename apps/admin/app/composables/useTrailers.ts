import type { ITrailer } from "@trailer-box/server/src";

const Trailers = async () => {
  const res = await useRpc().api.trailers.$get();
  const { payload, error } = await res.json();
  return { payload, error };
};

const Trailer = async (id: string) => {
  const res = await useRpc().api.trailers[":id"].$get({ param: { id } });
  const { payload, error } = await res.json();
  return { payload, error };
};

const CreateTrailer = async (data: any) => {
  const res = await useRpc().api.trailers.$post({ json: data });
  const { payload, error } = await res.json();
  return { payload, error };
};

const UpdateTrailer = async (id: string, data: ITrailer["update"]) => {
  const res = await useRpc().api.trailers[":id"].$patch({ param: { id }, json: data });
  const { payload, error } = await res.json();
  return { payload, error };
};

const DeleteTrailer = async (id: string) => {
  const res = await useRpc().api.trailers[":id"].$delete({ param: { id } });
  const { payload, error } = await res.json();
  return { payload, error };
};

const PublishOrUnpublish = async (json: { id: string; isPublished: boolean }) => {
  const res = await useRpc().api.trailers[":id"].$patch({
    param: { id: json.id },
    json: {
      id: json.id,
      trailer: {
        isPublished: json.isPublished,
      },
    },
  });
  const { payload, error } = await res.json();
  return { payload, error };
};

export const useTrailers = {
  Trailers,
  Trailer,
  CreateTrailer,
  UpdateTrailer,
  DeleteTrailer,
  PublishOrUnpublish,
};
