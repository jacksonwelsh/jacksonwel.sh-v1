<template>
  <div class="container m-auto px-2 mb-20">
    <!--<div class="w-full px-5 py-3 mt-3 bg-blue-700 text-gray-50 rounded-lg flex justify-center">
      <svg id="icon" class="mr-2 fill-current flex-grow-0 flex-shrink h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>bullhorn</title><path class="cls-1" d="M26,6V8.17L5.64,11.87a2,2,0,0,0-1.64,2v4.34a2,2,0,0,0,1.64,2L8,20.56V24a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V22.74l6,1.09V26h2V6ZM18,24H10V20.93l8,1.45ZM6,18.17V13.83L26,10.2V21.8Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-2"/></svg> <p>Announcing the Jackson Welsh Hosting Platform</p>
    </div>-->
    <Hero title="Hi, I'm Jackson." content="I make things." />
    <grid-section title="What I do">
      <Card
        title="Student @ UNT"
        gradFrom="from-green-400 dark:from-green-600"
        gradTo="to-green-500 dark:to-green-700"
        gradDir="tl"
      >
        Pursuing B.S. in Computer Science <br />
        Expected graduation: May 2023
      </Card>
      <Card
        title="Software Engineer @ New Light Technologies"
        gradFrom="from-blue-300 dark:from-blue-400"
        gradTo="to-blue-500 dark:to-blue-600"
        ghostLeft="false"
      >
        Lead developer of the&nbsp;<a
          class="font-semibold text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white hover:underline transition-all"
          href="//geo4.dev"
          >Geo4Dev initiative's new website</a
        >.
      </Card>
      <Card
        title="Tutor @ Wyzant"
        gradFrom="from-yellow-200 dark:from-yellow-700"
        gradTo="to-yellow-500 dark:to-yellow-400"
      >
        <p>
          I tutor in math and computer science related courses from the high
          school to college (2000) level.
        </p>
        <p><em>Currently not accepting new clients.</em></p>
      </Card>
    </grid-section>
    <grid-section title="Things I've made">
      <Card title="Geo4.Dev" gradFrom="from-blue-500" gradTo="to-blue-300">
        A website to help surface timely and relevant geospatial data for
        researchers about developing countries. It's based on CKAN.<br />
        <a
          href="//geo4.dev"
          target="_blank"
          class="font-semibold text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white hover:underline transition-all"
          >Check it out →</a
        >
      </Card>
      <Card
        title="The Dragon Band Fundraising Website"
        gradFrom="from-red-600"
        gradTo="to-red-900"
      >
        A novel website to assist the RRHS band in fundraising, simplifying data
        collection and aggregation.
      </Card>
    </grid-section>
    <grid-section title="How to find me">
      <Card title="Email." gradFrom="from-red-500" gradTo="to-yellow-700">
        <p class="w-full">
          me@this.domain, you'll need to fill it in yourself.
        </p>
      </Card>
      <Card
        title="Twitter."
        gradFrom="from-blue-300"
        gradTo="to-blue-600"
        gradDir="t"
      >
        <p class="w-full">
          <a
            class="font-semibold text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white hover:underline transition-all"
            href="//twitter.com/_jacksonwelsh"
            >@_jacksonwelsh</a
          >
        </p>
      </Card>
      <Card title="Linkedin." gradFrom="from-indigo-600" gradTo="to-indigo-400">
        <p class="w-full">
          <a
            class="font-semibold text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white hover:underline transition-all"
            href="//linkedin.com/in/jacksonwelsh"
            >/in/jacksonwelsh</a
          >
        </p>
      </Card>
      <div class="hidden xl:inline-flex" />
      <Card
        title="GitHub."
        gradFrom="from-gray-700"
        gradTo="to-gray-500"
      >
        <p class="w-full">
          <a
            class="font-semibold text-gray-900 hover:text-black dark:text-gray-100 dark:hover:text-white hover:underline transition-all"
            href="//github.com/jacksonwelsh"
            >@jacksonwelsh</a
          >
        </p>
      </Card>
    </grid-section>
  </div>
</template>
<script>
import Card from "./Card.vue";
import Hero from "./Hero.vue";
import GridSection from "./GridSection.vue";

export default {
  components: {
    Card,
    Hero,
    GridSection,
  },
};
</script>