import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hyrequest from './service'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

/**
 * 单独的请求拦截
hyrequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独的请求拦截')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独的响应成功')
      return res
    }
  }
})
 */

hyrequest.request({
  url: '/home/multidata',
  method: 'GET'
})
