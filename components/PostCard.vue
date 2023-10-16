<template>
  <div
    class="post__card shadow-md bg-gray-50 border-solid border-2 border-gray-300 rounded-lg m-4 p-2  mt-6 space-y-12 lg:gap-x-6 lg:space-y-0"
    :id="post.id">
    <div class="p-2 group relative w-full">
      <div class="relative w-full h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-64">
                <img :src="post.fields.img" :alt="post.fields.altText" class="h-full w-full object-cover object-center">
            </div>
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="pt-1 flex items-center gap-x-4 text-xs">
          <time :datetime="post.sys.createdAt" class="text-gray-500">{{ publicationDate }}</time>
          <a href="#"
            class="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5">{{
              tagsList }}</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a :href="navigatePostURL">
              <span class="absolute inset-0"></span>
              {{ post.fields.title }}
            </a>
          </h3>
          <div class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" v-html="blogText" />
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img :src="post?.fields?.author[0].fields.image.fields.file.url" alt="" class="h-10 w-10 rounded-full bg-gray-50">
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                {{ post.fields.author[0].fields.name }}
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const { locale, t: $t } = useI18n();
const { post } = defineProps(["post"]);
const publicationDate = computed(() => new Date(post.sys.createdAt).toLocaleDateString());
const tagsList = computed(() => post.fields.tags.join(", "));
const blogText = computed(() => renderBlogText(post.fields.body));
const navigatePostURL = computed(() => "/" + locale.value + "/blog/posts/" + post.fields.slug);
</script>

<style>
.post__card {
  @apply max-w-xl
}
</style>
