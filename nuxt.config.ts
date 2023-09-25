// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  googleFonts: {
    families: { "Cinzel+Decorative": true, Quicksand: true },
  },
  i18n: {
    locales: [
      { code: "pt-BR", files: ["pt-BR.json", "_default.json"] },
      { code: "en-US", files: ["en-US.json", "_default.json"] },
    ],
    defaultLocale: "pt-BR",
    strategy: "no_prefix",
    langDir: "lang",
    lazy: true,
  },
});
