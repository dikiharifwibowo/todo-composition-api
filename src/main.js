import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Router from './../routes/index'
createApp(App)
.use(Router)
.mount('#app')
