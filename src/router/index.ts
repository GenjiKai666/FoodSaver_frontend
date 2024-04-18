import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Auth from "@/views/Auth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/auth',
      name:'Auth',
      component:Auth
    }
  ]
})

export default router
