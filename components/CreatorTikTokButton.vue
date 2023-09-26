<template>
  <a class="creator_tiktok_button" :href="tiktokUrl" target="_blank">
    <Icon class="creator_tiktok_button_symbol" name="fa6-brands:tiktok" />
    {{ $t("creator.profile.seeMore") }}
  </a>
</template>

<script setup>
const { username } = defineProps(["username"]);

const tiktokUrl = `https://tiktok.com/@${username}`;
</script>

<style>
.creator_tiktok_button {
  @apply block;

  @apply w-full md:w-3/4 lg:w-1/2;
  @apply py-4 px-8;

  @apply text-center;
  @apply text-lg font-bold;
  @apply rounded-xl;

  @apply text-light bg-gradient-to-br from-primary from-30% to-secondary to-70%;

  @apply flex flex-row justify-center items-center;
  @apply gap-2;
}

.creator_tiktok_button_symbol {
  @apply w-4 h-4;
}
</style>
