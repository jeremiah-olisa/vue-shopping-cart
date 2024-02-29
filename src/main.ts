import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

export const piniaInstance = createPinia()
const app = createApp(App)

app.use(piniaInstance)

app.mount('#app')
