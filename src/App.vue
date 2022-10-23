<template>
  <p>{{ this.restaurants }}</p>
<div v-for="p in restaurants" :key="p.id">
  <hr>
  <h3>{{ p.name }}</h3>
</div>
</template>
<script>
export default {
  data () {
    return {
      restaurants: []
    }
  },
  beforeMount () {
    // getPosts () {
    fetch('http://localhost:1337/api/restaurants/')
      .then(response => response.json())
      .then(json => { this.restaurants = json.data })
    console.log(this.restaurants)
  }
  // }
}
</script>
