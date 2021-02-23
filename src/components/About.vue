<template>
  <div class="container mx-auto px-2 mb-20">
    <Hero title="About me." />
    <div class="text-gray-100">
      <section-header title="My backstory" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="grid grid-cols-1 gap-5 h-0">
          <p>
            I'm a Texas native, currently attending the University of North
            Texas in Denton in pursuit of a B.S. in Computer Science. Because I
            have a large amount of transfer credit, I'm expecting to graduate in
            three years and plan to pursue a Master's in Computer Science with a
            specialization in Security (though that, of course, is subject to
            change).
          </p>
          <p>
            Most of my programming knowledge comes from being self-taught.
            Starting small with an Arduino and eventually scaling to a Raspberry
            Pi then a VPS, I've progressively grown my skillset and I have the
            goal to <strong>never stop learning.</strong>
          </p>
          <p>
            Through my senior year of high school, I discovered that I enjoyed
            tutoring my peers, so I started a tutoring business both locally and
            online. After building a significant business out of this, I was
            hired as a consultant at New Light Technologies, a GIS firm based in
            Washington, DC. There, I work on GIS and web-oriented projects from
            a developer perspective.
          </p>
        </div>
        <div class="flex justify-center">
          <img
            class="w-auto rounded-xl"
            style="height: 512px"
            :id="selfie"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "./Hero.vue";
import SectionHeader from "./SectionHeader.vue";

import imgUrl from '../assets/about_pic.jpg'
document.getElementById('selfie').src = imgUrl

export default {
  components: {
    Hero,
    SectionHeader,
  },
};
</script>