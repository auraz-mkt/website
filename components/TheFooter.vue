<template>
  <footer class="footer">
    <div class="footer__copyright">© 2023 Auraz Marketing</div>
  </footer>
</template>

<style>
.footer {
  @apply w-full;
  @apply px-8 py-8;

  @apply bg-dark selection:bg-light;
  @apply text-light selection:text-dark;
}

.footer__copyright {
  @apply text-center;
}
</style>
