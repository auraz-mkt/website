<template>
  <header class="header">
    <ul class="header__items">
      <li
        v-for="{ path, description } in links"
        :key="path"
        class="header__item"
      >
        <a class="header__link" :href="localePath(path, locale)">{{
          $t(description)
        }}</a>
      </li>
    </ul>
    <ul class="header__locales">
      <li
        v-for="{ code, flag, path } in localesWithPath"
        :key="path"
        class="header__locale"
      >
        <a class="header__link" :href="path">{{ flag }}</a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { useDynamicI18n } from "~/stores/dynamicI18n";

const route = useRoute();
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

// const dynamicI18n = useDynamicI18n();
// console.log("=>", dynamicI18n.nuxtI18);

// route.meta.nuxtI18n = {
//   "pt-BR": { slug: "conheca-auraz" },
//   "en-US": { slug: "meet-auraz" },
// }
// console.log("2: ", localePath(route, "en-US"));
// console.log("3: ", switchLocalePath("en-US"));

const links = useState("links", () => [
  { path: "/", description: "companyName" },
  { path: "/about/", description: "pages.about" },
  { path: "/blog/", description: "pages.blog" },
  { path: "/contact/", description: "pages.contact" },
]);

const localesWithPath = useState("localesWithPath", () => [
  { code: "pt-BR", flag: "🇧🇷", path: switchLocalePath("pt-BR") },
  { code: "en-US", flag: "🇺🇸", path: switchLocalePath("en-US") },
]);
</script>

<style>
.header {
  @apply relative;
  
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