<template>
    <main class="posts">
        <TagCloud />
        <PostList :current_page="current_page" :tag="tag" />
    </main>
</template>

<script>
export default {
    props: {
        current_page: {
            default: 1,
            type: Number
        },
        tag: {
            default: '',
            type: String
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
