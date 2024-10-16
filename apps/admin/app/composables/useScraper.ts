const ScrapeTomatoes = async (url: string) => {
  const res = await useRpc().api.admin.scrape.tomatoes.$post({ json: { tomatoesUrl: url } });
  const { payload, error } = await res.json();
  return { payload, error };
};

export const useScraper = {
  ScrapeTomatoes,
};
