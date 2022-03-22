import { createRouter, createWebHistory } from 'vue-router'
import Home from './module/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/tts',
    children: [
      {
        path: 'tts',
        component: () => import('./module/TTS.vue')
      },
      {
        path: 'asr',
        component: () => import('./module/ASR.vue')
      },
      {
        path: 'droid',
        component: () => import('./module/Droid.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
