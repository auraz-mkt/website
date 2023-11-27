<template>
  <main class="blog">
    <BlogPost :publication="sys.createdAt" :revision="sys.updatedAt" :title="fields.title[locale]"
      :body="fields.body[locale]" :tags=tags :author="fields.author['pt-BR']" :imgUrl="fields.image['pt-BR'].fields.file['pt-BR'].url" :imgAlt="fields.altText"/>
      <ShareButton />
      <!-- {{ JSON.stringify(fields.altText) }} -->
  </main>
</template>

<script setup>
import contentful from "contentful";
const { locale, t: $t } = useI18n();
const route = useRoute();
const config = useRuntimeConfig();

class BlogEntryNotFoundError extends Error {
  constructor(slug) {
    super(`Blog entry '${slug}' not found`);
    this.name = "BlogEntryNotFoundError";
  }
}

const { data, error, status } = await useAsyncData("posts", async () => {
  const contentfulClient = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
  }).withAllLocales;

  const response = await contentfulClient.getEntries({
    content_type: config.contentful.blogPostTypeId,
    [`fields.slug.${locale.value}`]: route.params.slug,
    order: "-sys.createdAt",
  });

  if (response.total == 0) {
    throw new BlogEntryNotFoundError(route.params.slug);
  }

  const slug = response.items[0].fields.slug;
  return response.items[0];
});

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: error.value.message });
}

const sys = computed(() => data.value.sys);
const fields = computed(() => data.value.fields);
const tags = computed(() => data.value.metadata.tags);

route.meta.nuxtI18n = {
  "pt-BR": { slug: fields.value.slug["pt-BR"] },
  "en-US": { slug: fields.value.slug["en-US"] },
};

const pageTitle = `${$t("pages.blog")} | ${fields.value.title[locale.value]}`;

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
</style>
