<template>
  <header class="header">
    <h3 class="header__title">nosso blog</h3>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <div class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="font-bold md:mr-12"><a href="#">Lorem 1</a></li>
        <li class="md:mr-12"><a href="#">Lorem 2</a></li>
        <li class="md:mr-12"><a href="#">Lorem 3</a></li>
        <li class="md:mr-12">
          <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply w-full;
  @apply px-4 py-4 md:px-8 md:py-8;
  @apply flex flex-row justify-between;

  @apply text-slate-700 relative;
  @apply bg-transparent;
  @apply selection:text-dark selection:bg-tertiary;
}

.header__title {
  @apply flex cursor-pointer items-center whitespace-nowrap text-2xl font-black;
}

.header__items {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
}

.header__item {
  @apply ml-8;
  @apply no-underline;
}

.header__item:first-child {
  @apply ml-0;
  @apply font-serif;
}

.header__locales {
  @apply text-2xl;
  @apply flex flex-row justify-start items-center;
}

.header__locale {
  @apply ml-3;
}

.header__locale:first-child {
  @apply ml-0;
}

.header__link {
  @apply hover:text-shadow-xl hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-xl focus:shadow-tertiary;
}
</style>
