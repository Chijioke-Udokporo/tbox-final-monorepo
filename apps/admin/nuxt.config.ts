// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["@pinia-plugin-persistedstate/nuxt", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/styles/tailwind.css", "~/styles/global.css", "~/styles/animation.css", "vue-json-pretty/lib/styles.css"],
  runtimeConfig: {
    public: {
      NUXT_API_URL: process.env.NUXT_API_URL,
      NUXT_VIDEO_URL: process.env.NUXT_VIDEO_URL,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "TrailerBox: Admin",
      meta: [
        {
          name: "description",
          content:
            "EduPlay is an AI-powered platform that empowers educators to create personalized learning experiences for their students.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.min.css",
        },
        /*   {
          rel: "stylesheet",
          href: "https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2",
        }, */
      ],
    },
  },
});
