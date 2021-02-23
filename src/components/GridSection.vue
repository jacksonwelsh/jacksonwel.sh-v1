<template>
  <section-header :title="title"></section-header>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
    <slot></slot>
  </div>
</template>
<script>
import SectionHeader from './SectionHeader.vue'

export default {
  props: {
    title: {
      required: true,
      type: String
    }
  },
  components: {
    SectionHeader
  }
}
</script>