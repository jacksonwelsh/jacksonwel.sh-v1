<template>
  <div
    class="mt-10 text-gray-900 dark:text-gray-100 text-2xl font-semibold w-full flex"
  >
    <h2 class="whitespace-nowrap mr-4">{{ title }}</h2>
    <div class="border-b border-gray-900 dark:border-white w-full h-4" />
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>