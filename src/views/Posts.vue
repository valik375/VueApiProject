<template>
  <div class="container">
    <div class="title-wrapper">
      <h3 class="section-title">This is an Posts page</h3>
      <p class="posts-count">Length of posts: <strong> {{ getPostsLength }} </strong></p>
    </div>
    <!-- <button class="btn fill" @click="refreshPosts">Get</button> -->

    <div class="posts-items">

      <div class="post" v-for="post in allPost" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    allPost: []
  }),
  methods: {
    // async refreshPosts() {
    //   this.$store.dispatch('getPosts')
    //   console.log(1);
    // }
  },
  async mounted() {
    this.allPost = await this.$store.dispatch('getPosts')
  },
  computed: {
    getPostsLength() {
      return this.allPost.length
    }
  }
}
</script>