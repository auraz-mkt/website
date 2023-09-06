<template>
  <footer class="footer">
    <div class="footer__copyright">{{ $t('copyrightNotice') }}</div>
  </footer>
</template>

<style>
.footer {
  @apply w-full;
  @apply px-8 py-8;

  @apply text-lg;
  @apply bg-dark selection:bg-light;
  @apply text-light selection:text-dark;
}

.footer__copyright {
  @apply text-center;
}
</style>
