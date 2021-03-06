<template>
  <div
    class="h-14 border-b dark:border-gray-500 flex content-center items-center px-5 text-gray-900 dark:text-gray-100 justify-between"
  >
    <div class="w-48">
      <router-link to="/" class="w-full whitespace-nowrap">
        <h1 class="text-xl font-hand">Jackson Welsh</h1>
      </router-link>
    </div>
    <!-- center links -->
    <div class="font-semibold font-mono">
      <router-link
        to="/about"
        class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 m-2 transition-all"
        >about</router-link
      >
      <router-link
        to="/lights"
        class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 m-2 transition-all"
        >lights</router-link
      >
      <!--
      <router-link
        to="/scavenger"
        class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-2 m-2 transition-all"
        >scavvy</router-link
      > -->
    </div>
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-150 ease-out opacity-100 scale-100"
    >
      <div
        class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Product</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Features</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Marketplace</a
          >

          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >Company</a
          >
        </div>
        <a
          href="#"
          class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
        >
          Log in
        </a>
      </div>
    </div>

    <div class="w-48 hidden md:visible"></div>
  </div>
</template>