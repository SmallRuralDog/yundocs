import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";

interface IProps {
  find: IFindStore;
  dispatch: IDispatch
}

class TabRecommend extends Component<IProps, {}> {


  componentDidMount() {
   !this.props.find.recommend.init && this.props.dispatch({
      type: 'find/getRecommend'
    })
  }

  static defaultProps = {
    find: {
      recommend: {}
    }
  } as IProps;

  render() {
    const {find: {recommend: {slide_list}}} = this.props;
    const Banners = slide_list && slide_list.map((item, index) => {
      return <SwiperItem className='banner-item' key={index}>
        <Navigator url={'/pages/details'}>
          <BookCover image={item.cover} width={690} ratio={3} borderRadius={10} shadow={false} />
        </Navigator>
      </SwiperItem>
    });

    return <View className='tab-recommend'>

      <View className='mt-10'>
        <Swiper className='banner' autoplay={true} indicatorDots={true} previousMargin={Taro.pxTransform(30)}
                indicatorColor={'#c4c4c4'} indicatorActiveColor={'#0c17d8'}>
          {Banners}
        </Swiper>
      </View>

      <View>
        <Grid
          columnNum={4}
          bold={true}
          iconSize={0.5}
          data={
            [
              {
                image: 'http://makefriends.bs2dl.yy.com/%E4%B9%A6%E5%9F%8E.png',
                value: '书城'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E6%A6%9C%E5%8D%95.png',
                value: '榜单'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%AD%BE%E5%88%B0.png',
                value: '签到'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E5%88%86%E7%B1%BB.png',
                value: '分类'
              }
            ]
          } />
      </View>

      <View className='page-pd'>
        <View><Text className='text-20 bold text-default'>每日推荐</Text></View>
        <View className='mt-15 flex-c-sb'>
          <View className='flex-column flex-1 flex-s' style={{maxWidth: Taro.pxTransform(210)}}>
            <Navigator url={'/pages/details'}>
              <BookCover borderRadius={10}
                         shadow={true}
                         ratio={1}
                         image={'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122111.png'}
                         width={210} /></Navigator>
            <Text className='bold text-15 text-default line-1 mt-10'>母狮们的忏悔</Text>
            <Text className='text-13 text-disable line-1'>讲述一群慕斯大使馆打火机卡嘎手机号高大上</Text>
          </View>
          <View className='flex-column flex-1 flex-s' style={{maxWidth: Taro.pxTransform(210)}}>
            <Navigator url={'/pages/details'}>
              <BookCover borderRadius={10}
                         shadow={true}
                         ratio={1}
                         image={'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122146.png'}
                         width={210} /></Navigator>
            <Text className='bold text-15 text-default line-1 mt-10'>音乐随身听</Text>
            <Text className='text-13 text-disable line-1'>讲述一群慕斯大使馆打火机卡嘎手机号高大上</Text>
          </View>
          <View className='flex-column flex-1 flex-s' style={{maxWidth: Taro.pxTransform(210)}}>
            <Navigator url={'/pages/details'}>
              <BookCover borderRadius={10}
                         shadow={true}
                         ratio={1}
                         image={'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110114209.png'}
                         width={210} /></Navigator>
            <Text className='bold text-15 text-default line-1 mt-10'>两只小蜜蜂</Text>
            <Text className='text-13 text-disable line-1'>讲述一群慕斯大使馆打火机卡嘎手机号高大上</Text>
          </View>
        </View>
      </View>

      <View className='page-pd'>
        <View><Text className='text-20 bold text-default'>猜你喜欢</Text></View>
      </View>

    </View>
  }
}


export default TabRecommend;

