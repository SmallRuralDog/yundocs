import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './styles/AvatarList.scss';

// @ts-ignore
import IconMore from '../assets/images/icon_more.png';
import _ from "lodash";

interface IProps {
  data: string[]
}

class AvatarList extends Component<IProps, {}> {
  render() {
    const { data } = this.props;
    return <View className={'avatar-list'}>
      {(data && _.isArray(data)) && data.map((item, index) => {
        return <Image key={index} mode='aspectFill' className={'avatar-list-avatar'} src={item} />
      })}
      <Image className={'avatar-list-avatar more'} src={IconMore} />
    </View>
  }
}

export default AvatarList;
