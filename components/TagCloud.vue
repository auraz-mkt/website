<template>
    <div class="tag__cloud">
        <div class="tag__cloud__title">
            <span>Explore nossos posts por tags</span>  
        </div>
        <div v-for="(tag, index) in tags && tags.slice(0, showMoreTags ? tags.length : 5)" :key="index" class="tag__items md:hidden">
            <TagButton :tag="tag" />
        </div>
        <button class="tag__item md:hidden" @click="toggleShowMoreTags" v-if="tags && tags.length > 5">{{ showMoreTags ? '< Mostrar Menos' : 'Mostrar Mais >' }}</button>

        <div v-for="(tag, index) in tags" :key="index" class="tag__items hidden md:block">
            <TagButton :tag="tag" />
        </div>
    </div>

</template>

<style>
    .tag__cloud {
        @apply flex justify-center gap-2 flex-wrap p-4;
        @apply mx-3 font-semibold text-gray-700;
    }

    .tag__cloud__title {
        @apply flex justify-center w-full
    }

    .tag__item {
        @apply bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600;
        @apply hover:shadow hover:bg-gray-300;
    }
</style>

<script setup>
    import contentful from "contentful";
    const { locale, t: $t } = useI18n();
    const config = useRuntimeConfig();

    // const {
    //     data: tags,
    //     error,
    //     status,
    // } = await useAsyncData("tags", async () => {
    //     const contentfulClient = contentful.createClient({
    //         space: config.contentful.spaceId,
    //         accessToken: config.contentful.accessToken,
    //     });

    //     const { items } = await contentfulClient.getEntries({
    //         content_type: config.contentful.blogPostTypeId,
    //         order: "-sys.createdAt",
    //         locale: locale.value,
    //     });

    //     const tags = items.map((post) => post.fields.tags.join(",")).join(",").split(",").filter((value, index, array) => array.indexOf(value) === index);
    //     // console.log(tags);
    //     return tags;
    // });

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
        const tagsIds = items.map((post) => post.metadata.tags);
        const todosOsIdsSet = new Set(tagsIds
                .flat()
                .filter((tag) => tag && tag.sys && tag.sys.id)
                .map((tag) => tag.sys.id)
        );

        const todosOsIds = Array.from(todosOsIdsSet);

        return todosOsIds;
    });

    const showMoreTags = ref(false);

    const toggleShowMoreTags = () => {
        showMoreTags.value = !showMoreTags.value;
    };

</script>
