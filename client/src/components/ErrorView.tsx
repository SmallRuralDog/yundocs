import Taro, {Component} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import '../assets/styles/common.scss';
// @ts-ignore
import NetError from '../assets/images/net-error.png';
import FlexView from "./FlexView";
import {AtButton} from "taro-ui";

interface Interface {
  error: API.Error;
  onReload: () => void;
}

class ErrorView extends Component<Interface, {}> {

  onReload = () => {
    const {onReload} = this.props;

    onReload()
  };

  render() {
    return <FlexView justify='center' align='center' direction='column'>
      <Image src={NetError} mode='aspectFill' lazyLoad={true}
             style={{width: Taro.pxTransform(188 * 2), height: Taro.pxTransform(128 * 2)}} />
      <Text className='text-13 text-disable mt-15'>网络不可用，请检查网络后重试</Text>
      <View className='page-pd'>
        <AtButton size='small' onClick={this.onReload.bind(this)}>重新加载</AtButton>
      </View>
    </FlexView>

  }
}

export default ErrorView;
