<template>
  <button type="submit" class="form_submit" :disabled="!allowSubmit">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps(["allowSubmit"]);

const { allowSubmit } = toRefs(props);
</script>

<style>
.form_submit {
  @apply w-full md:w-3/4 lg:w-1/2;
  @apply py-2 px-4;

  @apply text-center;
  @apply rounded-xl;

  @apply text-light bg-gradient-to-br from-primary from-30% to-secondary to-70%;

  @apply hover:shadow-glow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:shadow-glow-lg focus:shadow-tertiary;
}

.form_submit:disabled {
  @apply opacity-70;
  @apply cursor-not-allowed;

  @apply hover:shadow-none;
  @apply focus:outline-none;
}
</style>
