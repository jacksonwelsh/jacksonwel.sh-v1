<template>
  <router-link :to="`/blog/${id}`">
    <div
      class="dark:hover:bg-gray-700 hover:bg-gray-300 dark:border-gray-800 border-gray-200 border-2 p-4 mt-2 transition-all"
    >
      <h3 class="text-3xl underline font-mono">{{ title }}</h3>
      <p class="dark:text-gray-400 text-gray-500">{{ ts }}</p>
      <p>{{ preview }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const generatePreview = (post) => {
      return post.body.slice(0, 240) + "...";
    };

    const preview = props.post.preview || generatePreview(props.post);
    const title = props.post.title;
    const id = props.post.id;
    const date = new Date(0);
    date.setUTCSeconds(props.post.created)
    const ts = date.toLocaleDateString()
    return { preview, title, id, ts };
  },
};
</script>