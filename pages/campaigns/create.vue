<template>
  <main class="campaign_creation">
    <div class="campaign_creation__callout">
      {{ $t("campaign.create.callout") }}
    </div>

    <CampaignSearchFilters class="campaign_creation__search_filters" />

    <CampaignSearchResult class="campaign_creation__search_results" />
  </main>
</template>

<script setup>
const { t: $t } = useI18n();
</script>

<style>
.campaign_creation {
  @apply w-full;

  @apply flex flex-col justify-start items-center;
  @apply gap-8;
}

.campaign_creation__callout {
  @apply text-center;
  @apply text-xl;
}

.campaign_creation__search_results {
  @apply flex-grow;
}
</style>
