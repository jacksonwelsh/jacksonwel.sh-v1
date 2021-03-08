import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LightsHome from './components/LightsHome.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Host from './components/Host.vue'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/lights', component: LightsHome },
    { path: '/host', component: Host },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(App)
app.use(router)
app.mount('#app')
