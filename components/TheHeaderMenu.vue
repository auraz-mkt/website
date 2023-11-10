<template>
  <div class="header_menu">
    <div class="header_menu__toggle">
      <Icon
        name="system-uicons:menu-hamburger"
        v-show="!visibleMenu"
        @click.prevent.stop="showMenu()"
      />
      <Icon
        name="system-uicons:close"
        v-show="visibleMenu"
        @click.prevent.stop="hideMenu()"
      />
    </div>
    <ul
      class="header_menu__list"
      :class="{ header_menu__list__invisible: !visibleMenu }"
    >
      <li
        v-for="{ path, description } in pages"
        :key="path"
        class="header_menu__item"
      >
        <NuxtLink class="header_menu__link" :to="localePath(path, locale)" @click="hideMenu">
          {{ $t(description) }}
        </NuxtLink>
      </li>
      <li class="header_menu__separator">
        <hr />
      </li>
      <li
        v-for="{ path, description } in auth"
        :key="path"
        class="header_menu__item"
      >
        <NuxtLink class="header_menu__link" :to="localePath(path, locale)" @click="hideMenu">
          {{ $t(description) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();

const visibleMenu = ref(false);

function showMenu() {
  visibleMenu.value = true;
}

function hideMenu() {
  visibleMenu.value = false;
}

const pages = [
  { path: "/", description: "companyName" },
  { path: "/about/", description: "pages.about" },
];

const auth = [
  { path: "/auth/signup/", description: "auth.links.signup" },
  { path: "/auth/login/", description: "auth.links.login" },
];
</script>

<style>
/* For smaller screens, menu with hamburger */
@media not all and screen(md) {
  .header_menu__toggle {
    @apply block;

    @apply h-full;
    @apply text-4xl;

    @apply flex flex-col justify-center;
  }

  .header_menu__list {
    @apply absolute;
    @apply inset-x-0 top-24;

    @apply text-dark bg-light;

    @apply flex flex-col justify-start items-start;
    @apply gap-6;

    @apply border-b-8 border-b-primary;
    @apply p-8;

    @apply transition-all ease-in-out duration-300;

    /* Menu visible above other elements */
    @apply opacity-100;
    @apply z-10;
  }

  .header_menu__list__invisible {
    /* Menu invisible below other elements */
    @apply opacity-0;
    @apply -z-10;
  }
}

/* For large screens, straight menu */
@media screen(md) {
  .header_menu__toggle {
    @apply hidden;
  }

  .header_menu__list {
    @apply static;

    @apply text-light bg-transparent;

    @apply flex flex-row justify-start items-center;
    @apply gap-6;
  }
}

.header_menu__item {
  @apply text-2xl;

  @apply no-underline;
  @apply hover:text-shadow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-xl focus:shadow-tertiary;
}

.header_menu__separator {
  @apply md:hidden;
  @apply h-0.5 w-full;
  @apply border-none;
  @apply bg-primary;
}

.header_menu__item:first-child {
  @apply font-serif;
}
</style>
