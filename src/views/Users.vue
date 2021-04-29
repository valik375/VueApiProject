<template>
  <div class="container">
    <div class="title-wrapper">
      <h3 class="section-title">This is an Posts page</h3>
      <p class="posts-count">Length of posts: <strong> {{ getUsersLength }} </strong></p>
    </div>
    <!-- <button class="btn fill" @click="refreshPosts">Get</button> -->

    <div class="posts-items">

      <div class="post" v-for="user in allUsers" :key="user.id">
        <h3>Username: {{ user.username }}</h3>
        <p style="margin-bottom: 20px">Name and Surname: {{ user.name }}</p>
        <router-link class="btn fill" :to="'/users/' + user.id">Details</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    allUsers: []
  }),
  methods: {
    // async refreshPosts() {
    //   this.$store.dispatch('getPosts')
    //   console.log(1);
    // }
  },
  async mounted() {
    this.allUsers = await this.$store.dispatch('getUsers')
  },
  computed: {
    getUsersLength() {
      return this.allUsers.length
    }
  }
}
</script>
