<template>
  <div class="container mx-auto px-2 mb-20">
    <div
      class="h-64 p-1 mt-5 flex content-center flex-wrap dark:text-gray-200 dark:bg-gray-100 bg-gray-900"
    >
      <div
        class="w-full h-full bg-gray-100 dark:bg-gray-900 flex content-center flex-wrap p-10"
      >
        <div class="w-full">
          <h1 class="font-black text-5xl">
            Get a site that makes you <br class="sm:hidden md:block" />
            <span
              class="bg-gradient-to-tr from-pink-500 via-blue-600 to-green-500 bg-clip-text text-transparent"
              >stand out</span
            >.
          </h1>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h2 class="font-bold text-4xl text-blue-700 dark:text-blue-400 text-center">Websites drive interest.</h2>
      <div class="grid md:grid-cols-2 gap-10 lg:grid-cols-3 mt-3">
        <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-5 text-center">
            <h3 class="text-2xl font-bold">Information at your clients' fingertips</h3>
            <p class="mt-2">Not only does a website drive foot traffic, it drives down costs as your clients don't need to call to find out information about your business.</p>
        </div>
        <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-5 text-center">
        </div>
        <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-5 text-center">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Hero from "./Hero.vue";
import GridSection from "./GridSection.vue";

export default {
  components: {
    Card,
    Hero,
    GridSection,
  },
};
</script>