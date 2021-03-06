<template>
  <div class="container m-auto px-2 mb-20">
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
          class="font-semibold text-gray-100 hover:text-white hover:underline transition-all"
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
          class="font-semibold text-gray-100 hover:text-white hover:underline transition-all"
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
            class="font-semibold text-gray-100 hover:text-white hover:underline transition-all"
            href="//twitter.com/_jacksonwelsh"
            >@_jacksonwelsh</a
          >
        </p>
      </Card>
      <Card title="Linkedin." gradFrom="from-indigo-600" gradTo="to-indigo-400">
        <p class="w-full">
          <a
            class="font-semibold text-gray-100 hover:text-white hover:underline transition-all"
            href="//linkedin.com/in/jacksonwelsh"
            >/in/jacksonwelsh</a
          >
        </p>
      </Card>
      <div class="hidden xl:inline-flex" />
      <Card
        title="GitHub."
        gradFrom="from-gray-700 text-gray-100"
        gradTo="to-gray-500"
      >
        <p class="w-full text-gray-100">
          <a
            class="font-semibold text-gray-100 hover:text-white hover:underline transition-all"
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