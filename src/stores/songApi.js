import { defineStore } from 'pinia'
import { callApi } from '/src/utils/api/api.js'

export const useSongApi = defineStore('songApi', () => {
    // 取得活動列表
    const getPromptTemplate = () => {
        return callApi('get', '/api/v1/prompt-template')
    }

    // 取得帳號狀態
    const getMember = (params) => {
        const query = new URLSearchParams()
        for (const key in params) {
            const value = params[key]
            // 忽略值為 null、undefined 或空字符串的情況
            if (value === null || value === undefined || value === '') {
                continue;
            }
            // 如果值是數組，則遍歷數組並添加到查詢字串中
            if (Array.isArray(value) && value.length > 0) {
                value.forEach(item => query.append(`${key}[]`, item))
            } else if (!Array.isArray(value)) {
                query.append(key, value)
            }
        }
        const queryString = query.toString()
        return callApi('get',`/api/v1/song?${queryString}`)
    }

    // 新增歌曲
    const createSong = (line_user_id, prompt) => {
        const data = {
            line_user_id: line_user_id,
            prompt: prompt
        }
        return callApi('post', '/api/v1/song', data)
    }

    return {
        getPromptTemplate,
        getMember,
        createSong
    }
})
