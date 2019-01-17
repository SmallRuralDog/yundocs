import Taro, {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import classNames from 'classnames';
import {AtIcon, AtMessage} from 'taro-ui'
import FlexView from "../components/FlexView";
import '../assets/styles/common.scss';
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";
import {connect} from "@tarojs/redux";

interface IProps {
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

  common?: ICommonStore

}

@connect((store: IStore) => {
  return {
    common: store.common
  } as IProps
})
class PageView extends Component<IProps, {}> {


  render() {
    const {loading, loadText, error, init, onReload, common} = this.props;
    return <FlexView direction="column" className={classNames('page-view', this.props.className)}>
      <AtMessage />
      {(init && common && !common.isConnected) &&
      <FlexView className='none-network text-15 text-default' align='center'>
        <AtIcon prefixClass='icon' value='info-circle-fill' size={20} color={'#F56364'} />
        <Text className='ml-10'>网络连接不可用</Text>
      </FlexView>}
      <View className='flex-s'>
        {this.props.renderHeader}
      </View>
      {(!loading && init) && this.props.children}
      {loading && <LoadingView content={loadText} />}
      {(error && error.code >= 404 && !init && !loading) && <ErrorView error={error} onReload={onReload} />}
      <View className='flex-s'>
        {this.props.renderFooter}
      </View>
    </FlexView>
  }
}

export default PageView;
