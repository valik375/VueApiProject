<template>
  <div class="container" v-if="user.id === +this.$route.params.id">
    <div style="margin-bottom:40px" class="title-wrapper">
      <h3 class="section-title">Name Surname: {{user.name}}</h3>
      <p class="posts-count">Username: {{ user.username }}</p>
    </div>

    <div  class="">
      <p style="margin-bottom:20px">Phone: {{ user.phone }}</p>
      <p style="margin-bottom:20px">Email: {{ user.email }}</p>
      <p style="margin-bottom:20px">Website: <a :href="'http://' + user.website ">{{ user.website }}</a></p>
    </div>

    <p style="margin: 40px 0 10px 0;"><strong>Comments</strong></p>
    <hr>
    <div class="posts-items">
      <div class="post" v-for="post in userPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>

  </div>
  <div class="container" v-else>
    <p>Cant find user with id: {{this.$route.params.id}}</p>
  </div>
</template>

<script>

export default {
  data: () => ({
    allUser: [],
    allPosts: [],
    user: [],
  }),
  methods: {
    
  },
  async mounted() {
    this.allUser = await this.$store.dispatch('getUsers')
    this.allPosts = await this.$store.dispatch('getPosts')
    
    const userIdx = this.allUser.findIndex(user => user.id === +this.$route.params.id)
    
    this.user = this.allUser[userIdx]
  },
  computed: {
    userPosts() {
      return this.allPosts.filter(post => post.userId === +this.$route.params.id)
    }
  }
}
</script>
