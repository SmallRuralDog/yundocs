import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import classNames from 'classnames';
import {AtMessage} from 'taro-ui'
import FlexView from "../components/FlexView";
import '../assets/styles/common.scss';
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";

interface Interface {
  //类
  className?: string;
  //头部布局
  renderHeader?: any;
  //底部布局
  renderFooter?: any;
  //显示加载视图
  loading?: boolean;
  //加载文字
  loadText?: string;
  //异常
  error?: API.Error;
  //页面数据初始化，如果已经初始化，不会显示错误页面
  init: boolean;

  onReload: () => void;

}


class PageView extends Component<Interface, {}> {


  render() {
    const {loading, loadText, error, init, onReload} = this.props;
    return <FlexView direction="column" className={classNames('page-view', this.props.className)}>
      <AtMessage />
      <View className='flex-s'>
        {this.props.renderHeader}
      </View>
      {(!loading && init) && this.props.children}
      {loading && <LoadingView content={loadText} />}
      {(error && error.code >= 404 && !init) && <ErrorView error={error} onReload={onReload} />}
      <View className='flex-s'>
        {this.props.renderFooter}
      </View>
    </FlexView>
  }
}

export default PageView;
