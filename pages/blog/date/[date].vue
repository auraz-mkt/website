<template>
    <BlogIndex :date="route.params.date" />
    <!-- {{ JSON.stringify(route.params) }} -->
</template>

<script setup>
const route = useRoute();
</script>

<style>
.placeholder {
    width: 0;
}
</style>