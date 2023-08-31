<template>
  <main class="about">
    <ProfileCard
      v-for="founderId in founderIds"
      :key="founderId"
      :profile-id="founderId"
    />
  </main>
</template>

<script setup>
const { t: $t } = useI18n();
const pageTitle =  `${$t("companyName")} | ${$t("pages.about")}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<script>
export default {
  data() {
    return {
      founderIds: ["gabi", "julia", "renato"],
    };
  },
};
</script>

<style>
.about {
  @apply w-full;
  @apply flex flex-col lg:flex-row justify-evenly items-center;

  @apply bg-light;
}
</style>
