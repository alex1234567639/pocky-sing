import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
    const showLog = import.meta.env.VITE_APP_SHOW_LOG === 'true'

    return { showLog }
})
