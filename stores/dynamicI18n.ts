import { defineStore } from 'pinia'

export const useDynamicI18n = defineStore("dynamicI18n", {
  state: () => ({
    nuxtI18n: {},
  }),

  actions: {
    setNuxtI18n(nuxtI18n) {
      this.nuxtI18n = nuxtI18n;
    },
  },
});
