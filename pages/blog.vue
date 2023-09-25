<template>
    <main class="posts">
        <div>
        <div>
            <MenuBar />
        </div>
        <div class="blogcontent">
        <BlogHeader />
        <BlogHeroHeader /> 
        <PostList />
        <NewsLetter />
        </div>
        </div>
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

.blogcontent {
    width: calc(100% - 300px);
    margin-left: 300px;
}

</style>
