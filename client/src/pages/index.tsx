import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Navigator, Progress, Swiper, SwiperItem, Text, View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import '../assets/styles/index-page.scss'
import ProgressBar from "../components/ProgressBar";
import AvatarList from "../components/AvatarList";
import {AtIcon} from "taro-ui";
import YdConfig from "../YdConfig";
import PageView from "./Page";
import BookCover from "../components/BookCover";

interface IProps {
  home: IHomeStore;
  loading: boolean;
  dispatch: IDispatch;
}

interface IState {
  current: number;
}

@connect((store: IStore) => {
  const {loading, home} = store;
  return {
    home: home,
    loading: loading.effects['home/getIndex']
  } as IProps;
})
class IndexPage extends Component<IProps, IState> {
  config: PageConfig = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'

  };

  state = {
    current: 0
  } as IState;

  componentDidMount(): void {
    this.getData()
  }

  onPullDownRefresh() {
    this.getData()
  }

  getData = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/getIndex',
      callback: () => {
        this.setState({
          current: 0
        })
      }
    })
  };

  onChange = (event) => {
    this.setState({
      'current': event.detail.current
    })
  };

  onReload = ()=>{
    this.getData()
  }

  onItemClick = () => {
    Taro.navigateTo({
      url: '/pages/details'
    })
  };

  render() {
    const {loading, home: {search_tips, recommend_list, init, error}} = this.props;
    const {current} = this.state;
    const ListItems = recommend_list && recommend_list.map((item, index) => {
      return <SwiperItem key={index} className='swiper-item'>
        <View className={`ds-list-item ${index === 0 ? 'first' : index === recommend_list.length - 1 ? 'last' : 'center'}`}>
          <Navigator url={'/pages/details'} className='cover'>
            <BookCover image={item.cover} width={440} ratio={1} borderRadius={10} />
          </Navigator>
          <View className='info mt-15' onClick={this.onItemClick.bind(this)}>
            <View className='flex-c-sb'>
              <Text className='text-17 text-default bold line-1 title'>{item.title}</Text>
              <Text className='text-13 text-disable'>免费</Text>
            </View>
            <Text className='text-13 text-desc mt-10 line-2 desc'>{item.desc}</Text>
            <View className='mt-10 flex-c-sb'>
              <View className='flex-1 flex-s'>
                <ProgressBar width={item.progress} height={6} childrenPosition='left'
                             borderRadius={4}>
                  <View className='flex-c'>
                    <Text className='text-15 bold text-default'>{item.progress}</Text>
                    <Text className='ml-5 text-11 text-disable'>%</Text>
                  </View>

                </ProgressBar>
              </View>
              <View className='flex-1 flex-s flex-c-e ml-10' style={{height: Taro.pxTransform(60)}}>
                <AvatarList data={item.users} />
              </View>
            </View>
          </View>
        </View>
      </SwiperItem>
    });
    return <PageView
      loading={loading && !init}
      error={error}
      init={init}
      onReload={this.onReload.bind(this)}
    >
      {init && <View className='page index-page'>
        <View className='page-pd'>
          <View className='search-view '>
            <AtIcon prefixClass='icon' value='sousuo' className='ml-10 text-desc' size={18} />
            {search_tips && <Text className='text-desc text-15 ml-10'>{search_tips[0]}</Text>}
          </View>
        </View>
        <View className='daily-special'>
          <View className='page-pd'>
            <View className='ds-title'><Text className='text-default text-20'>每日推荐</Text></View>
            <View className='progress-view'>
              <Text className='number-text text-12 text-desc'><Text
                className='text-15 bold text-default'>{current + 1}</Text><Text
                className='ml-5 mr-5'>/</Text>{recommend_list.length}</Text>
              <View className='progress-bar'>
                <Progress percent={(current + 1) / recommend_list.length * 100} activeColor={YdConfig.color.primary}
                          strokeWidth={3}
                          backgroundColor='f7f7f7' active activeMode='forwards' />
              </View>
            </View>
          </View>
          <View className='mt-10 b-10'>
            <Swiper current={current} className='ds-list ' displayMultipleItems={1} nextMargin={Taro.pxTransform(240)}
                    skipHiddenItemLayout={true} onChange={this.onChange} duration={200}>
              {ListItems}
            </Swiper>
          </View>
        </View>
        <View className='page-pd' />
      </View>}
    </PageView>
  }
}


export default IndexPage
