<template>
  <main class="blog">
    <h1 class="blog__title">{{ title }}</h1>

    <p class="blog__dates">
      {{ $t("blog.publication") }}:
      <span class="blog__publication">{{ publication }}</span>
      - {{ $t("blog.revision") }}:
      <span class="blog__revision">{{ revision }}</span>
    </p>

    <div class="blog__body" v-html="body" />

    <div class="blog__tags">
      {{ $t("blog.tags") }}:
      {{ tags }}
    </div>
  </main>
</template>

<script setup>
import contentful from "contentful";

const { locale, t: $t } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();

const { data, error, status } = await useAsyncData("posts", async () => {
  const contentfulClient = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
  }).withAllLocales;

  const { items } = await contentfulClient.getEntries({
    content_type: config.contentful.blogPostTypeId,
    [`fields.slug.${locale.value}`]: route.params.slug,
    order: "-sys.createdAt",
  });


  return items[0];
});

const { sys, fields } = data.value;
const publication = computed(() => new Date(sys.createdAt).toLocaleDateString());
const revision = computed(() => new Date(sys.updatedAt).toLocaleDateString());
const title = computed(() => fields.title[locale.value]);
const body = computed(() => renderBlogText(fields.body[locale.value]));
const tags = computed(() => fields.tags[locale.value].join(", "));

definePageMeta({
  nuxtI18n: {
    "pt-BR": { slug: "conheca-auraz" },
    "en-US": { slug: "meet-auraz" },
  },
});

const pageTitle = `${$t("blog.name")} | ${fields.title[locale.value]}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<style>
.blog {
  @apply mx-64 my-32;
}

.blog__title {
  @apply text-5xl;
  @apply text-dark;
  @apply font-bold;
}

.blog__dates {
  @apply mt-4;
  @apply text-lg;
}

.blog__body {
  @apply mt-8;
  @apply text-2xl;
  @apply leading-relaxed;
}

.blog__body b {
  @apply text-red-700;
}

.blog__body i {
  @apply italic;
}

.blog__tags {
  @apply mt-8;

  @apply italic;
  @apply text-lg;
}
</style>
