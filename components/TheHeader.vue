<template>
  <header class="header">
    <ul class="header__items">
      <li
        v-for="{ path, description } in links"
        :key="path"
        class="header__item"
      >
        <NuxtLink class="header__link" :to="path">{{ description }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", description: "Auraz" },
      ],
    };
  },
};
</script>

<style>
.header {
  @apply w-full;
  @apply px-8 py-8;

  @apply bg-dark selection:bg-light;
  @apply text-light selection:text-dark;
  @apply outline-1 outline-offset-2 outline-current;
}

.header__items {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
}

.header__item {
  @apply no-underline;
  @apply font-serif;
}

.header__link {
  @apply align-baseline;
}
</style>
