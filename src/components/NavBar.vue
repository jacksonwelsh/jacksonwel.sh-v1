<template>
    <div class="h-14 border-b dark:border-none dark:bg-black flex content-center items-center px-5 text-gray-900 dark:text-gray-100 justify-between">
        <div class="w-48">
            <router-link to="/" class="w-full whitespace-nowrap">
                <h1 class="text-xl font-hand">Jackson Welsh</h1>
            </router-link>
        </div>
        <!-- center links -->
        <div class="font-semibold">
            <router-link to="/about" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 m-2 transition-all">about</router-link>
            <router-link to="/lights" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 m-2 transition-all">lights</router-link>
        </div>
        <div class="w-48 hidden md:visible">
        </div>
    </div>
</template>