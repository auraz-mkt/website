<template>
    <div class="posts flex flex-wrap justify-center">
        <PostCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </div>
    <div class="paging flex flex-wrap justify-center">
        <Paging />
    </div>
</template>

<script>
import posts from "../mocks/posts.json";

export default {
    props: {
        profileId: String,
    },
    data() {
        return {
            blogPosts: posts.posts,
        }
    }
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
