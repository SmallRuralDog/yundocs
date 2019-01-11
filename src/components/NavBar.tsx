import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import '../assets/styles/common.scss'

interface IProps {
  //背景颜色
  background?: string;
}

interface IState {

}

/**
 * 自定义导航栏
 */
class NavBar extends Component<IProps, IState> {
  render() {
    const {background} = this.props;
    return <View className='nav-bar' style={{
      height: Taro.pxTransform(96),
      paddingTop: statusBarHeight + 'PX',
      background: background
    }}>
      <View className='nav-bar-container'>{this.props.children}</View>
    </View>
  }
}

const {statusBarHeight} = Taro.getSystemInfoSync();
export default NavBar;

