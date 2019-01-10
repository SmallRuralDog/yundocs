import Taro, {Component} from "@tarojs/taro";
import {View, Image} from "@tarojs/components";
import './styles/AvatarList.scss';

// @ts-ignore
import IconMore from '../assets/images/icon_more.png';

class AvatarList extends Component {
  render() {
    return <View className={'avatar-list'}>
      <Image mode='aspectFill' className={'avatar-list-avatar'} src={'https://imgavater.ui.cn/avatar/4/0/9/8/118904.jpg'} />
      <Image className={'avatar-list-avatar more'} src={IconMore} />
    </View>
  }
}

export default AvatarList;
