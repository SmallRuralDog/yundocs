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
  /**
   * 1 ：297 / 210 书籍封面
   * 2 ：77 / 137横向封面
   * 3 ：128 / 280 幻灯片
   * 4 ：78 / 280 广告横幅
   * 5 ：1
   * 6: 80 /108
   *
   */
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
      <Image
        style={{
          width: Taro.pxTransform(width),
          height: Taro.pxTransform(width * Ratios[ratio - 1]),
          borderRadius: Taro.pxTransform(borderRadius || 0),
          verticalAlign: 'middle',
          display: 'flex'
        }}
        className={`cover ${shadow && 'cover-box-shadow'}`}
        mode='aspectFill'
        src={image}
        lazyLoad={true}
      />
      {this.props.children}
    </View>
  }
}

const Ratios: number[] = [297 / 210, 77 / 137, 128 / 280, 78 / 280, 1, 80 / 108]; //高/宽

export default BookCover;
