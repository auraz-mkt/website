<template>
  <article class="campaign_search_result_card">
    <header class="campaign_search_result_card__header">
      {{ fullName }}
    </header>
    <img
      class="campaign_search_result_card__picture"
      :src="picture"
      :alt="`Picture of ${username}`"
      @error="replaceByDefault"
    />
    <div class="campaign_search_result_card__engagement">
      <div class="campaign_search_result_card__engagement__symbol">
        <Icon name="uil:arrow-growth" />
      </div>
      <div class="campaign_search_result_card__engagement__number">
        {{ engagement.toLocaleString() }}%
      </div>
    </div>
    <footer class="campaign_search_result_card__footer"></footer>
  </article>
</template>

<script setup>
const { username, fullName, picture, engagement } = defineProps([
  "username",
  "fullName",
  "picture",
  "engagement",
]);

const pathName = computed(() => fullName.replace(" ", "+"));

function replaceByDefault(event) {
  event.target.src = "https://fakeimg.pl/64x64/f5f5f4/?retina=1&text=🖼️";
}
</script>

<style>
.campaign_search_result_card {
  @apply relative;

  @apply flex flex-col justify-start items-center;
}

.campaign_search_result_card__header {
  @apply w-32 sm:w-36;
  @apply p-2;

  @apply truncate;
  @apply text-center;
  @apply rounded-t-lg;
  @apply text-dark bg-gray-200;
}

.campaign_search_result_card__picture {
  @apply object-cover;
  @apply w-32 sm:w-36 h-32;

  @apply bg-gradient-to-br from-slate-300 to-slate-200;
}

.campaign_search_result_card__engagement {
  @apply z-10;
  @apply w-28 h-8;

  @apply absolute;
  @apply bottom-2;

  @apply flex flex-row justify-center items-center;
}

.campaign_search_result_card__engagement__symbol {
  @apply p-1;
  @apply w-1/3 h-full;

  @apply rounded-l-full;
  @apply text-dark bg-light;

  @apply flex flex-col justify-center items-center;
}

.campaign_search_result_card__engagement__number {
  @apply p-1;
  @apply w-2/3 h-full;

  @apply rounded-r-full;
  @apply text-light bg-dark;

  @apply flex flex-col justify-center items-center;
}

.campaign_search_result_card__footer {
  @apply w-32 sm:w-36 h-6;
  @apply rounded-b-xl;
  @apply text-dark bg-gray-200;
}
</style>
