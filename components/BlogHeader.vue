<template>
    <div class="blogheader">
        <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary class="dropbar__filter">
                    Classificar por
                    <span class="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </summary>
        
                <div class="filter__box">
                    <ul class="space-y-1 border-t border-gray-200 p-4">
                        <li>
                            <label class="classifier__item">      
                                <a> Recomendado </a>
                            </label>
                        </li>
                        <li>
                            <label class="classifier__item">      
                                <a> Popular </a>
                            </label>
                        </li>
                        <li>
                            <label class="classifier__item">      
                                <a> Recente </a>
                            </label>
                        </li>
                    </ul>
                </div>
            </details>
        </div>

        <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary class="dropbar__filter">
                    Tags
                    <span class="transition group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </summary>
        
                <div class="filter__box">
                    <header class="flex items-center justify-between p-4">
                        <span class="text-gray-700">{{ selectedTags.length }} Selecionadas </span>
        
                        <button
                            type="button"
                            class="text-gray-900"
                            @click="resetTags"
                        >
                            Resetar
                        </button>
                    </header>
        
                    <ul class="space-y-1 border-t border-gray-200 p-4">
                        <li v-for="tag in tags" :key="tag" class="tag__items">
                            <label class="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="h-5 w-5 rounded border-gray-300"
                                    @click="toggleTagSelection(tag)"
                                    :value="tag"
                                    v-model="selectedTags"
                                /> 
                                <span class="font-medium text-gray-700">
                                    <a :href="localePath(generateTagURL(tag), locale)">{{ tag }}</a>
                                </span>
                            </label> 
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    </div>
</template>

<style>
.blogheader {
    @apply flex gap-8 justify-center border-b border-gray-300 pb-3 ml-10 mr-10;
}


.dropbar__filter {
    @apply flex cursor-pointer items-center gap-2 pb-1 text-gray-900 transition hover:text-gray-700 text-lg font-medium;
}

.filter__box {
    @apply z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2;
    @apply w-64 rounded-lg border border-gray-200 bg-white text-base;
}

.classifier__item {
    @apply inline-flex items-center gap-2;
    @apply block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-700;
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

const selectedTags = ref([]);

const toggleTagSelection = (tag) => {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    } else {
        selectedTags.value.push(tag);
    }
};

const resetTags = () => {
    selectedTags.value = [];
};

</script>