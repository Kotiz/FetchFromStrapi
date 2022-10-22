import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

const todos = ref([])


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
