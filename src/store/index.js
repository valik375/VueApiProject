import { createStore } from 'vuex'

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
    async getPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return await res.json()
    },
    async getUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      return await res.json()
    }
  },
  modules: {
  }
})
