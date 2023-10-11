<template>
    <main class="posts">
        <div class="blogcontent">
            <BlogHeroHeader />
            <PostList :current_page="1"/>
            <NewsLetter />
        </div>
    </main>
</template>

<style>
.blogcontent {
    width: calc(100% - 300px);
    margin-left: 300px;
}
</style>