<template>
  <article class="creator_stats">
    <CreatorStatsCounter
      :raw-number="followers.toLocaleString()"
      :fancy-number="beautifyCount(followers)"
      stat-name="followers"
    />

    <CreatorStatsCounter
      :raw-number="likes.toLocaleString()"
      :fancy-number="beautifyCount(likes)"
      stat-name="likes"
    />

    <CreatorStatsCounter
      :raw-number="publications.toLocaleString()"
      :fancy-number="beautifyCount(publications)"
      stat-name="publications"
    />

    <CreatorStatsCounter
      :raw-number="`${engagement.toLocaleString()}%`"
      :fancy-number="beautifyPercentage(engagement)"
      stat-name="engagement"
    />
  </article>
</template>

<script setup>
const { followers, likes, publications, engagement } = defineProps([
  "followers",
  "likes",
  "publications",
  "engagement",
]);

function beautifyCount(number) {
  if (number < 1_000) return `${number}`;
  if (number < 1_000_000) return `${Math.trunc(number / 1_000)}k`;
  if (number < 1_000_000_000) return `${Math.trunc(number / 1_000_000)}M`;
}

function beautifyPercentage(number) {
  return `${Math.round(number * 10) / 10}%`;
}
</script>

<style>
.creator_stats {
  @apply w-fit;

  @apply grid grid-cols-2 place-items-center;
  @apply gap-3;
}
</style>
