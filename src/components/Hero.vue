<template>
  <div
    class="h-64 bg-gradient-to-tr p-1 mt-5 flex content-center flex-wrap dark:text-gray-300"
    :class="[gradFrom, gradTo]"
  >
    <div class="w-full h-full fbg-gray-100 dark:fbg-gray-900 flex content-center flex-wrap p-10">
      <div class="w-full my-2">
        <h1 class="font-black text-5xl font-mono text-gray-900">{{ title }}</h1>
      </div>
      <div class="w-full text-gray-900" v-if="content">
        <p class="text-2xl" v-html="content"/>
      </div>
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