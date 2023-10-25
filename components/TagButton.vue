<template>
    <a href="#"
            class="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5">{{
              tag }}</a>
</template>
  
<script setup>
const { tag } = defineProps(["tag"]);
</script>
  
<style></style>
  