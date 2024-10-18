import { defineStore } from 'pinia'
import liff from '@line/liff'

export const useLiffStore = defineStore('liffStore', {
    state: () => ({
        isLiffInitialized: false,
        isLoggedIn: false,
        userProfile: null
    }),
    actions: {
        async initLiff() {
            try {
                await liff.init({ liffId: '2006328229-joqPqeRy' })
                this.isLiffInitialized = true
                this.isLoggedIn = liff.isLoggedIn()

                // 如果已登入，獲取使用者資訊
                if (this.isLoggedIn) {
                    const profile = await liff.getProfile()
                    this.userProfile = {
                        displayName: profile.displayName,
                        userId: profile.userId
                    }
                }
            } catch (error) {
                console.error('LIFF 初始化失敗 router', error)
                // liff.logout()
                this.isLiffInitialized = false
                this.isLoggedIn = liff.isLoggedIn()
            }
        },
    },
})
