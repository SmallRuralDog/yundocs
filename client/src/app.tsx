import '@tarojs/async-await'
import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import Index from './pages/index'
import dva from './dva'
import models from './models/index'

import './app.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();


class App extends Component {

  config: Config = {
    pages: [

      'pages/index',
      'pages/find',
      'pages/bookmark',
      'pages/my',
      'pages/details',
      'pages/cart',
      'pages/recharge',


    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'


    },
    tabBar: {
      backgroundColor: '#ffffff',
      color: '#b3b3b3',
      selectedColor: '#0c17d8',
      list: [
        {
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './assets/images/tabbar-index.png',
          selectedIconPath: './assets/images/tabbar-index-select.png'
        },
        {
          pagePath: 'pages/find',
          text: '发现',
          iconPath: './assets/images/tabbar-find.png',
          selectedIconPath: './assets/images/tabbar-find-select.png'
        },
        {
          pagePath: 'pages/bookmark',
          text: '书签',
          iconPath: './assets/images/tabbar-bookmark.png',
          selectedIconPath: './assets/images/tabbar-bookmark-select.png'
        },
        {
          pagePath: 'pages/my',
          text: '我的',
          iconPath: './assets/images/tabbar-my.png',
          selectedIconPath: './assets/images/tabbar-my-select.png'
        }
      ]
    }
  };

  componentDidMount() {
    /*Taro.setTabBarBadge({
      index: 3,
      text: '100'
    })*/

    Taro.getNetworkType().then(res => {
      store.dispatch({
        type: 'common/save',
        payload: {
          isConnected: res.networkType != 'none',
          networkType: res.networkType
        }
      })
    });

    Taro.onNetworkStatusChange((res) => {

      store.dispatch({
        type: 'common/save',
        payload: {
          ...res
        }
      })
    })
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {

    // @ts-ignore
    return (<Provider store={store}><Index /></Provider>)
  }
}

Taro.render(<App />, document.getElementById('app'))
