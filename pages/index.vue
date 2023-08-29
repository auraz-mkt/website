<template>
  <main class="callout">
    <h1 class="callout__name">Auraz</h1>
    <div class="callout__motto">
      Trazendo Marketing de volta para as Pessoas
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Auraz",
  description: "Auraz - Trazendo Marketing de volta para as Pessoas",
});
</script>

<style lang="css">
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
