import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LightsHome from './components/LightsHome.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Scavvy from './components/Scavvy.vue'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/lights', component: LightsHome },
    { path: '/scavenger', component: Scavvy },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

let app = createApp(App)
app.use(router)
app.mount('#app')
