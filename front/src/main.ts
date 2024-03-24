import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { widgets } from './plugins/widgets'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(widgets)

app.mount('#app')
