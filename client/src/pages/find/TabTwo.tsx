import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import BookRow from "../../components/BookRow";
import {AtRate, AtTag} from "taro-ui";
import FlexView from "../../components/FlexView";
import SplitLine from "../../components/SplitLine";
import PageView from "../Page";


interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabTwo extends Component<IProps, {}> {
  static defaultProps = {
    find: {
      books: {}
    }
  } as IProps;

  render() {
    const {find: {books: {banner_list, rec_list, page_list, init, error}}, loading, onReload} = this.props;
    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}>
      <View className='tab-tow'>
        <View className='page-pd flex-c-sb flex-w'>
          {banner_list && banner_list.map((item, index) => {
            return <View className='mb-10 flex-s' key={index}>
              <Navigator url={'/pages/details'}>
                <BookCover borderRadius={10}
                           image={item.cover}
                           width={330} ratio={2} />
              </Navigator>
              <View className='mt-10'>
                <Text className='text-15 bold line-1 text-default'>{item.title}</Text>
              </View>
            </View>
          })}
        </View>

        <View>
          <View className='page-pd'><Text className='text-20 bold text-default'>主编力荐</Text></View>
          <View>
            <Swiper style={{height: Taro.pxTransform(320)}} nextMargin={Taro.pxTransform(150)}>
              {rec_list && rec_list.map((item, index) => {
                return <SwiperItem key={index} style={{overflow: 'unset'}}>

                  <View className='ml-15 mt-15  shadow-small radius-small'>
                    <Navigator url={'/pages/details'} className='p-10 radius-small'>
                      <BookRow coverWidth={150} coverRatio={1} coverBorderRadius={5} image={item.cover}
                               title={`《${item.title}》`}
                               desc={item.desc}
                               titleSize={15}
                               renderMore={<FlexView align='center' className='text-desc text-12'>
                                 <Text>{item.user}</Text>
                                 <SplitLine height={18} />
                                 <Text>{item.read_count}人在读</Text>
                               </FlexView>}
                               renderFooter={<FlexView align='flex-end' className='mb-5 mt-5'>
                                 <AtRate value={item.grade} size={13} /> <Text
                                 className='text-default bold text-15 ml-5'
                                 style={{lineHeight: Taro.pxTransform(30)}}>{item.grade}</Text>
                               </FlexView>}
                      />
                    </Navigator>
                  </View>

                </SwiperItem>
              })}
            </Swiper>

          </View>
        </View>


        <View>
          <View className='page-pd'><Text className='text-20 bold text-default'>书籍专栏</Text></View>
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


export default TabTwo;
