import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import '../assets/styles/common.scss'
interface IProps {

}
interface IState {

}
class NavBar extends Component<IProps, IState> {
  render() {
    const { statusBarHeight } = Taro.getSystemInfoSync()
    return <View className='navbar' style={{ height: Taro.pxTransform(96), paddingTop: statusBarHeight + 'PX' }}>
      <View className='navbar-container'>{this.props.children}</View>
    </View>
  }
}
export default NavBar;

