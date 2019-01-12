import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import '../assets/styles/common.scss';
import './styles/FlexView.scss';

interface Interface {
  //样式
  className?: string;
  align?: 'center' | 'baseline' | 'flex-end' | 'flex-start',
  justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start',
  direction?: 'row' | 'column'
}

class FlexView extends Component<Interface, {}> {


  render() {
    const {align, justify, direction, className} = this.props;
    return <View className={`flex-view ${className || null}`}
                 style={{
                   alignItems: align || 'stretch',
                   justifyContent: justify || 'flex-start',
                   flexDirection: direction || 'row'
                 }}>{this.props.children}</View>
  }
}

export default FlexView;
