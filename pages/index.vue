<template>
  <main class="callout">
    <h1 class="callout__name">Auraz</h1>
    <div class="callout__motto">
      Trazendo Marketing de volta para as Pessoas
    </div>
    <a id="cta" href="https://rebrand.ly/auraz-waitlist">
      Entre na lista de espera!
    </a>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Auraz",
  description: "Auraz - Trazendo Marketing de volta para as Pessoas",
});
</script>

<style lang="css">
#cta {
  @apply mt-12;
  @apply rounded-full;
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
