<template>
  <div class="layout">
    <TheHeader />
    <NuxtPage class="content" />
    <TheFooter />
  </div>
</template>

<style>
.layout {
  @apply w-screen h-screen;
  @apply flex flex-col justify-between items-center;
}

.content {
  @apply flex-grow;
}
</style>
