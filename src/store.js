import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    posts: []
  }),
  actions: {
    loadPosts() {
      console.log('fetching posts!')
      fetch('//blog.jacksonwelsh.workers.dev').then((r) => r.json()).then((r) => this.posts = r)
    }
  }
})