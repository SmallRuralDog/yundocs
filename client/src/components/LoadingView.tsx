import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtActivityIndicator} from 'taro-ui'
import '../assets/styles/common.scss';

interface Interface {
  content?:string;
  size?:number;
  color?:string;
}

class LoadingView extends Component<Interface,{}>{
  render() {
    return <View className='flex-1' style={{height:'100%'}}>
      <AtActivityIndicator mode='center' color={this.props.color} content={this.props.content} size={this.props.size}/>
    </View>
  }
}
export default LoadingView;
