<template>
    <div class="posts flex flex-wrap justify-center">
        <PostCard v-for="post in posts" :key="post.sys.id" :post="post" />
    </div>
    <div class="paging flex flex-wrap justify-center">
        <Paging />
    </div>
</template>

<script>

export default {
    props: {
        posts: Array,
    },
};

</script>

<style>
.posts {
    @apply w-full;
    @apply py-4;


    @apply bg-light;
    @apply bg-noisy;
}
</style>
