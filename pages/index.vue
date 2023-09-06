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

  @apply text-xl;

  @apply text-light bg-gradient-to-br from-primary to-secondary;
  @apply hover:text-light hover:bg-gradient-to-br hover:from-secondary hover:to-primary;

  @apply selection:text-dark selection:bg-tertiary;
}

.callout {
  @apply w-full;
  @apply text-center;

  @apply flex flex-col justify-center items-center;

  @apply text-dark bg-light;
  @apply selection:text-dark selection:bg-tertiary;

  @apply bg-noisy;
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
