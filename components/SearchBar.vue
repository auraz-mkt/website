<template>

    <div class="search__bar">
        <input class="search__input" v-model="keyword" type="text" placeholder="search">
        <a :href="localePath(generateTagURL(keyword), locale)"> 
            <div class="search__bar__icon">
                <svg class="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        </a>
    </div>

</template>

<style>
    .search__bar {
        @apply max-w-[450px] relative;
        @apply bg-gray-100 h-10 p-2 rounded-full;
    }

    .search__input {
        @apply bg-transparent focus:outline-none;
        @apply max-w-[400px] w-full px-3;
    }

    .search__bar__icon {
        @apply absolute inset-y-0 right-5 flex items-center pl-3 dark:text-gray-400;
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

    const keyword = ref('');

</script>
