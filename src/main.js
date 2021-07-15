import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { CarbonIconsVue } from '@carbon/icons-vue';
import { createPinia } from 'pinia'
import App from './App.vue'
import LightsHome from './components/LightsHome.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'
import Host from './components/Host.vue'
import PostList from './components/blog/PostList.vue'
import BlogPost from './components/blog/BlogPost.vue'
import Login from './components/Login.vue'
import MothersDay from './components/MothersDay.vue'
import Dashboard from './components/Dashboard.vue'
import KolgushevGradeCalculator from './components/KolgushevGradeCalculator.vue'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: PostList },
    { path: '/blog/:id', component: BlogPost },
    { path: '/lights', component: LightsHome },
    { path: '/kolgushev', component: KolgushevGradeCalculator },
    { path: '/host', component: Host },
    { path: '/mom', component: MothersDay },
    { path: '/login', component: Login },
    { path: '/billing/dashboard', component: Dashboard },
    { path: '/:pathMatch(.*)', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
