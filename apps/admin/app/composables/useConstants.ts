export const useConstants = () => {
  const config = useRuntimeConfig();
  const { NUXT_API_URL, NUXT_VIDEO_URL } = config.public;
  const videoUrl = NUXT_VIDEO_URL;
  const apiUrl = NUXT_API_URL;

  return {
    videoUrl: (id: string | undefined) => `${videoUrl}/${id}`,
    imageUrl: (id: string | undefined) => `${apiUrl}/api/ftp/image/${id}`,
    castUrl: (id: string | undefined) => `${apiUrl}/api/ftp/cast/${id}`,
    apiUrl: `${apiUrl}`,
    routes: {
      admin: [
        {
          name: "Dashboard",
          path: "/admin/dashboard",
          icon: "ri-dashboard-line",
        },
        {
          name: "Trailers",
          path: "/admin/trailers",
          icon: "ri-movie-2-line",
        },
        {
          name: "Users",
          path: "/admin/users",
          icon: "ri-user-line",
        },
      ],
    },
  };
};
