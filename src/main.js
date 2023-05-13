import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './config/router'

createApp(App).use(Router).mount('#app')
