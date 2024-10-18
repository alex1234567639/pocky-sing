import { createRouter, createWebHistory } from 'vue-router'
import { useLiffStore } from '../stores/liffStore'

const routes = [
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    },
    {
        path: "/",
        name: "home",
        component: () => import("../../views/index.vue"),
    },
    {
        path: "/generate",
        name: "generate",
        component: () => import("../../views/Generate.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/waiting",
        name: "waiting",
        component: () => import("../../views/Waiting.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/result",
        name: "result",
        component: () => import("../../views/Result.vue"),
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    const liffStore = useLiffStore()

    // 等待 LIFF 初始化完成
    if (!liffStore.isLiffInitialized) {
        await liffStore.initLiff()
    }

    // 如果路由需要身份驗證，檢查登入狀態
    if (to.meta.requiresAuth && !liffStore.isLoggedIn) {
        // 未登入，重定向到首頁
        if (import.meta.env.VITE_APP_ENV === 'dev') {
            next()
        } else {
            next({ name: 'home' })
        }
    } else {
        // 已登入或不需要身份驗證，繼續導航
        next()
    }
})

export default router
