<template>
  <div class="layout">
    <TheHeader />
    <NuxtPage class="content" />
    <TheFooter />
  </div>
</template>

<script setup>
const { locale, t: $t } = useI18n();
const lang = locale.value;

const pageDescription = `${$t("companyName")} - ${$t("motto")}`;

useSeoMeta({
  lang: lang,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
});
</script>

<style>
.layout {
  @apply w-full h-screen;
  @apply flex flex-col justify-between items-center;
}

.content {
  @apply flex-grow;

  @apply py-8;
  @apply px-4 lg:px-32 xl:px-72;

  @apply bg-light;
}
</style>
