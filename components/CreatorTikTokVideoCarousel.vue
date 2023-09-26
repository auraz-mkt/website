<template>
  <article class="creator_profile_carousel">
    <header class="creator_profile_carousel__header">@{{ username }}</header>

    <main class="creator_tiktok_carousel__grid">
      <div
        class="creator_tiktok_carousel__grid_item"
        v-for="(_, idx) in 6"
        :key="idx"
      >
        <Loading :loading="pendingVideos">
          <a
            :href="`https://tiktok.com/@${username}/video/${
              videos && videos[idx].id
            }`"
            :style="`background-image: url('${
              videos && videos[idx].thumbnail
            }');`"
            class="creator_tiktok_carousel__video"
            target="_blank"
          >
          </a>
        </Loading>
      </div>
    </main>

    <footer class="creator_profile_carousel__footer"></footer>
  </article>
</template>

<script setup>
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const route = useRoute();
const { username } = defineProps(["username"]);

const {
  data: videosResponse,
  error: failedVideos,
  pending: pendingVideos,
  execute: getVideos,
} = await useAurazApiFetch(`/v1/creators/${route.params.username}/videos`, {
  lazy: true,
  default: () => [],
  server: false,
});

const videos = computed(() => videosResponse.value.data);
</script>

<style>
.creator_profile_carousel {
  @apply w-full;
}

.creator_profile_carousel__header {
  @apply h-12;
  @apply rounded-tl-xl rounded-tr-xl;

  @apply text-lg text-center;
  @apply text-light bg-gradient-to-br from-dark from-30% to-darkish to-70%;

  @apply flex flex-col justify-center items-center;
}

.creator_tiktok_carousel__grid {
  @apply grid;
  @apply justify-items-center;
  @apply grid-cols-3 grid-rows-2;
  @apply md:grid-cols-6 md:grid-rows-1;
  @apply gap-1;
}

.creator_tiktok_carousel__grid_item {
  @apply relative;
  @apply w-full h-48 md:h-64 lg:h-72;

  @apply flex flex-col justify-center items-center;
  @apply bg-gradient-to-br from-gray-200 to-gray-100;
}

.creator_tiktok_carousel__video {
  @apply block;
  @apply w-full h-full;

  @apply bg-center bg-no-repeat bg-cover;
}

.creator_profile_carousel__footer {
  @apply h-4;
  @apply rounded-bl-xl rounded-br-xl;

  @apply text-light bg-gradient-to-br from-dark from-30% to-darkish to-70%;
}
</style>
