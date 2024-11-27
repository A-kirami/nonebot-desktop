import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import { router } from '~/router'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import '~/styles/main.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
