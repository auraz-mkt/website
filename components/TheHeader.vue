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
        <button class="header__flag" @click.prevent.stop="setLocale(code)">
          <Icon class="header__flag_icon" :name="flag" />
        </button>
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
        { code: "pt-BR", flag: "emojione:flag-for-brazil" },
        { code: "en-US", flag: "emojione:flag-for-united-states" },
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
  @apply gap-6;
}

.header__item {
  @apply no-underline;
}

.header__item:first-child {
  @apply font-serif;
}

.header__locales {
  @apply text-2xl;

  @apply flex flex-row justify-start items-center;
  @apply gap-4;
}

.header__link {
  @apply hover:text-shadow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-xl focus:shadow-tertiary;
}

.header__flag {
  @apply h-8 w-8;
  @apply rounded-full;

  @apply ring-1 ring-light ring-offset-2 ring-offset-secondary;

  @apply hover:shadow-glow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:shadow-glow-xl focus:shadow-tertiary;

  @apply flex flex-col justify-center items-center;
}

.header__flag_icon {
  @apply h-8 w-8;
  @apply rounded-full;
}
</style>
