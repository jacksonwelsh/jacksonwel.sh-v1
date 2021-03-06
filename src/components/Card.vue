<template>
  <div
    class="p-1"
    :class="bgOptions"
  >
    <div
      class="p-10 object-center text-center h-full w-full flex flex-wrap justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200"
    >
      <h2 class="text-3xl font-black w-full font-mono">{{ title }}</h2>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      requred: true,
      type: String,
    },
    gradient: {
      default: true,
      type: Boolean,
    },
    gradFrom: {
      default: "from-blue-500",
      type: String,
    },
    gradTo: {
      default: "to-green-300",
      type: String,
    },
    gradDir: {
      default: "tr",
      type: String
    },
    solidColor: {
      default: 'bg-green-500',
      type: String
    },
    shadow: {
      default: false,
      type: Boolean
    },
    ghostLeft: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    bgOptions() {
      let ret = [];
      if (this.gradient) {
        ret.push(`bg-gradient-to-${this.gradDir}`);
        ret.push(this.gradFrom);
        ret.push(this.gradTo);
      } else {
        ret.push(this.solidColor);
      }
      console.log(ret);
      return ret;
    },
  },
};
</script>