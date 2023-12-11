<template>
    <BlogIndex :date="route.params.date" />
</template>

<script setup>
const route = useRoute();
</script>

<style>
.placeholder {
    width: 0;
}
</style>