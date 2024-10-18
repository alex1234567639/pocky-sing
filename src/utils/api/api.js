import axios from './axios.js'
import { useCommonStore } from '/src/stores/common'
const showLog = useCommonStore().showLog

export const callApi = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const config = {
            headers: { 'accept': 'application/json' },
            method: method,
            url: url,
            data: data || null
        }
        axios(config).then((res) => {
            if (res.status === 200) {
                if (showLog) {
                    console.log(url)
                    console.log(res.data)
                }
                resolve(res.data)
            } else {
                reject(res.data)
                if (showLog) {
                    console.log(res.data)
                }
            }
        })
    })
}
