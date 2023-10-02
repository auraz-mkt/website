<template>
  <!-- <div v-html="post" /> -->
  <main class="posts">
    <div class="blogcontent">
      <BlogHeroHeader />
      <PostList />
      <NewsLetter />
    </div>
  </main>
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
    include: 2,
    order: "-sys.createdAt",
  });

  console.log(items)

  return JSON.stringify(items);
});
</script>

<style>
.blog__bold {
  @apply text-red-700;
}

.blog__italic {
  @apply italic;
}

.blogcontent {
  width: calc(100% - 300px);
  margin-left: 300px;
}
</style>