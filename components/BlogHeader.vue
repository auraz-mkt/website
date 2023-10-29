<template>
    <div class="tag__cloud">
        <div class="flex items-center w-full">
            <span class="flex-grow bg-gray-200 rounded h-0.5"></span>
            <span class="mx-3 text-l font-semibold text-gray-700">Tags</span>
            <span class="flex-grow bg-gray-200 rounded h-0.5"></span>
        </div>
        
        <div v-for="(tag, index) in tags.slice(0, showMoreTags ? tags.length : 5)" :key="index" class="tag__items md:hidden">
            <span class="tag__item">
                <a :href="localePath(generateTagURL(tag), locale)"> # {{ tag }}</a>
            </span>
        </div>
        <button class="tag__item md:hidden" @click="toggleShowMoreTags" v-if="tags.length > 5">{{ showMoreTags ? 'Mostrar Menos' : 'Mostrar Mais' }}</button>

        <div v-for="(tag, index) in tags" :key="index" class="tag__items hidden md:block">
            <span class="tag__item">
                <a :href="localePath(generateTagURL(tag), locale)"> # {{ tag }}</a>
            </span>
        </div>

    </div>
</template>

<style>
    .tag__cloud {
        @apply flex justify-center gap-2 flex-wrap p-4;
    }

    .tag__item {
        @apply bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600;
        @apply hover:shadow hover:bg-gray-300;
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

    const showMoreTags = ref(false);

    const toggleShowMoreTags = () => {
        showMoreTags.value = !showMoreTags.value;
    };

</script>
