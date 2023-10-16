<template>
    <div class="posts flex flex-wrap justify-center">
        <PostCard v-for="post in posts" :key="post.sys.id" :post="post" />
    </div>
    <div class="mt-20 paging flex flex-wrap justify-center">
        <Paging :pages="pages" :current_page="current_page" />
    </div>
</template>

<script setup>
console = console
import contentful from "contentful";
const { locale, t: $t } = useI18n();
const config = useRuntimeConfig();

const limit = 10;
const { current_page } = defineProps(["current_page"]);
const generatePageList = (current_page) => {
    const pages = []
    for (let i = 1; i <= current_page; i++) {
        pages.push(i)
    }
    return pages
}
const pages = generatePageList(2)

const {
    data: posts,
    error,
    status,
} = await useAsyncData("posts", async () => {
    const contentfulClient = contentful.createClient({
        space: config.contentful.spaceId,
        accessToken: config.contentful.accessToken,
    });

    const { items } = await contentfulClient.getEntries({
        content_type: config.contentful.blogPostTypeId,
        order: "-sys.createdAt",
        locale: locale.value,
        limit: limit,
        skip: (current_page - 1) * limit,
    });

    return items;
});
console.log(posts)
</script>

<style>
.posts {
    @apply w-full;
    @apply py-4;


    @apply bg-light;
    @apply bg-noisy;
}
</style>
