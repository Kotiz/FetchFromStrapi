<template>
    <!-- <button @click="getPosts">Show Posts</button>
    <hr>
    <div v-for="p in restaurants" :key="p.id">
      <h2>{{ p.data }}</h2>
    </div> -->
    <div>
    <div v-for="p in restaurants" :key="p.id">
      <h2>{{ p.data }}</h2>
    </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    async getPosts () {
      fetch('http://localhost:1337/api/restaurants')
        .then(response => response.json())
        .then(json => { this.restaurants = json.data })
    }
  }
}
</script>
