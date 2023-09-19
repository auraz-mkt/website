<template>
    <main class="posts">
        <PostCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </main>
</template>

<script setup>
import posts from "../mocks/posts.json";
const { t: $t } = useI18n();
const pageTitle = `${$t("companyName")} | ${$t("pages.about")}`;

useSeoMeta({
    title: pageTitle,
    ogTitle: pageTitle,
    twitterTitle: pageTitle,
});
</script>

<script>
export default {
    data() {
        return {
        blogPosts: posts.posts,
    }}
};
</script>

<style>
.posts {
    @apply w-full;
    @apply py-4;


    @apply bg-light;
    @apply bg-noisy;
}
</style>
