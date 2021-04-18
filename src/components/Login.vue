<template>
  <div class="container m-auto px-2">
    <div
      class="w-full flex items-center justify-center flex-basis-0 half-container sm:full-container flex-wrap"
    >
      <div class="flex flex-wrap bg-gray-200 dark:bg-gray-800 p-10 rounded-2xl">
        <h1 class="text-3xl font-bold w-full mb-3 text-center">
          Log in to continue to bill mode
        </h1>
        <form class="w-full text-gray-900" @submit.prevent="login()">
          <text-input-with-icon
            class="relative w-full sm:w-5/6 md:w-1/2 mx-auto my-3"
            :placeholder="username + number"
            aria-label="username"
            objid="username"
          >
            <Credentials20 />
          </text-input-with-icon>
          <text-input-with-icon
            class="w-full sm:w-5/6 md:w-1/2 mx-auto"
            label="password"
            type="password"
            placeholder="••••••••••••••••"
            objid="password"
          >
            <Password20 />
          </text-input-with-icon>
          <div class="flex justify-center mt-6">
            <button
              class="px-5 mr-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-blue-50 transition-all"
            >
              Log in
              <ArrowRight20 class="inline ml-1 transform -translate-y-0.5" />
            </button>
            <button
              class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-blue-50 transition-all"
              @click="addNumber"
              type="button"
            >
              shitty button {{ number }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Credentials20 from "@carbon/icons-vue/es/credentials/20";
import Password20 from "@carbon/icons-vue/es/password/20";
import ArrowRight20 from "@carbon/icons-vue/es/arrow--right/20";
import TextInputWithIcon from "./utility/TextInputWithIcon.vue";

export default {
  components: {
    Credentials20,
    Password20,
    ArrowRight20,
    TextInputWithIcon,
  },
  data() {
    return {
      username: "john.appleseed",
      number: 0
    };
  },
  methods: {
    login() {
      fetch("http://0.0.0.0:8080/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json.status === "success") {
            console.log(json);
            window.localStorage.setItem("token", json.token);
            this.$router.push("/billing/dashboard");
          } else {
            console.log(err);
            alert("login failed oof");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("login failed oof");
        });
    },
    addNumber() {
      ++this.number
    }
  },
};
</script>
