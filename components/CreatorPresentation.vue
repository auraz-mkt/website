<template>
  <article class="creator_presentation">
    <img
      class="creator_presentation__picture"
      :src="creator.picture"
      :alt="`TikTok picture of ${creator.fullName}`"
    />

    <div class="creator_presentation__intro">
      <h1>
        <div class="creator_presentation__greeting">
          {{ $t("creator.profile.greeting") }}
        </div>
        <div class="creator_presentation__name">
          {{ creator.personalInfo.fullName }}
        </div>
      </h1>
      <h2 class="creator_presentation__username">@{{ creator.username }}</h2>
    </div>
  </article>
</template>

<script setup>
const { creator } = defineProps(["creator"]);
</script>

<style>
.creator_presentation {
  @apply flex flex-row justify-center items-center;
  @apply gap-3;
}

.creator_presentation__picture {
  @apply w-1/3 h-auto;
  @apply md:w-32 md:h-32;

  @apply rounded-full;

  @apply bg-gradient-to-br from-primary to-secondary;
  @apply hover:shadow-glow-xl hover:shadow-tertiary;
}

.creator_presentation__intro {
  @apply w-2/3 h-auto;

  @apply selection:text-dark selection:bg-tertiary;
}

.creator_presentation__greeting {
  @apply text-3xl;
  @apply font-bold;
}

.creator_presentation__name {
  @apply text-4xl;
  @apply font-bold;

  @apply text-transparent;
  @apply bg-clip-text bg-gradient-to-br from-primary from-30% to-secondary to-70%;
  @apply hover:text-shadow-xl hover:shadow-tertiary;
}

.creator_presentation__username {
  @apply text-xl;
  @apply font-normal;
}
</style>
