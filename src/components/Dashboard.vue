<template>
  <div class="flex">
    <Sidebar />
    <!-- main content -->
    <div class="flex-grow p-10">
      <div class="w-full bg-green-400 dark:bg-blue-900 rounded-lg p-6">
        <h1 class="text-5xl">
          Hi {{ profile.fullname ? profile.fullname.split(" ")[0] : "" }}.
        </h1>
        <h2 class="text-xl font-light mt-2">Welcome to the billing console.</h2>
      </div>
      <div class="p-5 bg-gray-800 rounded-lg mt-5">
        <h3 class="w-100 text-xl border-opacity-50 border-b border-gray-100">
          Create a new charge
        </h3>
        <select
          class="mt-3 w-64 h-10 rounded-md text-gray-100 bg-gray-900 px-4"
        >
          <option v-for="(client, index) in clients" :key="index">
            {{ client }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./billing/Sidebar.vue";
export default {
  data() {
    return {
      profile: {},
      clients: ["Joey", "Marth", "Henry", "Chase", "Sam"],
    };
  },
  components: {
    Sidebar,
  },
  mounted() {
    fetch("http://0.0.0.0:8080/user/profile", {
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) throw Exception;
        return response.json();
      })
      .then((json) => {
        this.profile = json;
      })
      .catch((exc) => {
        this.$router.push("/login");
      });
    console.log(this.profile);
  },
};
</script>