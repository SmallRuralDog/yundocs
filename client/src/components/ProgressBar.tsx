import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";


import '../assets/styles/common.scss'
import './styles/ProgressBar.scss'

interface IProps {
  width: number;
  height: number;
  borderRadius?: number;
  /**
   * 位置
   */
  childrenPosition?: 'left' | 'right' | 'center';
  backgroundColorLeft?: string;
  backgroundColorRight?: string;
}

class ProgressBar extends Component<IProps, {}> {
  render() {
    const {width, height, childrenPosition, borderRadius, backgroundColorLeft, backgroundColorRight} = this.props;
    return <View className={'progress_bar'}>
      <View
        className={`mb-5 ${childrenPosition ? childrenPosition == 'left' ? 'flex-c' : childrenPosition == 'right' ? 'flex-c-e' : 'flex-c-c' : 'flex-c'} `}>
        {this.props.children}
      </View>
      <View
        className={'progress_view'}
        style={{
          height: Taro.pxTransform(height),
          borderRadius: Taro.pxTransform(borderRadius || 0)
        }}
      >
        <View
          style={{
            width: width + '%', height: Taro.pxTransform(height),
            borderRadius: Taro.pxTransform(borderRadius || 0),
            background: `linear-gradient(to right, ${backgroundColorLeft || '#FFDB40'}, ${backgroundColorRight || '#ffb700'})`
          }}
          className='progress_line' />
      </View>
    </View>
  }
}

export default ProgressBar;
