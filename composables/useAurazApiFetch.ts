export const useAurazApiFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig();

  return useFetch(request, { baseURL: config.public.aurazApiUrl, ...opts });
};
