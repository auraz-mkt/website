import { defineStore } from "pinia";

export const useCampaignSearchStore = defineStore("campaignSearch", () => {
  const categories = ref(new Set());

  const activeCategories = computed(() =>
    [...categories.value].map((category) => category.webcode),
  );

  function toggleCategory(newCategory) {
    if (categories.value.has(newCategory)) {
      categories.value.delete(newCategory);
      newCategory.active = false;
    } else {
      categories.value.add(newCategory);
      newCategory.active = true;
    }
  }

  let gender = ref(null);

  const activeGender = computed(() => gender.value?.webcode || null);

  function selectGender(newGender) {
    if (gender.value === null) {
      gender.value = newGender;
      newGender.active = true;
    } else if (gender.value === newGender) {
      gender.value = null;
      newGender.active = false;
    } else {
      gender.value.active = false;
      newGender.active = true;
      gender.value = newGender;
    }
  }

  return { activeCategories, toggleCategory, activeGender, selectGender };
});
