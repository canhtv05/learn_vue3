import './assets/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// tanstack
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(createPinia())
// app.use(router)
app.use(Antd)
app.use(VueQueryPlugin)

app.mount('#app')
