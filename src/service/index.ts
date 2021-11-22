import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 拦截
  interceptors: {
    requestInterceptor: (config) => {
      // const token = ''
      // if (token) {
      //   config.headers = token
      // }
      console.log('请求成功')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败')
    },
    responseInterceptor: (res) => {
      console.log('响应成功')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败')
    }
  }
})

export default hyrequest
