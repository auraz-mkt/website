<template>
  <main class="creator_profile">
    <div v-if="failed_creator">{{ failed_creator }}</div>

    <section class="creator_profile__head">
      <CreatorPresentation :creator="creator" />

      <CreatorStats
        :engagement="creator.engagement"
        :likes="creator.tiktokProfile.statistics.likes"
        :followers="creator.tiktokProfile.statistics.followers"
        :publications="creator.tiktokProfile.statistics.publications"
      />
    </section>

    <section class="creator_profile__content">
      <CreatorTikTokVideoCarousel :username="creator.tiktokProfile.username" />

      <CreatorTikTokButton :username="creator.tiktokProfile.username" />
    </section>
  </main>
</template>

<script setup>
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const { t: $t } = useI18n();
const route = useRoute();

console.log(route.fullPath);

const username = computed(() => route.params.username);

const { data: creator, error: failed_creator } = await useAurazApiFetch(
  `/v1/creators/${route.params.username}`,
);

if (!creator.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Unknown creator ${route.params.username}`,
  });
}

const pageTitle = `${$t("companyName")} | ${
  creator.value.personalInfo.fullName
} (@${creator.value.username})`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<style>
.creator_profile {
  @apply w-full;

  @apply flex flex-col justify-around items-center;
  @apply gap-16;
}

.creator_profile__head {
  @apply w-full;

  @apply flex flex-col md:flex-row justify-around items-center;
  @apply gap-8;
}

.creator_profile__content {
  @apply w-full;

  @apply flex flex-col justify-around items-center;
  @apply gap-8;
}
</style>
