<template>
  <div class="full-container flex flex-wrap items-center justify-center">
    <div class="mx-2 bg-gradient-to-tr from-blue-500 to-green-500 p-1">
      <div class="text-center p-10 bg-gray-100 dark:bg-gray-900">
        <h1 class="text-6xl w-full font-black mb-7"><span class="bg-gradient-to-tr from-blue-500 to-green-500 bg-clip-text text-transparent">404</span> - Page Not Found</h1>
        <p class="w-full mb-7">Please check the URL and try again.</p>
        <router-link
          to="/"
          class="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-50 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-900 dark:hover:text-blue-100 font-bold rounded-lg"
          >Return Home</router-link
        >
      </div>
    </div>
  </div>
</template>