<template>
  <div class="full-container flex flex-wrap items-center justify-center">
    <div class="bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
      <div class="text-center p-10 bg-gray-100 dark:bg-gray-900 ">
        <h1 class="text-6xl w-full font-black mb-5 bg-gradient-to-tr from-purple-500 to-blue-500 bg-clip-text text-transparent pb-2">
          Happy Mother's Day!
        </h1>
        <p class="w-full mb-2">We got you a 3-month subscription to Book of the Month.</p>
        <p class="w-full mb-7">Copy the gift code <code class="select-all text-purple-300" @click="copyToClipboard">732f2e2c23</code> (just touch it to copy) then click the button to redeem!</p>
        <a
          href="//bookofthemonth.com/gift/redeem"
          class="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-50 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-900 dark:hover:text-blue-100 font-bold rounded-lg"
          >Get the books</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
const notyf = new Notyf();

const copyToClipboard = () => {
  document.execCommand("copy");
  notyf.success("Copied to clipboard!");
  window.getSelection().empty();
};
</script>