import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";

import './styles/BookCovers.scss';

interface IProps {
  //封面
  image: string;
  //封面宽，高度自动计算
  width: number;
  //封面圆角
  borderRadius?: number;
  shadow?: boolean;
  ratio: BookCoverRatio;
}

class BookCover extends Component<IProps, {}> {


  render() {
    const {image, width, borderRadius, shadow, ratio} = this.props;
    return <View className='book-covers'
                 style={{
                   width: Taro.pxTransform(width),
                   height: Taro.pxTransform(width * Ratios[ratio - 1])
                 }}>
      <Image style={{
        width: Taro.pxTransform(width),
        height: Taro.pxTransform(width * Ratios[ratio - 1]),
        borderRadius: Taro.pxTransform(borderRadius || 0),
        verticalAlign:'middle',
        display:'flex'
      }} className={`cover ${shadow && 'cover-box-shadow'}`}
             mode='aspectFill' src={image} />
      {this.props.children}
    </View>
  }
}

const Ratios: number[] = [297 / 210, 77 / 137, 128 / 280, 78 / 280, 1]; //高/宽

export default BookCover;
