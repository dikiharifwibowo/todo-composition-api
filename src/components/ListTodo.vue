<script>
export default {
    props: {
        todos: {
            type: Array,
            default: []
        }
    },
    setup(props, { attrs, slots, emit }) {
        const handleActivity = (index) =>{ 
            emit('set-done-activity', index)
        }
        const handleDeleteTodo = (index) => {
            emit('delete-todo', index)
        }
        const unCheckTodo = (index) => {
            emit('uncheck-todo', index)
        }

        return {
            handleActivity,
            handleDeleteTodo,
            unCheckTodo
        }
    }
}
</script> 

<template>
    <div class="flex flex-wrap mt-6">
         <div class="font-bold flex text-lg text-zinc-500 mt-2">
            Your Todo
        </div>
        <div :class="item.isDone ? 'bg-blue-200' : 'bg-orange-200' " class="w-full relative rounded-xl overflow-auto p-4 my-2" v-for="(item, index) in todos" :key="index">
            <div class="flex justify-between">
                <div class="text-lg" :class="item.isDone ? 'line-through' : '' ">
                    {{ item.activity }}
                </div>
                <div class="flex gap-4">
                    <svg @click="handleActivity(index)" v-if="!item.isDone" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg @click="unCheckTodo(index)" v-if="item.isDone" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg @click="handleDeleteTodo(index)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .line-through {
        text-decoration: line-through;
    }
</style>