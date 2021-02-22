<template>
  <div
    class="h-64 rounded-xl bg-gradient-to-tr p-10 mt-5 flex content-center flex-wrap text-gray-100 dark:text-gray-300"
    :class="[gradFrom, gradTo]"
  >
    <div class="w-full">
      <h1 class="font-black text-5xl">{{ title }}</h1>
    </div>
    <div class="w-full" v-if="content">
      <p class="text-2xl" v-html="content"/>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        content: {
            type: String
        },
        gradFrom: {
            type: String,
            default: 'from-blue-600'
        },
        gradTo: {
            type: String,
            default: 'to-purple-900'
        }
    }
}
</script>