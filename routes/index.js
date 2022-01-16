import { createWebHistory, createRouter } from "vue-router";
import Home from './../src/pages/Home.vue';
import Note from './../src/pages/Notes.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/notes', component: Note },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

