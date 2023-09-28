<template>
  <header class="header">
    <TheHeaderMenu />
    <TheHeaderLocales />
  </header>
</template>

<style>
.header {
  @apply relative;
  @apply w-full;
  @apply px-8 py-8;
  @apply flex flex-row justify-between;

  @apply text-light bg-gradient-to-br from-primary from-30% to-secondary to-70%;
  @apply selection:text-dark selection:bg-tertiary;
}
</style>
