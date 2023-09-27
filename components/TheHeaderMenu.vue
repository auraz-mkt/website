<template>
  <ul class="header_menu">
    <li
      v-for="{ path, description } in pages"
      :key="path"
      class="header_menu__item"
    >
      <NuxtLink class="header_menu__link" :to="localePath(path, locale)">{{
        $t(description)
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

const pages = [
  { path: "/", description: "companyName" },
  { path: "/about/", description: "pages.about" },
  // { path: "/for-creators/", description: "pages.forCreators" },
  // { path: "/for-brands/", description: "pages.forBrands" },
];
</script>

<style>
.header_menu {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
  @apply gap-6;
}

.header_menu__item {
  @apply no-underline;
  @apply hover:text-shadow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-xl focus:shadow-tertiary;
}

.header_menu__item:first-child {
  @apply font-serif;
}
</style>
