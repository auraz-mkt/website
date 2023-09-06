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
  @apply text-light bg-dark;
  @apply selection:text-dark selection:bg-tertiary;
}

.footer__copyright {
  @apply text-center;
}
</style>
