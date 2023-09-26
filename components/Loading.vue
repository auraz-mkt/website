<template>
  <div class="loading">
    <div class="loading__spinner" :class="{ loading__hide: !loading }">
      <Icon name="svg-spinners:pulse-multiple" class="loading__spinner__icon" />
    </div>
    <slot class="loading__content" :class="{ loading__hide: loading }" />
  </div>
</template>

<script setup>
const { loading } = defineProps(["loading"]);
</script>

<style>
.loading {
  @apply relative;
  @apply w-full h-full;
}

.loading__spinner {
  @apply absolute;
  @apply z-0;

  @apply opacity-100;
  @apply transition-opacity ease-in-out duration-150;

  @apply w-full h-full;
  @apply flex flex-col justify-center items-center;
}

.loading__spinner__icon {
  @apply block;

  @apply w-4/5 max-w-7xl h-full;
  @apply text-primary;
}

.loading__content {
  @apply absolute;
  @apply z-10;

  @apply opacity-100;
  @apply transition-opacity ease-in-out duration-150;
}

.loading__hide {
  @apply opacity-0;
}
</style>
