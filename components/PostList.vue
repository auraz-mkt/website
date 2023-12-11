<template>
    <div class="posts flex flex-wrap justify-center">
        <PostCard v-for="post in posts" :key="post.sys.id" :post="post" />
    </div>
    <div class="mt-20 mb-20 paging flex flex-wrap justify-center">
        <Paging :pages="pages" :current_page="current_page" />
    </div>
</template>

<script setup>
import contentful from "contentful";
const { locale, t: $t } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const limit = 10;
const { current_page, tag, date } = defineProps(["current_page", "tag", "date"]);
const generatePageList = (current_page) => {
    const pages = [];
    for (let i = 1; i <= current_page; i++) {
        pages.push(i);
    }
    return pages;
}
const bootstrapTag = (tag) => {
    return tag ? atob(tag.replaceAll(' ', "+")) : '';
}
const bootstrapDate = (date) => {
    return date ? atob(date.replaceAll(' ', "+")) : '';
}
function filterPostsByDate(posts, year, month) {
  return posts.filter(post => {
    const updatedAt = new Date(post.sys.updatedAt);
    return updatedAt.getFullYear() === year && updatedAt.getMonth() === month - 1;
  });
}
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

    const bootstrappedTag = bootstrapTag(tag);
    const taggedPosts = bootstrappedTag.length > 0
        ? items.filter(post => post.metadata.tags.some(tagObj => bootstrappedTag.includes(tagObj.sys.id)))
        : items;
    const bootstrappedDate = bootstrapDate(date);
    const [year, month] = bootstrappedDate.split("-").map(Number);
    return bootstrappedDate.length > 0
        ? filterPostsByDate(taggedPosts, year, month)
        : taggedPosts;
});

const {
    data: postsFull,
} = await useAsyncData("postsFull", async () => {
    const contentfulClient = contentful.createClient({
        space: config.contentful.spaceId,
        accessToken: config.contentful.accessToken,
    });

    const { items } = await contentfulClient.getEntries({
        content_type: config.contentful.blogPostTypeId,
        order: "-sys.createdAt",
        locale: locale.value,
    });

    const bootstrappedTag = bootstrapTag(tag);
    const taggedPosts = bootstrappedTag.length > 0
        ? items.filter(post => post.metadata.tags.some(tagObj => bootstrappedTag.includes(tagObj.sys.id)))
        : items;
    const bootstrappedDate = bootstrapDate(date);
    const [year, month] = bootstrappedDate.split("-").map(Number);
    return bootstrappedDate.length > 0
        ? filterPostsByDate(taggedPosts, year, month)
        : taggedPosts;
});

const pages_num = parseInt(Math.ceil((postsFull?._rawValue?.length || 0) / limit));
const pages = generatePageList(pages_num);


</script>

<style>
.posts {
    @apply w-full;
    @apply py-4;


    @apply bg-light;
    @apply bg-noisy;
}
</style>
