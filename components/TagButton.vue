<template>
    <span class="tag__item">
        <a :href="localePath(generateTagURL(tag), locale)"> #{{ tag }}</a>
    </span>
</template>
  
<script setup>
const { tag } = defineProps(["tag"]);
const { locale, t: $t } = useI18n();
const localePath = useLocalePath();
const generateTagURL = (tag) => '/blog/tags/' + btoa(tag);

</script>
  
<style>
    .tag__item {
        @apply bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600;
        @apply hover:shadow hover:bg-gray-300;
    }
</style>
  