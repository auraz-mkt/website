<template>
    <BlogIndex :tag="route.params.tag" />
</template>

<script setup>
const route = useRoute();
</script>

<style>
.placeholder {
    width: 0;
}
</style>