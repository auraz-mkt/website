<template>
  <ul class="header_locales">
    <li v-for="{ code, flag } in locales" :key="path">
      <button class="header_locales__flag" @click.prevent.stop="setLocale(code)">
        <Icon class="header_locales__flag_icon" :name="flag" />
      </button>
    </li>
  </ul>
</template>

<script setup>
const { setLocale } = useI18n();

const locales = [
  { code: "pt-BR", flag: "emojione:flag-for-brazil" },
  { code: "en-US", flag: "emojione:flag-for-united-states" },
]
</script>

<style>
.header_locales {
  @apply text-2xl;

  @apply flex flex-row justify-start items-center;
  @apply gap-4;
}

.header_locales__flag {
  @apply h-8 w-8;
  @apply rounded-full;

  @apply ring-1 ring-light ring-offset-2 ring-offset-secondary;

  @apply hover:shadow-glow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:shadow-glow-xl focus:shadow-tertiary;

  @apply flex flex-col justify-center items-center;
}

.header_locales__flag_icon {
  @apply h-8 w-8;
  @apply rounded-full;
}
</style>
