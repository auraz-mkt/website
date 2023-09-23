<template>
    <div class="post__card shadow-md bg-gray-50 border-solid border-2 border-gray-300 rounded-lg m-4 p-2  mt-6 space-y-12 lg:gap-x-6 lg:space-y-0" :id="post.id">
        <div class="group relative w-full">
            <div class="relative w-full h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-64">
                <img :src="post.img" :alt="post.altText" class="h-full w-full object-cover object-center">
            </div>
            <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                  <time :datetime="post.date" class="text-gray-500">{{ post.date }}</time>
                  <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category }}</a>
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="/post">
                        <span class="absolute inset-0"></span>
                        {{ post.title }}
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.body }}</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <img :src="post.author.img" alt="" class="h-10 w-10 rounded-full bg-gray-50">
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        {{ post.author.name }}
                      </a>
                    </p>
                    <p class="text-gray-600">{{ post.author.title }}</p>
                  </div>
                </div>
              </article>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object,
    },
};

</script>

<style>
.post__card {
    @apply max-w-xl
}

</style>
