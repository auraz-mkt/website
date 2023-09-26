<template>
  <div class="group creator_stats_counter">
    <div class="creator_stats_counter__box">
      <div class="creator_stats_counter__name">
        {{ $t(`creator.profile.stats.${statName}`) }}
      </div>
      <div class="creator_stats_counter__number">
        {{ fancyNumber }}
      </div>
    </div>
    <span class="creator_stats_counter__tooltip">{{ rawNumber }}</span>
  </div>
</template>

<script setup>
const { rawNumber, fancyNumber, statName } = defineProps([
  "rawNumber",
  "fancyNumber",
  "statName",
]);
</script>

<style>
.creator_stats_counter {
  @apply relative;
}

.creator_stats_counter__box {
  @apply h-24 w-36;

  @apply rounded-lg;

  @apply text-light bg-gradient-to-br from-dark from-30% to-darkish to-70%;
  @apply flex flex-col justify-center items-center;
}

.creator_stats_counter__name {
  @apply text-lg;
}

.creator_stats_counter__number {
  @apply text-3xl;
  @apply font-bold;
}

.creator_stats_counter__tooltip {
  @apply z-10;
  @apply absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full;

  @apply py-2 px-4;

  @apply text-lg font-bold;
  @apply rounded-md;

  @apply group-hover:opacity-100 transition-opacity opacity-0;
  @apply text-light bg-gradient-to-br from-primary from-30% to-secondary to-70%;
}
</style>
