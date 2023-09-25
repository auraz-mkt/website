<template>
  <div v-html="post" />
</template>

<script setup>
import contentful from "contentful";

const config = useRuntimeConfig();

const {
  data: post,
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
  });

  return renderBlogText(items[0].fields.body);
});
</script>

<style>
.blog__bold {
  @apply text-red-700;
}

.blog__italic {
  @apply italic;
}
</style>
