<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  components: {
    NavBar
  },
  data() { return {} },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
