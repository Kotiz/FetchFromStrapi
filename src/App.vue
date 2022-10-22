<template>
<div class="todos-class">
  <div class="title has-text-centered">
    Badass Todo
  </div>
<!-- <ProductList /> -->
<p>TUTAJ ma byc fetch ze strapi z komponentu GetContent :</p>
<GetContent />
<form @submit.prevent="addTodo">
    <div class="field is-grouped mb-1">
      <div class="control is-expanded">
        <input
               v-model="newTodoContent"
               class="input"
               type="text"
               placeholder="Model kasy :">
    </div>
    <div class="control">
      <button
        :disabled="!newTodoContent"
        class="button is-info"
        >
          Add
      </button>
    </div>
  </div>
</form>

<div v-for="todo in todos" :key="todo.id" class="card">
  <div class="card-content">
    <div class="content">
      {{ todo.producent }} {{ todo.model }} {{ todo.price}}
        <button class="button is-light">&check;</button>
        <button class="button is-danger" @click="deleteTodo(todo.id)">&cross;</button>
    </div>
  </div>
</div>
</div>
</template>
<script setup>
/*
imports
*/
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import GetContent from './strapi/getContent.vue'
// import ProductList from './components/ProductList.vue'

/*
todos
*/
const todos = ref([])
/*
add todo
*/

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'kasyfiskalne'))
  const fbTodos = []
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, '=>', doc.data())
    const todo = {
      id: doc.id,
      model: doc.data().model,
      price: doc.data().price,
      producent: doc.data().producent
    }
    fbTodos.push(todo)
  })
  todos.value = fbTodos
})

const newTodoContent = ref('')

const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    producent: newTodoContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newTodoContent.value = ''
}

const deleteTodo = id => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>
<style>
.todos-class {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>

<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
