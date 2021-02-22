import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LightsHome from './components/LightsHome.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import './index.css'

const routes = [
    { path: '/lights', component: LightsHome },
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

let app = createApp(App)
app.use(router)
app.mount('#app')
