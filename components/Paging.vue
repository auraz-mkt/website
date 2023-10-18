<template>
    <div class="post-paging">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-base h-10">
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white">{{ previous }}</a>
        </li>
        <li v-for="page in pages" :key="page">
          <a v-if="Number(page) !== Number(current_page)" :href="navigateURL(page)" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white">{{ page }}</a>
          <a v-if="Number(page) === Number(current_page)" :href="navigateURL(page)" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 light:border-gray-700 light:bg-gray-700 light:text-white">{{ page }}</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white">{{ next }}</a>
        </li>
      </ul>
    </nav>
    </div>
</template>

<script setup>
const { locale, t: $t } = useI18n();
const localePath = useLocalePath();
const { pages, current_page } = defineProps([
  "pages",
  "current_page",
]);
const previous = computed(() => $t(`paging.previous`));
const next = computed(() => $t(`paging.next`));
const navigateURL = (page) => localePath('/blog/' + page, locale);
</script>

<style>

</style>
