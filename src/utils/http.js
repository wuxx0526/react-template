import axios from 'axios'
import { projectConfig } from '../config'
import auth from './auth'
// import { obj2Str } from './utils'
// 创建axios实例

const http = axios.create({
    baseURL: projectConfig.apiUrl, // api的base_url
    timeout: 20000 // 请求超时时间
})

/* eslint-disabled */
// 请求拦截器
http.interceptors.request.use(config => {
        console.log(config)
        // config.url = config.url + obj2Str(config.data)
        config.headers.common['x-access-token'] = auth.getToken() || ''
        return config
    }, err => {
        return Promise.reject(err)
    }
)
// 响应拦截器
http.interceptors.response.use(res => {
        if (res.data.code === '2000') {
        }
        return res.data
    }, err => {
        return Promise.reject(err)
    }
)

export default http
