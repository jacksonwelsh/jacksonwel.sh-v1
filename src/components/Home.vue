<template>
  <div class="container m-auto">
    <div class="mx-2">
      <Hero title="Hi, I'm Jackson." content="I make things." />
      <GridSection title="What I do">
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
            class="font-semibold underline text-gray-900 hover:text-black hover:no-underline transition-all"
            href="//geo4.dev"
            >Geo4Dev initiative's new website</a
          >.
        </Card>
        <Card
          title="Tutor @ Wyzant"
          gradFrom="from-yellow-200 dark:from-yellow-700"
          gradTo="to-yellow-500 dark:to-yellow-400"
        >
          Tutored in math and computer science related courses from the high
          school to college (2000) level.
        </Card>
      </GridSection>
    </div>
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