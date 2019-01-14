import Taro, {Component} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import classNames from 'classnames'

import './styles/Grid.scss';

interface Interface {
  columnNum: number;
  onClick?: Function;
  data: any[];
  className?: string;
  bold?: boolean;
  iconSize?: number;
  fontSize?: number;
}

class Grid extends Component<Interface, {}> {


  render() {
    const {data, columnNum, bold, iconSize, fontSize} = this.props;

    const width = 750 / columnNum;

    const imageSize = Taro.pxTransform(width * (iconSize || 0.3));

    return (
      <View className={classNames('yd-grid', this.props.className)}>
        {data && data.map((item, index) => {
          return <View key={index} className='yd-grid-item' style={{width: Taro.pxTransform(width)}}>
            <Image className='icon' src={item.image} mode='aspectFill' style={{width: imageSize, height: imageSize}} />
            <Text className={classNames('name text-default mt-5', {'bold': bold})}
                  style={{fontSize: Taro.pxTransform(fontSize || 26)}}>{item.value}</Text>
          </View>
        })}
      </View>
    )
  }
}

export default Grid;
