import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
      path: "/playground",
      name: "Playground",
      component: () => import("../views/Playground.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router


