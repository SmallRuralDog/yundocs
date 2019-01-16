import Taro from '@tarojs/taro'
import qs from 'qs'
import {BASE_URL, HTTP_ERROR} from '../YdConfig';

/**
 * 检查http状态值
 * @param response
 * @returns {*}
 */
function checkHttpStatus(response: API.Response) {
  Taro.stopPullDownRefresh();

  Taro.hideNavigationBarLoading();

  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response.data
  } else if (response.statusCode == 400) {

  }
  const message = HTTP_ERROR[response.statusCode] || `ERROR CODE: ${response.statusCode}`
  const error: any = new Error(message);
  error.data = response.data;
  error.code = response.statusCode;
  throw  error
}

/**
 * 检查返回值是否正常
 */
function checkSuccess(data: any) {
  if (data instanceof ArrayBuffer && typeof data === 'string') {
    return data
  }

  if (
    typeof data.code === 'number' &&
    data.code === 200
  ) {
    return data
  }

  const error: any = new Error(data.message || '服务端返回异常');
  error.data = data;
  error.code = data.code;
  throw error
}

/**
 * 请求错误处理
 * @param error
 */
function throwError(error) {
  Taro.hideNavigationBarLoading();
  Taro.hideNavigationBarLoading();
  if (error.errMsg) {

    throw new Error('服务器正在维护中!')
  }
  throw error
}

export default {
  request(options: any, method?: string) {
    const {url} = options;
    Taro.showNavigationBarLoading();
    return Taro.request({
      ...options,
      method: method || 'GET',
      url: `${BASE_URL}${url}`,
      header: {
        ...options.header
      },
    }).then(checkHttpStatus)
      .then((res) => {
        return checkSuccess(res)
      })
      .catch(error => {
        throwError(error)
      })

  },
  get(options: { url: string, data?: object }) {
    return this.request({
      ...options
    })
  },
  post(options: any) {
    return this.request({
      ...options,
      data: qs.stringify(options.data)
    }, 'POST')
  }
}
