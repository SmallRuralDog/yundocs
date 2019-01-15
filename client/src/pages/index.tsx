import Taro, { Component, PageConfig } from "@tarojs/taro";
import { Image, Navigator, Progress, Swiper, SwiperItem, Text, View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import '../assets/styles/index-page.scss'
import ProgressBar from "../components/ProgressBar";
import AvatarList from "../components/AvatarList";
import { AtIcon } from "taro-ui";
import YdConfig from "../YdConfig";
import PageView from "./Page";

interface IProps {
  loading:boolean;
}
interface IState {

}

@connect((store: IStore) => {
  const {loading}= store;
  return {
    loading:loading.effects['x']
  }
})
class IndexPage extends Component<IProps, IState> {
  config: PageConfig = {
    navigationBarTitleText: '首页',
  };

  state = {
    current: 0
  };

  componentDidMount(): void {

  }

  onChange = (event) => {
    this.setState({
      'current': event.detail.current
    })
  };

  onItemClick = () => {
    Taro.navigateTo({
      url: '/pages/details'
    })
  };

  render() {
    const {loading} = this.props;
    const { current } = this.state;
    const ListItems = list.map((item, index) => {
      return <SwiperItem key={index} className='swiper-item'>
        <View className={`ds-list-item ${index === 0 ? 'first' : index === list.length - 1 ? 'last' : 'center'}`}>
          <View className='cover'>
            <Navigator url={'/pages/details'}>
              <Image mode='aspectFill' className='cover-img' src={item.img} lazyLoad />
            </Navigator>
          </View>
          <View className='info mt-15' onClick={this.onItemClick.bind(this)}>
            <View className='flex-c-sb'>
              <Text className='text-17 text-default bold line-1 title'>{item.title}</Text>
              <Text className='text-13 text-disable'>免费</Text>
            </View>
            <Text className='text-13 text-desc mt-10 line-2 desc'>{item.desc}</Text>
            <View className='mt-10 flex-c-sb'>
              <View className='flex-1 flex-s'>
                <ProgressBar width={50} height={6} childrenPosition='left'
                  borderRadius={4}>
                  <View className='flex-c'>
                    <Text className='text-15 bold text-default'>76</Text>
                    <Text className='ml-5 text-11 text-disable'>%</Text>
                  </View>

                </ProgressBar>
              </View>
              <View className='flex-1 flex-s flex-c-e ml-10' style={{ height: Taro.pxTransform(60) }}>
                <AvatarList />
              </View>
            </View>
          </View>
        </View>
      </SwiperItem>
    });
    return <PageView
      loading={loading}
      loadText={'加载中'}
    >
      <View className='page index-page'>
        <View className='page-pd'>
          <View className='search-view '>
            <AtIcon prefixClass='icon' value='sousuo' className='ml-10 text-desc' size={18} />
            <Text className='text-desc text-15 ml-10'>PHP从入门到放弃</Text>
          </View>
        </View>
        <View className='daily-special'>
          <View className='page-pd'>
            <View className='ds-title'><Text className='text-default text-20'>每日推荐</Text></View>
            <View className='progress-view'>
              <Text className='number-text text-12 text-desc'><Text
                className='text-15 bold text-default'>{current + 1}</Text><Text
                  className='ml-5 mr-5'>/</Text>{list.length}</Text>
              <View className='progress-bar'>
                <Progress percent={(current + 1) / list.length * 100} activeColor={YdConfig.color.primary}
                  strokeWidth={3}
                  backgroundColor='f7f7f7' active activeMode='forwards' />
              </View>

            </View>
          </View>
          <View className='mt-10 b-10'>
            <Swiper className='ds-list ' displayMultipleItems={1} nextMargin={Taro.pxTransform(240)}
              skipHiddenItemLayout={true} onChange={this.onChange} duration={200}>
              {ListItems}
            </Swiper>
          </View>
        </View>
        <View className='page-pd' />
      </View>
    </PageView>
  }
}

const list = [
  {
    img: 'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122111.png',
    title: '儿童植物大全',
    desc: '适合中小学儿童阅读的科普类图书，五大主题内容，十分全面的讲解了自然界的植物。'
  },
  {
    img: 'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122146.png',
    title: '儿童植物大全',
    desc: '适合中小学儿童阅读的科普类图书，五大主题内容，十分全面的讲解了自然界的植物。'
  },
  {
    img: 'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110114209.png',
    title: '儿童植物大全',
    desc: '适合中小学儿童阅读的科普类图书，五大主题内容，十分全面的讲解了自然界的植物。'
  },
  {
    img: 'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122416.png',
    title: '儿童植物大全',
    desc: '适合中小学儿童阅读的科普类图书，五大主题内容，十分全面的讲解了自然界的植物。'
  }];

export default IndexPage
