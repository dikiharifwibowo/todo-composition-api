<script>
import { ref, reactive, computed, onMounted, watchEffect, watch } from 'vue'
import ListTodo from './../components/ListTodo.vue'
import saveToLocalStorage from '../components/local-storage.js'

export default {
  components: { ListTodo },
  setup() {
    onMounted( () => {
      let items = localStorage.getItem('todos')
      todos.list = !items || items == 'undefined' ? [] : JSON.parse(items)
    })

    const { todos, doneActivity, unCheckTodo } = useListTodo()
    const { todo, addTodo, deleteTodo } = useCrudTodo()

    function useListTodo() {
      const todos = reactive({
        list: []
      })
      const doneActivity = (indexTodo) => {
        todos.list = todos.list.filter((item, index) => {
          if(index === indexTodo) item.isDone = true;

          return item
        })
        saveToLocalStorage(todos.list)
      }
      const unCheckTodo = (indexTodo) => {
        todos.list = todos.list.filter((item, index) => {
          if(index === indexTodo) item.isDone = false;

          return item
        })
        saveToLocalStorage(todos.list)
      }

      return {
        todos,
        doneActivity,
        unCheckTodo,
      }
    }

    function useCrudTodo () {
      const todo = ref("");

      const addTodo = () => {
        if(!todo.value) return
        todos.list.unshift({
          activity: todo.value,
          isDone: false
        })
        todo.value = ''
        saveToLocalStorage(todos.list)
      }
      const deleteTodo = (indexTodo) => {
        todos.list = todos.list.filter((item, index) => {
          if(index !== indexTodo) return item
        })
        saveToLocalStorage()
      }
      
      return {
        todo,
        addTodo,
        deleteTodo
      }
    } 

    // watchEffect( () => {
    //   console.log(todo.value, todos.list)
    //   todo.value==='test' ? console.log('test') : console.log('not test') 
    // })

    // watch([todo, todos], (newValue, prevValue) => {
    //   console.log("value", newValue, prevValue)
    // })

    // watch(todo, (prevValue) => {
    //   console.log("prev", prevValue)
    // })

    return {
      todo,
      todos,
      addTodo,
      doneActivity,
      deleteTodo,
      unCheckTodo,
    }
  }
}


</script>

<template>
  <div class="container mx-auto px-4">
   <div class="bg-red-200 relative rounded-xl overflow-auto p-8">
      <div class="flex text-2xl text-zinc-500 mb-2">
        Simple To Do App
      </div>
      <div class="flex justify-between gap-8">
        <label class="relative block w-full">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"><!-- ... --></svg>
          </span>
          <input v-model="todo" class="placeholder:italic placeholder:text-gray-400 block bg-white w-full border 
          border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
          focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Add anything..." type="text" name="search"/>
        </label>
        <button type="button" @click="addTodo" class="min-w-fit py-2 px-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none" tabindex="-1">
          Add To Do 
        </button>
      </div>
    </div>

    <list-todo :todos="todos.list" @uncheck-todo="unCheckTodo" @delete-todo="deleteTodo" @set-done-activity="doneActivity"></list-todo>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>