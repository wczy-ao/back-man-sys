import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors = config.interceptors

    // 实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有的请求响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有请求的拦截')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      // 这里可以对请求数据成功或者失败的封装
      (config) => {
        console.log('所有响应的拦截')
        return config.data
      },
      (err) => {
        return err
      }
    )
  }
  request(config: HYRequestConfig): void {
    // 单独的请求响应拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

// 根据不同的拦截放上不同的token
export default HYRequest
