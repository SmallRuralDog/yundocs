import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import '../assets/styles/common.scss';
import './styles/FlexView.scss';
import {CSSProperties} from "react";


interface IProps {
  //样式
  className?: string;
  align?: 'center' | 'baseline' | 'flex-end' | 'flex-start';
  justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
  direction?: 'row' | 'column';
  style?: string | CSSProperties;
}

class FlexView extends Component<IProps, {}> {


  render() {
    const {align, justify, direction, className} = this.props;
    return <View className={`flex-view ${className || ''}`}
                 style={{
                   alignItems: align || 'stretch',
                   justifyContent: justify || 'flex-start',
                   flexDirection: direction || 'row'
                 }}>{this.props.children}</View>
  }
}

export default FlexView;
