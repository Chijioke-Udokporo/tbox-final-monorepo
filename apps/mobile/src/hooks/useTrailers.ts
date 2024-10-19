/* import fetcher from "../utils/fetcher";
import { useTrailersStore } from "../stores/trailers.store";
import { useQuery } from "@tanstack/react-query";

export const useTrailers = () => {
  const { isPending, data, refetch, error } = useQuery({
    retry: 3,
    initialData: useTrailersStore.getState().trailers,
    queryKey: ["trailers"],
    queryFn: () =>
      fetcher("trailers").then((res) => {
        const { docs, ...meta } = res?.payload;
        useTrailersStore.setState({ trailers: docs, trailerMeta: meta });
        return res;
      }),
  });
  return { isPending, data, refetch, error };
};
 */
