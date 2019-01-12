import Taro, {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import BookCover from "./BookCover";
import './styles/BookRow.scss'
import FlexView from "./FlexView";

interface Interface {
  //封面宽
  coverWidth: number;
  //封面比例索引
  coverRatio: BookCoverRatio;
  //显示封面阴影
  coverShadow?: boolean;
  //封面圆角大小
  coverBorderRadius?: number;
  //封面图片地址
  image: string;
  //封面附加布局
  renderCoverChildren?: any;
  //更多布局
  renderMore?: any;
  //底部布局
  renderFooter?: any;
  //标题
  title: string;
  //说明
  desc: string;
  //标题大小
  titleSize?: 13 | 15 | 17;
  //说明大小
  descSize?: 11 | 12 | 13 | 15 | 17;
}

class BookRow extends Component<Interface, {}> {
  render() {
    const {coverWidth, coverRatio, coverShadow, coverBorderRadius, image, title, desc, titleSize, descSize} = this.props
    return <FlexView>
      <View className='flex-s '>
        <BookCover image={image} width={coverWidth} ratio={coverRatio} shadow={coverShadow}
                   borderRadius={coverBorderRadius}>{this.props.renderCoverChildren}</BookCover>
      </View>
      <FlexView className='ml-10 flex-1' direction='column' justify='space-between'>
        <View>
          <Text className={`text-${titleSize || 15} text-default bold line-1`}>{title}</Text>
          <Text className={`text-${descSize || 12} text-disable line-2 mt-5`}>{desc}</Text>
        </View>
        <view>
          <View className=''>{this.props.renderMore}</View>
          <View className=''>{this.props.renderFooter}</View>
        </view>
      </FlexView>
    </FlexView>
  }
}

export default BookRow;
