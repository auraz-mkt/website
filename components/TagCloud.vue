<template>
    <div class="tag__cloud">
        <div class="tag__cloud__title">
            <span>Explore nossos posts por tags</span>  
        </div>
        
        <div v-for="(tag, index) in tags.slice(0, showMoreTags ? tags.length : 5)" :key="index" class="tag__items md:hidden">
            <span class="tag__item">
                <a :href="localePath(generateTagURL(tag), locale)"> #{{ tag }}</a>
            </span>
        </div>
        <button class="tag__item md:hidden" @click="toggleShowMoreTags" v-if="tags.length > 5">{{ showMoreTags ? '< Mostrar Menos' : 'Mostrar Mais >' }}</button>

        <div v-for="(tag, index) in tags" :key="index" class="tag__items hidden md:block">
            <span class="tag__item">
                <a :href="localePath(generateTagURL(tag), locale)"> #{{ tag }}</a>
            </span>
        </div>
    </div>

    <!--- <form action="ok" class="max-w-[450px] w-full px-2">
        <div class="relative">
            <input type="text" name="q" class="w-full border h-10 shadow p-4 rounded-full justify-center" placeholder="search">
            <button type="submit">
                <svg class="text-teal-400 h-5 w-5 absolute top-2 right-3 fill-current"            
                    x="0px" y="0px" viewBox="0 0 56.966 56.966">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                    </path>
                </svg>
            </button>
        </div>
    </form> -->

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
