<template>
  <div
    class="transform p-1 shadow-md w-auto bg-gray-200 dark:bg-gray-700 rounded-xl"
    :class="[ghostLeft ? '-rotate-2' : 'rotate-2']"
  >
    <div
      class="p-10 shadow-md rounded-xl object-center text-center transform rotate-2 h-full flex flex-wrap justify-center"
      :class="[bgOptions, ghostLeft ? 'rotate-2' : '-rotate-2']"
    >
      <h2 class="text-3xl font-black w-full">{{ title }}</h2>
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