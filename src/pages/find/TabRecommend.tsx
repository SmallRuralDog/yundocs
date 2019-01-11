import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import {AtGrid} from "taro-ui";
import BookCover from "../../components/BookCover";

class TabRecommend extends Component {

  componentDidMount() {
    console.log('12123');
  }

  render() {

    const Banners = banners.map((item, index) => {
      return <SwiperItem className='banner-item' key={index}>
        <Navigator url={'/pages/details'}>
          <BookCover image={item} width={690} ratio={3} borderRadius={10} shadow={true} />
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
        <AtGrid
          hasBorder={false}
          columnNum={4}
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

const banners = [
  'http://n.sinaimg.cn/www/459/w890h369/20190107/mvX--hrfcctn5927153.png',
  'http://n.sinaimg.cn/book/204/w710h294/20181218/yPLQ-hqhtqsq1359585.jpg',
  'http://n.sinaimg.cn/www/459/w890h369/20181203/fNOY-hphsupx9270049.jpg'
];

export default TabRecommend;

//280*128
