<template>
  <ul class="search_filters">
    <li
      v-for="gender in filters.genders"
      :key="gender.webcode"
      class="search_filters__option"
    >
      <button
        class="search_filters__option__button"
        @click.prevent.stop="selectGender(gender)"
        :class="{ search_filters__option__button_selected: gender.active }"
      >
        {{ gender.label[locale] }}
      </button>
    </li>

    <li
      v-for="category in filters.categories"
      :key="category.webcode"
      class="search_filters__option"
    >
      <button
        class="search_filters__option__button"
        @click.prevent.stop="toggleCategory(category)"
        :class="{ search_filters__option__button_selected: category.active }"
      >
        {{ category.label[locale] }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useCampaignSearchStore } from "~/stores/campaignSearch";
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const { locale } = useI18n();

const { selectGender, toggleCategory } = useCampaignSearchStore();

const { data: filters, error: failed_filters } =
  await useAurazApiFetch(`/v1/filters`);

if (Boolean(failed_filters.value)) {
  throw createError({
    statusCode: 404,
    statusMessage: `Failed to load search filters`,
  });
}
</script>

<style>
.search_filters {
  @apply w-full;
  @apply grid place-items-center;
  @apply grid-cols-2 md:grid-cols-4;
  @apply gap-2;
}

.search_filters__option {
  @apply w-full h-full;
}

.search_filters__option__button {
  @apply w-full h-full;
  @apply p-2;

  @apply text-dark;
  @apply bg-gray-200;

  @apply rounded-md;
  @apply transition-colors ease-in-out duration-0;

  @apply flex flex-col justify-center items-center;
}

.search_filters__option__button_selected {
  @apply text-light;
  @apply bg-gradient-to-br from-primary from-30% to-secondary to-70%;
}
</style>
