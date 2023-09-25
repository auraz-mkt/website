<template>
  <header class="header">
    <ul class="header__items">
      <li
        v-for="{ path, description } in links"
        :key="path"
        class="header__item"
      >
        <NuxtLink class="header__link" :to="localePath(path, locale)">{{
          $t(description)
        }}</NuxtLink>
      </li>
    </ul>
    <ul class="header__locales">
      <li v-for="{ code, flag } in locales" :key="path" class="header__locale">
        <a href="#" class="header__link" @click.prevent.stop="setLocale(code)">{{
          flag
        }}</a>
      </li>
    </ul>
  </header>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
</script>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", description: "companyName" },
        { path: "/about/", description: "pages.about" },
      ],
      locales: [
        { code: "pt-BR", flag: "🇧🇷" },
        { code: "en-US", flag: "🇺🇸" },
      ],
    };
  },
};
</script>

<style>
.header {
  @apply w-full;
  @apply px-8 py-8;
  @apply flex flex-row justify-between;

  @apply text-light bg-gradient-to-br from-primary from-30% to-secondary to-70%;
  @apply selection:text-dark selection:bg-tertiary;
}

.header__items {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
}

.header__item {
  @apply ml-8;
  @apply no-underline;
}

.header__item:first-child {
  @apply ml-0;
  @apply font-serif;
}

.header__locales {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
}

.header__locale {
  @apply ml-3;
}

.header__locale:first-child {
  @apply ml-0;
}

.header__link {
  @apply hover:text-shadow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-xl focus:shadow-tertiary;
}
</style>
