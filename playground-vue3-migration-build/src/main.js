import { createApp, configureCompat } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/about', component: () => import('./views/About.vue') },
  { path: '/another', component: () => import('./views/Another.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes,
})

configureCompat({
  COMPONENT_ASYNC: false
})

const app = createApp(App)

app.use(router)

app.mount('#app')
