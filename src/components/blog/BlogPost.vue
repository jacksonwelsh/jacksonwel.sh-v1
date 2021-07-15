<template>
  <div class="container m-auto px-2 mb-20">
    <Hero :title="currentPost?.title" />
    <article class="md mt-4">
      <vue-showdown :markdown="currentPost?.body" />
    </article>
    <router-link to="/blog/Cool_Post">cool post</router-link>
  </div>
</template>

<script>
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useMainStore } from "../../store";
import { computed, ref } from "vue";
import { VueShowdown } from "vue-showdown";

import Hero from "../Hero.vue";

export default {
  components: { Hero, VueShowdown },
  setup() {
    const postID = ref(useRoute().params.id);
    const postStore = useMainStore();

    if (postStore.posts.length === 0) postStore.loadPosts();

    const getCurrentPost = () => {
      for (let post of postStore.posts)
        if (post.id === postID.value) return post;
    };

    const currentPost = computed(() => getCurrentPost());

    onBeforeRouteUpdate((to, from) => {
      postID.value = to.params.id;
    });

    return { postID, currentPost };
  },
};
</script>
