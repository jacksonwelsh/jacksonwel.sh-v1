<template>
  <div class="container m-auto px-2 mb-20">
    <Hero title="Blog." content="A collection of my musings and projects." gradFrom="from-green-500" gradTo="to-blue-400" />
    <post-card v-for="post of posts" :key="post.id" :post="post"></post-card>
  </div>
</template>

<script>
import Hero from '../Hero.vue'
import PostCard from './PostCard.vue'
// import posts from './posts'
import { useMainStore } from '../../store'
import { computed } from 'vue'

export default {
  components: { Hero, PostCard },
  setup() {
    const postStore = useMainStore()
    console.log(postStore.posts)
    if (postStore.posts.length === 0) {
      console.log('loading posts!')
      postStore.loadPosts()
    }
    
    const posts = computed(() => postStore.posts)
    return { posts }
  }
}
</script>