<template>
    <main class="posts">
        <PostList :current_page="1"/>
    </main>
</template>

<style>
.blogcontent {
    width: calc(100% - 300px);
    margin-left: 300px;
}
</style>