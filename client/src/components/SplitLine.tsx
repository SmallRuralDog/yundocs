import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './styles/SplitLine.scss';

interface Interface {
  height: number;
  color?: string;
  margin?: number;
}

class SplitLine extends Component<Interface, {}> {
  render() {
    const {height, color, margin} = this.props;
    return <View className='split-line' style={{
      marginLeft: Taro.pxTransform(margin || 10),
      marginRight: Taro.pxTransform(margin || 10),
      background: color || '#f0f0f0',
      height: Taro.pxTransform(height)
    }} />
  }
}

export default SplitLine;
