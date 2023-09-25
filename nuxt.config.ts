// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@pinia/nuxt"],
  googleFonts: {
    families: { "Cinzel+Decorative": true, Quicksand: true },
  },
  i18n: {
    locales: [
      { code: "pt-BR", iso: "pt-BR" },
      { code: "en-US", iso: "en-US" },
    ],
    dynamicRouteParams: true,
    defaultLocale: "pt-BR",
    strategy: "prefix",
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    contentful: {
      spaceId: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      blogPostTypeId: process.env.CTF_BLOG_POST_TYPE_ID,
    },
  },
});
