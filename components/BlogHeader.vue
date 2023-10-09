<template>
    <div class="text-gray-600">
        <div class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
            <h3 class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                auraz blog
            </h3>
            <input type="checkbox" class="peer hidden" id="navbar-open" />
            <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </label>
            <div class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                <li class="font-bold md:mr-12"><a href="#" class="relative parent">Lorem 1
                    <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:rounded-b ">
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Subitem 1
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Subitem 2
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Subitem 3
                            </a>
                        </li>
                    </ul>
                </a>
                </li>
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
    @media only screen and (min-width: 768px){
        .parent:hover .child {
            opacity:1;
            height:auto;
            overflow:none;
            transform: translateY(0);
        }
        .child {
            opacity:0;
            height:0;
            overflow:hidden;
            transform: translateY(-10%);
        }
    }
    
</style>