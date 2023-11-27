<template class="mx-7 lg:mx-6 mt-32 flex-grow">
  <article class="max-w-5xl mx-auto">
    <header class="mb-14">
      <div class="mt-3 text-center">
        <TagButton v-for="tag in tagsList" :key="tag" :tag=tag />
      </div>

      <h1 class="text-4xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
        {{ title }}</h1>

      <div class="relative mt-4 flex items-center gap-x-4 justify-center text-center">
        <!-- <img :src="author[0].fields.image['pt-BR'].fields.file['pt-BR'].url" alt="" -->
          <!-- class="h-12 w-12 rounded-full bg-gray-50">
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a href="#">
              <span class="absolute inset-0"></span>
              {{ author[0].fields.name['pt-BR'] }}
            </a>
          <p> {{ author[0].fields.image['pt-BR'].fields.file.url }} </p>
          </p> -->
          <div class="blog_post__dates">
            <p class="blog_post__publication">{{ $t("blog.publication") }}: {{ publicationDate }}</p>
            <p class="blog_post__revision">{{ $t("blog.revision") }}: {{ revisionDate }}</p>
          </div>
        </div>
      <!-- </div> -->

      <div class="mt-10 -mx-7 md:mx-0">
        <img class="w-full max-w-2xl mx-auto" :src="imgUrl" :width="960" :height="500" :alt="imgAlt">
      </div>
    </header>

    <div class="blog_post__body" v-html="blogText" />

  </article>
</template>

<script setup>
const { t: $t } = useI18n();

const { publication, revision, title, body, tags, author, imgUrl, imgAlt } = defineProps([
  "publication",
  "revision",
  "title",
  "body",
  "tags",
  "author",
  "imgUrl",
  "imgAlt",
]);

const publicationDate = computed(() => new Date(publication).toLocaleDateString());
const revisionDate = computed(() => new Date(revision).toLocaleDateString());
const blogText = computed(() => renderBlogText(body));
const tagsList = computed(() => tags.map((tag) => tag.sys.id));
</script>

<style>
.blog_post__title {
  @apply text-5xl;
  @apply text-dark;
  @apply font-bold;
}

.blog_post__dates {
  @apply text-gray-600;
  @apply text-xs;
}

.blog_post__body {
  @apply mt-8;
  @apply text-2xl;
  @apply leading-relaxed;
  @apply text-slate-800 max-w-none;
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
