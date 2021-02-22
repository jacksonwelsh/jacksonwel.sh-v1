<template>
  <div
    class="w-full flex items-center justify-center flex-basis-0 full-container"
  >
    <Card title="Welcome to the Lights Controller.">
      <p class="w-full">
        This site allows you to control Jackson's lights. Why? Great question.
      </p>
      <AuthButton />
    </Card>
  </div>
</template>
<script>
import Card from "./Card.vue";
import AuthButton from "./AuthButton.vue";

export default {
  components: {
    Card,
    AuthButton,
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>