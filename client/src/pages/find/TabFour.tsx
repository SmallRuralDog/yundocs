import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import BookCover from "../../components/BookCover";
import './find-tab-page.scss';
import Grid from "../../components/Grid";
import {AtAvatar, AtButton, AtTag} from "taro-ui";
import FlexView from "../../components/FlexView";
import PageView from "../Page";
import SplitLine from "../../components/SplitLine";
import BookRow from "../../components/BookRow";

interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabFour extends Component<IProps, {}> {
  static defaultProps = {
    find: {
      courses: {}
    }
  } as IProps;

  render() {
    const {find: {courses: {slide_list, rec_users, page_list, init, error}}, loading, onReload} = this.props;
    const Banners = slide_list ? slide_list.map((item, index) => {
      return <SwiperItem className='banner-item' key={index}>
        <Navigator url={'/pages/details'}>
          <BookCover image={item.cover} width={690} ratio={3} borderRadius={10} shadow={false} />
        </Navigator>
      </SwiperItem>
    }) : null;
    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}>
      <View className='tab-four'>
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
              {rec_users && rec_users.map((item, index) => {
                return <SwiperItem key={index} style={{overflow: 'unset'}} className='mt-15'>
                  <View style={{maxWidth: Taro.pxTransform(250)}} className='shadow-small radius pt-15 pb-15'>
                    <FlexView direction='column' align='center'>
                      <AtAvatar circle={true} image={item.avatar} size='normal' />
                      <Text className='text-15 bold text-default mt-15'>{item.name}</Text>
                      <View className='mt-15'>
                        <AtButton type='secondary' circle={true} size='small'><Text
                          className='iconfont icon-plus' /> 关注</AtButton>
                      </View>
                    </FlexView>
                  </View>
                </SwiperItem>
              })}
            </Swiper>
          </View>
        </View>

        <View className='mt-15'>
          <View className='page-pd'><Text className='text-20 bold text-default'>精品课程</Text></View>
          <View className=''>
            {page_list && page_list.map((item, index) => {
              return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
                <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.cover}
                         title={`${item.title}`}
                         desc={item.desc}
                         titleSize={15}
                         renderMore={<View className='yd-tags'>
                           {item.tags.map((tag, ti) => {
                             return <AtTag key={ti} size='small' className='yd-tag'>{tag}</AtTag>
                           })}
                         </View>}
                         renderFooter={<FlexView align='flex-end' justify={"space-between"} className='mt-5'>
                           <FlexView align='center' className='text-desc text-12'>
                             <Text>{item.user}</Text>
                             <SplitLine height={18} />
                             <Text>{item.read_count}人在读</Text>
                           </FlexView>
                           <Text className='text-17 bold text-green' style={{lineHeight: 1}}>￥{item.price}</Text>
                         </FlexView>}
                />
              </Navigator>
            })}
          </View>
        </View>

      </View>
    </PageView>
  }
}


export default TabFour;
