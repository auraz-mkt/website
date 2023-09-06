<template>
  <main class="callout">
    <h1 class="callout__name">{{ $t("companyName") }}</h1>
    <div class="callout__motto">
      {{ $t("motto") }}
    </div>
    <a id="cta" href="https://auraz.social/waitlist">
      {{ $t("waitList") }}
    </a>
  </main>
</template>

<script setup>
const { t: $t } = useI18n();
const pageTitle = `${$t("companyName")}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<style lang="css">
#cta {
  @apply rounded-full;
  @apply mt-12;
  @apply px-8 py-4;

  @apply bg-dark text-light;
  @apply font-extrabold;
}

.callout {
  @apply w-full;
  @apply text-center;

  @apply flex flex-col justify-center items-center;

  @apply text-dark selection:text-light;
  @apply bg-light selection:bg-dark;
}

.callout__name {
  @apply font-serif;
  @apply text-8xl;
}

.callout__motto {
  @apply mt-8;
  @apply text-4xl;
}
</style>
