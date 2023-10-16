<template>
    <BlogIndex :current_page="route.params.current_page" />
</template>

<script setup>
const route = useRoute();
</script>

<style>
.placeholder {
    width: 0;
}
</style>