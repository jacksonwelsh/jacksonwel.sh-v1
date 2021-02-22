<template>
  <a :href="authUrl" class="w-96">
    <div
      class="mt-5 bg-github text-gray-100 p-3 xs:w-2/3 rounded-xl mx-auto flex hover:bg-black"
    >
      <div class="justify-left flex m-auto">
        <img src="/src/assets/gh-light.svg" class="h-6" />
      </div>
      <div class="flex w-full justify-center justify-self-center">
        Continue with GitHub
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      authUrl: "https://github.com",
    };
  },
  async created() {
    this.authUrl = async() => {
      let res = await fetch("https://lights.jacksonwel.sh/auth/url");
      let url = await res.json().url;
      return url;
    };
  },
};
</script>