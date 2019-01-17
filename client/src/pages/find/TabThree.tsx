import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import BookRow from "../../components/BookRow";
import {AtRate} from "taro-ui";
import FlexView from "../../components/FlexView";
import SplitLine from "../../components/SplitLine";
import PageView from "../Page";

interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabThree extends Component<IProps, {}> {
  static defaultProps = {
    find: {
      docs: {}
    }
  } as IProps;

  render() {
    const {find: {docs: {banner, rec_list, page_list, init, error}}, loading, onReload} = this.props;
    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}><View className='tab-three'>
      <View className='page-pd mt-5'>
        <BookCover borderRadius={10} image={banner.cover}
                   width={690} ratio={4} />
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>新书上架</Text></View>
        <View>
          <Swiper
            style={{height: Taro.pxTransform(330)}}
            displayMultipleItems={3}
            previousMargin={Taro.pxTransform(30)}
            nextMargin={Taro.pxTransform(60)}>
            {rec_list && rec_list.map((item, index) => {
              return <SwiperItem key={index}>
                <View style={{maxWidth: Taro.pxTransform(190)}}>
                  <Navigator key={index} url={'/pages/details'}>
                    <BookCover image={item.cover} width={190} ratio={1} borderRadius={5} />
                  </Navigator>
                  <View className='mt-5'>
                    <Text className='line-1 text-default text-15 bold'>{item.title}</Text>
                  </View>
                </View>
              </SwiperItem>
            })}
          </Swiper>
        </View>
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>今日必读</Text></View>
        <View className=''>
          {page_list && page_list.map((item, index) => {
            return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
              <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.cover}
                       title={`${item.title}`}
                       desc={item.desc}
                       titleSize={15}
                       renderMore={<FlexView align='center' className='text-desc text-12'>
                         <Text>{item.user}</Text>
                         <SplitLine height={18} />
                         <Text>{item.read_count}人在读</Text>
                       </FlexView>}
                       renderFooter={<FlexView align='flex-end' className='mb-5 mt-5'>
                         <AtRate value={item.grade} size={13} /> <Text className='text-default bold text-15 ml-5'
                                                                       style={{lineHeight: Taro.pxTransform(30)}}>{item.grade}</Text>
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

export default TabThree;
