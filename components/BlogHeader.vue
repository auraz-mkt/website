<template>
    <div class="text-gray-600 body-font">
        <nav class="flex px-4 border-b md:shadow-lg items-center relative">
            <div class="text-lg font-bold md:py-0 py-4">
                Auraz Blog
            </div>
            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                        <span>Products</span>
                    </a>
                </li>
                <li class="relative parent">
                    <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
                        <span>Service</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    </a>
                    <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:rounded-b ">
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Web development
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Web Design
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-4 py-3 hover:bg-gray-50">
                                Machine Learning
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                        <span>About us</span>
                    </a>
                </li>
            </ul>
            
        </nav>
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