import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import classNames from 'classnames';


class PageView extends Component<{
  className?: string;
}, {}> {
  render() {
    return <View className={classNames('page-view', this.props.className)}>
      {this.props.children}
      <View>

      </View>
    </View>
  }
}

export default PageView;
