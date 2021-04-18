<template>
  <nav
    class="bg-gray-200 dark:bg-gray-800 sticky top-14 full-container w-80 py-10 px-6"
  >
    <router-link
      to="/billing/dashboard"
      class="text-lg flex items-center w-full bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-lg mb-5"
    >
      <div
        class="bg-gradient-to-tr from-purple-400 to-blue-400 text-gray-900 rounded-md p-2 mr-3"
      >
        <Home20 class="inline" />
      </div>
      Home
    </router-link>
    <router-link
      to="/billing/invoices"
      class="text-lg flex items-center w-full px-4 py-2 rounded-lg"
    >
      <div
        class="bg-gradient-to-tr from-red-400 to-yellow-400 text-gray-900 rounded-md p-2 mr-3"
      >
        <Money20 class="inline" />
      </div>
      Invoices
    </router-link>
  </nav>
</template>

<script>
import Home20 from "@carbon/icons-vue/es/home/24";
import Money20 from "@carbon/icons-vue/es/money/24";

export default {
  components: {
    Home20,
    Money20
  }
}
</script>
