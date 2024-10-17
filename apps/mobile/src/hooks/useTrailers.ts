import fetcher from "../utils/fetcher";
import { useTrailersStore } from "../stores/trailers.store";
import { useState } from "react";

const useTrailers = () => {
  const [loading, setLoading] = useState(false);

  const Trailers = async (query?: { page?: string }) => {
    setLoading(true);
    const result = await fetcher("trailers").finally(() => setLoading(false));
    const { error, payload } = result as any;
    if (error) {
      alert(error);
    }

    const { docs, ...meta } = payload;
    useTrailersStore.setState({ trailers: docs, trailerMeta: meta });
    return "success";
  };

  const Trailer = async (id: string) => {};

  const onRefetch = async () => {
    await Trailers();
  };

  return { Trailers, Trailer, onRefetch, loading };
};

export default useTrailers;
