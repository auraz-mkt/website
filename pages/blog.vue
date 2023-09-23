<template>
    <main class="posts">
        <BlogHeader />
        <BlogHeroHeader />
        <PostList />
        <NewsLetter />
    </main>
</template>

<script setup>
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
        return {}
    }
};
</script>

<style>

</style>
