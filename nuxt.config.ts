// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  nitro: {
    externals: {
      inline: [
        "@contentful/rich-text-types",
        "@contentful/rich-text-html-renderer",
      ],
    },
  },
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
  runtimeConfig: {
    contentful: {
      spaceId: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      blogPostTypeId: process.env.CTF_BLOG_POST_TYPE_ID,
      contactFormTypeId: process.env.CTF_CONTACT_FORM_TYPE_ID,
    },
  },
});
