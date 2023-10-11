<template>
    <main class="posts">
        <div class="blogcontent">
            <BlogHeroHeader />
            <PostList :current_page="route.params.current_page" />
            <NewsLetter />
        </div>
    </main>
</template>

<script setup>
const route = useRoute();
</script>

<style>
.blogcontent {
    width: calc(100% - 300px);
    margin-left: 300px;
}
</style>