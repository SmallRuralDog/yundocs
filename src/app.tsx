import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index',
      'pages/find',
      'pages/bookmark',
      'pages/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'


    },
    tabBar: {
      backgroundColor: '#ffffff',
      color:'#b3b3b3',
      selectedColor:'#0c17d8',
      list: [
        {
          pagePath: 'pages/index',
          text: '首页',
          iconPath:'./assets/images/tabbar-index.png',
          selectedIconPath:'./assets/images/tabbar-index-select.png'
        },
        {
          pagePath: 'pages/find',
          text: '发现',
          iconPath:'./assets/images/tabbar-find.png',
          selectedIconPath:'./assets/images/tabbar-find-select.png'
        },
        {
          pagePath: 'pages/bookmark',
          text: '书签',
          iconPath:'./assets/images/tabbar-bookmark.png',
          selectedIconPath:'./assets/images/tabbar-bookmark-select.png'
        },
        {
          pagePath: 'pages/my',
          text: '我的',
          iconPath:'./assets/images/tabbar-my.png',
          selectedIconPath:'./assets/images/tabbar-my-select.png'
        }
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
