<template>
    <div class="text-gray-600">
        <div class="header">
            <h3 class="header__title">
                nosso blog
            </h3>
            <input type="checkbox" class="peer hidden" id="navbar-open" />
            <label class="custom-label" for="navbar-open">
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
        </div>
    </div>
</template>

<style>
    .blogheader {
        @apply text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center;
    }

    .blogheader__title {
        @apply flex cursor-pointer items-center whitespace-nowrap text-2xl font-black;
    }

    .custom-label {
        @apply absolute top-5 right-7 cursor-pointer md:hidden;
    }
</style>