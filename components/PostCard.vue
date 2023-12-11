<template>
  <div
    class="post__card shadow-md bg-gray-50 border-solid border-2 border-gray-300 rounded-lg m-4 p-2  mt-6 space-y-12 lg:gap-x-6 lg:space-y-0"
    :id="post.id">
    <a :href="navigatePostURL">
      <div class="p-2 group relative w-full">
        <div class="relative w-full h-80 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-64">
                  <a :href="navigatePostURL"><img :src="post.fields.image.fields.file.url" :alt="post.fields.altText" class="h-full w-full object-cover object-center"></a>
              </div>
        <article class="flex max-w-xl flex-col items-start justify-between grow">
          <div class="pt-1 flex items-center gap-x-4 text-xs">
            <time :datetime="post.sys.updatedAt" class="text-gray-500">{{ publicationDate }}</time>
            <div>
              <TagButton v-for="tag in tagsList" :key="tag" :tag=tag />
            </div>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <span class="absolute inset-0"></span>
                {{ post.fields.title }}
            </h3>
            <div class="flex-grow mt-5 line-clamp-3 text-sm leading-6 text-gray-600" v-html="blogText" />
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
    </a>
  </div>
</template>

<script setup>
const { locale, t: $t } = useI18n();
const { post } = defineProps(["post"]);
const publicationDate = computed(() => new Date(post.sys.updatedAt).toLocaleDateString());
const tagsList = computed(() => post.metadata.tags.map((tag) => tag.sys.id));
const blogText = computed(() => post.fields.body.length > 500 ? renderBlogText(post.fields.body.substring(0, 500) + "...") : renderBlogText(post.fields.body));
const navigatePostURL = computed(() => "/blog/posts/" + post.fields.slug);
</script>

<style>
.post__card {
  @apply max-w-xl
}
@media (max-width: 767px) {
  .post__card article {
    min-width: 360px;
  }
}

@media (min-width: 768px) {
  .post__card article {
    min-width: 540px;
  }
}
</style>
