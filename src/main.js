import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import './index.css'
import Router from './../routes/index'
createApp(Home)
.use(Router)
.mount('#app')
