<template>
  <div class="relative">
    <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
      <slot></slot>
    </div>
    <input
      class="focus:ring-2 focus:ring-blue-500 focus:ring-opacity-80 focus:outline-none w-full text-sm text-black placeholder-gray-500 rounded-lg py-2 pl-10"
      :placeholder="placeholder"
      :aria-label="label"
      :type="type"
      :id="objid"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false
    },
    label: {
      required: true
    },
    type: {
      required: false,
      default: 'text'
    },
    objid: {
      required: true
    }
  }
}
</script>