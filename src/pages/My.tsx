import Taro, { Component, PageConfig } from "@tarojs/taro";
import { View } from '@tarojs/components'
class MyPage extends Component {
  config = {
    navigationBarTitleText: '我的'
  } as PageConfig
  render() {
    return <View></View>
  }
}

export default MyPage
