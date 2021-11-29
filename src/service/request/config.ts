// 配置不同环境的baseurl三种方法

// 第一种：手动更改

// const BASE_URL = 'http://onewanzzz/development'
// const BASE_NAME = 'onezzzdevelopment'

// const BASE_URL = 'http://onewanzzz/production'
// const BASE_NAME = 'onezzzproduction'

// const BASE_URL = 'http://onewanzzz/test'
// const BASE_NAME = 'onezzztest'

// 第二种：根据process.env.NODE_ENV判断
/**
 * 开发环境：process.env.NODE_ENV = development
  生产环境：process.env.NODE_ENV = production
  测试环境：process.env.NODE_ENV = test
 */

let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { BASE_URL, TIME_OUT }

// 第三种：通过vue cli中的环境变量来控制
/**新建三个文件
  .env.development
  .env.production
  .env.test
 *
 */

// 我们这里使用第二种
