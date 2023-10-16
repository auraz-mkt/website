<template>
    <main class="posts">
        <BlogHeader />
        <PostList :current_page="current_page" />
    </main>
</template>

<script>
export default {
    props: {
        current_page: {
            default: 1,
            type: Number
        }
    }
}
</script>

<style>
.blogcontent {
    width: calc(100% - 300px);
    margin-left: 300px;
}
</style>