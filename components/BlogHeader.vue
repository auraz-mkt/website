<template>
    <div class="blogheader">
        <h3 class="blogheader__title">
            Tags
        </h3>
        <div class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                <li v-for="tag in tags" :key="tag" class="font-bold md:mr-12"><a :href="localePath(generateTagURL(tag), locale)">{{ tag }}</a></li>
                <!-- <li class="md:mr-12"><a href="#">Lorem 3</a></li>
                <li class="md:mr-12">
                <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<style>
.blogheader {
    @apply text-gray-600 text-2xl;
    @apply text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center;
}

.blogheader__title {
    @apply flex cursor-pointer items-center whitespace-nowrap text-2xl font-black;
}

.custom-label {
    @apply absolute top-5 right-7 cursor-pointer md:hidden;
}
</style>

<script setup>
import contentful from "contentful";
const { locale, t: $t } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const generateTagURL = (tag) => '/blog/tags/' + btoa(tag);

const {
    data: tags,
    error,
    status,
} = await useAsyncData("tags", async () => {
    const contentfulClient = contentful.createClient({
        space: config.contentful.spaceId,
        accessToken: config.contentful.accessToken,
    });

    const { items } = await contentfulClient.getEntries({
        content_type: config.contentful.blogPostTypeId,
        order: "-sys.createdAt",
        locale: locale.value,
    });

    const tags = items.map((post) => post.fields.tags.join(",")).join(",").split(",").filter((value, index, array) => array.indexOf(value) === index);

    return tags;
});
</script>