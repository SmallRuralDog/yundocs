export default {
  color: {
    primary: '#3b86fd',
    primaryDeep: '#506db6',
    primaryChange: '#6aa9ff',
    success: '#3be88e',
    danger: '#f44f4d',
    warning: '#ead1a6',
    page_bg: '#f5f5f5'
  },
  tabHeight: 7

}

export const IS_DEV = process.env.NODE_ENV === 'development'

export const BASE_URL = IS_DEV ? 'https://www.easy-mock.com/mock/5c3e8daf686de60a403e2db1/api/' : 'https://www.easy-mock.com/mock/5c3e8daf686de60a403e2db1/api/'

export const HTTP_ERROR = {
  '400': '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  '401': '用户没有权限（令牌、用户名、密码错误）。',
  '403': '用户得到授权，但是访问是被禁止的。',
  '404': '请求不存在',
  '406': '请求的格式不可得。',
  '410': '请求的资源被永久删除，且不会再得到的。',
  '422': '当创建一个对象时，发生一个验证错误。',
  '500': '服务器发生错误，请检查服务器。',
  '502': '网关错误。',
  '503': '服务不可用，服务器暂时过载或维护。',
  '504': '网关超时。',
}
