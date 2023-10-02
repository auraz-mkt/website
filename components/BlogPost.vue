<template>
  <div class="blog_post">
    <h1 class="blog_post__title">{{ title }}</h1>

    <p class="blog_post__dates">
      {{ $t("blog.publication") }}:
      <span class="blog_post__publication">{{ publicationDate }}</span>
      - {{ $t("blog.revision") }}:
      <span class="blog_post__revision">{{ revisionDate }}</span>
    </p>

    <div class="blog_post__body" v-html="blogText" />

    <div class="blog_post__tags">
      {{ $t("blog.tags") }}:
      {{ tagsList }}
    </div>
  </div>
</template>

<script setup>
const { t: $t } = useI18n();

const { publication, revision, title, body, tags } = defineProps([
  "publication",
  "revision",
  "title",
  "body",
  "tags",
]);

const publicationDate = computed(() => new Date(publication).toLocaleDateString());
const revisionDate = computed(() => new Date(revision).toLocaleDateString());
const blogText = computed(() => renderBlogText(body));
const tagsList = computed(() => tags.join(", "));
</script>

<style>
.blog_post__title {
  @apply text-5xl;
  @apply text-dark;
  @apply font-bold;
}

.blog_post__dates {
  @apply mt-4;
  @apply text-lg;
}

.blog_post__body {
  @apply mt-8;
  @apply text-2xl;
  @apply leading-relaxed;
}

.blog_post__body b {
  @apply text-red-700;
}

.blog_post__body i {
  @apply italic;
}

.blog_post__tags {
  @apply mt-8;

  @apply italic;
  @apply text-lg;
}
</style>
