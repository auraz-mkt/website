<template>
  <Loading class="campaign_search_result__loading" :loading="searchPending">
    <div class="campaign_search_result__error" v-if="searchError">
      <div class="campaign_search_result__error__no_results">
        {{ $t("campaign.create.searchResult.noResultsFoundServerError") }}
      </div>
      <div class="campaign_search_result__error__failed_search">
        {{ $t("campaign.create.searchResult.failedSearch") }}
      </div>
      <div class="campaign_search_result__error__exception">
        {{ searchError }}
      </div>
    </div>
    <ul
      class="campaign_search_result__full"
      v-else-if="searchPending || creators.length > 0"
    >
      <li v-for="creator in creators" :key="creator.username">
        <NuxtLink :to="`/c/${creator.username}`">
          <CampaignSearchResultCard
            :username="creator.username"
            :full-name="creator.fullName"
            :picture="creator.picture"
            :engagement="creator.engagement"
          />
        </NuxtLink>
      </li>
    </ul>
    <div class="campaign_search_result__empty" v-else>
      <div class="campaign_search_result__empty__no_results">
        {{ $t("campaign.create.searchResult.noResultsFoundTooRestrict") }}
      </div>
      <div class="campaign_search_result__empty__relax_search">
        {{ $t("campaign.create.searchResult.relaxSearch") }}
      </div>
    </div>
  </Loading>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCampaignSearchStore } from "~/stores/campaignSearch";
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const { t: $t } = useI18n();

const campaignSearchStore = useCampaignSearchStore();
const { activeCategories, activeGender } = storeToRefs(campaignSearchStore);

let searchRequestBody = computed(() => ({
  filters: {
    gender: activeGender.value,
    categories: [...activeCategories.value],
  },
}));

const {
  data: searchResponse,
  pending: searchPending,
  error: searchError,
  status: searchStatus,
} = await useAurazApiFetch(`/v1/search_creators`, {
  method: "POST",
  body: searchRequestBody,
  server: false,
});

const creators = computed(() => searchResponse.value?.data || []);

if (Boolean(searchError.value)) {
  throw createError({
    statusCode: 503,
    statusMessage: `Search system temporarily unavailable`,
  });
}
</script>

<style>
.campaign_search_result__error {
  @apply px-8 py-8;
  @apply w-full h-full;

  @apply text-center;
  @apply text-red-900 bg-red-100;

  @apply flex flex-col justify-center items-center;
  @apply gap-1;
}

.campaign_search_result__full {
  @apply grid place-items-center;
  @apply grid-cols-2 md:grid-cols-4;
  @apply gap-2;
}

.campaign_search_result__empty {
  @apply px-8 py-8;
  @apply w-full h-full;

  @apply text-center;
  @apply text-dark bg-gray-200;

  @apply flex flex-col justify-center items-center;
  @apply gap-1;
}

.campaign_search_result__error__no_results {
  @apply text-lg;
  @apply font-bold;
}

.campaign_search_result__error__failed_search {
  @apply text-base;
  @apply font-normal;
}

.campaign_search_result__error__exception {
  @apply text-sm;
  @apply italic;
}

.campaign_search_result__empty__no_results {
  @apply text-lg;
  @apply font-bold;
}

.campaign_search_result__empty__relax_search {
  @apply text-base;
  @apply font-normal;
}
</style>
