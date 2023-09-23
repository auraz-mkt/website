<template>
    <header class="menu">
        <div class="menu__header">
            Icon
            <div class="menu__title">
                Menu
            </div>
        </div>
        <div class="menu__division"></div>
        <div class="menu__search">
            S
            <input type="text" placeholder="Search" class="menu__search__text" />
        </div>
        <div class="menu__button">
            H
            <span class="menu__button__text">
                Home
            </span>
        </div>
        <div class="menu__button">
            B
            <span class="menu__button__text">
                BookMark
            </span>
        </div>
        <div class="menu__division"></div>
        <div class="menu__button">
            <div class="menu__dropdown">
                <b-dropdown class="menu__button__text" text="ChatBox">
                    ChatBox
                </b-dropdown>
                <span class="menu__arrow">V</span>
            </div>
        </div>
        <div class="menu__dropdown__submenu" id="submenu">
            <h1 class="menu__submenu__button">
                Social
            </h1>
            <h1 class="menu__submenu__button">
                Personal
            </h1>
            <h1 class="menu__submenu__button">
                Friends
            </h1>
        </div>
        <div class="menu__button">
            L
            <span class="menu__button__text">
                LogOut
            </span>
        </div>
    </header>
</template>

<style>
.menu {
    @apply fixed;
    @apply top-0 bottom-0;
    @apply lg:left-0 p-2 w-[300px];
    @apply overflow-y-auto;
    @apply text-center;
    @apply bg-gray-900;
}

.menu__header {
    @apply text-xl;
    @apply text-gray-100;
    
    @apply p-2.5;
    @apply mt-1;
    @apply flex;
    @apply items-center;
}

.menu__title {
    @apply font-bold;
    @apply text-gray-200;
    @apply text-lg;
    @apply ml-3;
}

.menu__division {
    @apply my-2;
    @apply bg-gray-600;
    @apply h-[1px];
}

.menu__search {
    @apply p-2.5;
    @apply flex;
    @apply items-center;
    @apply rounded-md;
    @apply px-4;
    @apply duration-300 cursor-pointer;
    @apply bg-gray-700;
    @apply text-white;

}

.menu__search__text{
    @apply text-[15px];
    @apply ml-4;
    @apply w-full;
    @apply bg-transparent;
    @apply focus:outline-none;
}

.menu__button{
    @apply p-2.5;
    @apply mt-3;
    @apply flex;
    @apply items-center;
    @apply rounded-md;
    @apply px-4;
    @apply duration-300 cursor-pointer;
    @apply hover:bg-blue-600;
    @apply text-white;
}

.menu__button__text{
    @apply text-[15px];
    @apply ml-4;
    @apply text-gray-200;
    @apply font-bold; 
}

.menu__dropdown {
    @apply flex;
    @apply justify-between;
    @apply w-full;
    @apply items-center;
}

.menu__arrow{
    @apply text-sm;
    @apply rotate-0;
}

.menu__dropdown__submenu{
    @apply text-left;
    @apply text-sm;
    @apply mt-2;
    @apply w-4/5;
    @apply mx-auto;
    @apply text-gray-200;
    @apply font-bold;
}

.menu__submenu__button{
    @apply cursor-pointer;
    @apply p-2;
    @apply hover:bg-blue-600;
    @apply rounded-md;
    @apply mt-1;
}
</style>