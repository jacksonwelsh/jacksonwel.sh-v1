<template>
  <div class="container mx-auto px-2 mb-20">
    <Hero
      title="Welcome to Scavvy."
      gradFrom="from-blue-500"
      gradTo="to-green-600"
    />
    <grid-section title="What is Scavvy?">
      <p class="dark:text-gray-100">
        Scavvy allows you to create and join custom scavenger hunt experiences.
      </p>
      <Card title="New here?" gradFrom="from-green-600" gradTo="to-indigo-500">
        <p>Let's get you set up on your scavenger hunt.</p>
        <button
          type="button"
          class="bg-purple-700 hover:bg-purple-800 text-purple-100 hover:text-purple-200 text-base font-semibold px-6 py-2 rounded-lg mt-3"
        >
          get started
        </button>
      </Card>
      <Card title="Continuing?" gradFrom="from-red-600" gradTo="to-yellow-700">
        We can get back to where you were.
        <button
          type="button"
          class="bg-gray-700 hover:bg-gray-800 text-gray-50 hover:text-gray-200 text-base font-semibold px-6 py-2 rounded-lg mt-3"
        >
          find my spot
        </button>
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
</script>,
    SectionHeader