import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import BookCover from "../../components/BookCover";
import './find-tab-page.scss';
import Grid from "../../components/Grid";
import {AtAvatar, AtButton} from "taro-ui";
import FlexView from "../../components/FlexView";

class TabFour extends Component {
  render() {

    const Banners = banners.map((item, index) => {
      return <SwiperItem className='banner-item' key={index}>
        <Navigator url={'/pages/details'}>
          <BookCover image={item} width={690} ratio={3} borderRadius={10} shadow={false} />
        </Navigator>
      </SwiperItem>
    });
    return <View className='tab-four'>
      <View className='mt-10'>
        <Swiper className='banner' autoplay={true} indicatorDots={true} previousMargin={Taro.pxTransform(30)}
                indicatorColor={'#c4c4c4'} indicatorActiveColor={'#0c17d8'}>
          {Banners}
        </Swiper>
      </View>

      <View>
        <Grid
          columnNum={5}
          bold={true}
          iconSize={0.35}
          data={
            [
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+10.png',
                value: '经典必看'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+9.png',
                value: '每日推荐'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+8.png',
                value: '付费精品'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+7.png',
                value: '个人提升'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+6.png',
                value: '看书圈子'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+5.png',
                value: '商业财经'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+4.png',
                value: '历史人文'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+3.png',
                value: '生活时尚'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+2.png',
                value: '体育健康'
              },
              {
                image: 'http://makefriends.bs2dl.yy.com/%E7%BB%84+1.png',
                value: '直播课程'
              }
            ]
          } />
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>作者推荐</Text></View>
        <View>
          <Swiper
            style={{height: Taro.pxTransform(370)}}
            displayMultipleItems={2}
            previousMargin={Taro.pxTransform(30)}
            nextMargin={Taro.pxTransform(160)}>
            {data.map((item, index) => {
              return <SwiperItem key={index} style={{overflow:'unset'}} className='mt-15'>
                <View style={{maxWidth: Taro.pxTransform(250)}} className='shadow-small radius pt-15 pb-15'>
                  <FlexView direction='column' align='center'>
                    <AtAvatar circle={true} image={item.avatar} size='normal' />
                    <Text className='text-15 bold text-default mt-15'>{item.name}</Text>
                    <View className='mt-15'>
                      <AtButton type='secondary' circle={true} size='small'><Text className='iconfont icon-plus'/> 关注</AtButton>
                    </View>
                  </FlexView>
                </View>
              </SwiperItem>
            })}
          </Swiper>
        </View>
      </View>


    </View>
  }
}

const banners = [
  'http://n.sinaimg.cn/www/459/w890h369/20190107/mvX--hrfcctn5927153.png',
  'http://n.sinaimg.cn/book/204/w710h294/20181218/yPLQ-hqhtqsq1359585.jpg',
  'http://n.sinaimg.cn/www/459/w890h369/20181203/fNOY-hphsupx9270049.jpg'
];

const data = [
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/0DtUCTzj3GXcuDiaQe8kJ34WOmlQTeF0ZZ9N7Z6w21AUic7oicnGg3yB9U1lKicDiaEBBqHoyytHwlW8aylW9OZLcpQ/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WtWHuQTQ8havib5EfIPKWaoxGmY71XfpW3lSrl4WeichecuaTzBZ9mPcUrwjSHwzfMqsfQxI2Fa7f0wU3pLWKibdQ/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKxzTa1Q7anGvsCBo6EPyYTE118LAUDeldtm0hShsQFFb7fohdfzDQFFxYDLvDaZxiaJUT6HzYwNjg/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  }
];

export default TabFour;
