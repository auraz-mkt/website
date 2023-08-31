// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  googleFonts: {
    families: { "Cinzel+Decorative": true, Quicksand: true },
  },
  i18n: {
    locales: ["pt-BR", "en-US"],
    defaultLocale: "pt-BR",
    strategy: "prefix",
    vueI18n: "./i18n.config.ts",
  },
});
