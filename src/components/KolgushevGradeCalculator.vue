<template>
  <div class="container mx-auto px-2 mb-20">
    <Hero
      title="Kolgushev Grade Calculator"
      content="Enter your assignment grades and see what your final score is."
    />
    <div>
      <section-header title="Homework Grades" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900">
        <text-input-with-icon
          v-for="idx in 4"
          :key="idx"
          :placeholder="'Homework ' + idx + assignments[idx]"
          type="number"
          :objid="'asn' + idx"
          v-model.number="assignments[idx]"
          ><task-20
        /></text-input-with-icon>
      </div>

      <section-header title="Midterm" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900">
        <text-input-with-icon
          objid="midterm"
          type="number"
          placeholder="Midterm"
          ><app-connectivity-20 />
        </text-input-with-icon>
      </div>

      <section-header title="Final" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900">
        <text-input-with-icon objid="final" type="number" placeholder="Final"
          ><model-alt-20 />
        </text-input-with-icon>
      </div>

      <section-header title="Your Grade" />
      <p>{{ assignments[0] }}</p>
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import SectionHeader from "./SectionHeader.vue";
import TextInputWithIcon from "./utility/TextInputWithIcon.vue";
import Task20 from "@carbon/icons-vue/lib/task/20";
import AppConnectivity20 from "@carbon/icons-vue/lib/app-connectivity/20";
import ModelAlt20 from "@carbon/icons-vue/lib/model--alt/20";
export default {
  components: {
    Hero,
    SectionHeader,
    TextInputWithIcon,
    Task20,
    AppConnectivity20,
    ModelAlt20,
  },
  setup() {
    let assignments = [];
    return { assignments };
  },
};
</script>