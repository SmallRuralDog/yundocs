import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import classNames from 'classnames';
import {AtMessage} from 'taro-ui'
import FlexView from "../components/FlexView";
import '../assets/styles/common.scss';
import LoadingView from "../components/LoadingView";

interface Interface {
  //类
  className?: string;
  //头部布局
  renderHeader?:any;
  //底部布局
  renderFooter?:any;
  //显示加载视图
  loading?:boolean;
  //加载文字
  loadText?:string;
}

class PageView extends Component<Interface, {}> {




  render() {
    const {loading,loadText} = this.props;
    return <FlexView direction="column" className={classNames('page-view', this.props.className)}>
      <AtMessage />
      <View className='flex-s'>
        {this.props.renderHeader}
      </View>
      {!loading && this.props.children}
      {loading && <LoadingView content={loadText}/>}
      <View className='flex-s'>
        {this.props.renderFooter}
      </View>
    </FlexView>
  }
}

export default PageView;
