import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import Grid from "../../components/Grid";
import PageView from "../Page";

interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabRecommend extends Component<IProps, {}> {


  static defaultProps = {
    find: {
      recommend: {}
    }
  } as IProps;

  render() {
    const {find: {recommend: {slide_list, day_rec, init, error}}, loading, onReload} = this.props;
    const Banners = slide_list && slide_list.map((item, index) => {
      return <SwiperItem className='banner-item' key={index}>
        <Navigator url={'/pages/details'}>
          <BookCover image={item.cover} width={690} ratio={3} borderRadius={10} shadow={false} />
        </Navigator>
      </SwiperItem>
    });

    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}>
      <View className='tab-recommend'>

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
            {day_rec && day_rec.map((item, index) => {
              return <View key={index} className='flex-column flex-1 flex-s' style={{maxWidth: Taro.pxTransform(210)}}>
                <Navigator url={'/pages/details'}>
                  <BookCover borderRadius={10}
                             shadow={true}
                             ratio={1}
                             image={item.cover}
                             width={210} /></Navigator>
                <Text className='bold text-15 text-default line-1 mt-10'>{item.title}</Text>
                <Text className='text-13 text-disable line-1'>{item.desc}</Text>
              </View>
            })}


          </View>
        </View>

        <View className='page-pd'>
          <View><Text className='text-20 bold text-default'>猜你喜欢</Text></View>
        </View>

      </View>
    </PageView>
  }
}


export default TabRecommend;

