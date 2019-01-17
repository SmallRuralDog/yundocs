import Taro, {Component} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import {AtRate, AtTag} from "taro-ui";
import FlexView from "../../components/FlexView";
import BookRow from "../../components/BookRow";
import SplitLine from "../../components/SplitLine";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import PageView from "../Page";
// @ts-ignore
import PlayIcon from '../../assets/images/play_icon.png';
// @ts-ignore
import PpjdrIcon from '../../assets/images/ppjdr_icon.png';


interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabSix extends Component<IProps, {}> {


  static defaultProps = {
    find: {
      voices: {}
    }
  } as IProps;

  render() {

    const {find: {voices: {page_list, rec_users, banner, init, error}}, loading, onReload} = this.props;

    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}>
      <View className={'tab-six'}>
        {banner && <View className='page-pd'>
          <Navigator url={'/pages/details'} className='p-10 mt-10 radius shadow-small'>
            <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={banner.cover}
                     title={`《${banner.title}》`}
                     desc={banner.desc}
                     titleSize={15}
                     renderMore={<FlexView align='center' className='text-desc text-12'>
                       <Text>{banner.user}</Text>
                       <SplitLine height={18} />
                       <Text>{banner.read_count}人在读</Text>
                     </FlexView>}
                     renderFooter={<FlexView align='flex-end' className='mb-5 mt-5'>
                       <AtRate value={banner.grade} size={13} /> <Text
                       className='text-default bold text-15 ml-5'
                       style={{lineHeight: Taro.pxTransform(30)}}>{banner.grade}</Text>
                     </FlexView>}
            />
          </Navigator>
        </View>}

        <View>
          <View className='page-pd'><Text className='text-20 bold text-default'>品牌解读人</Text></View>
          <View className='mt-10 mb-15 pt-15 pb-15'>
            <FlexView>
              {rec_users && rec_users.map((item, index) => {
                return index < 4 && <View className='flex-1'>
                  <FlexView key={index} direction='column' align='center'>
                    <BookCover image={item.avatar} width={100} ratio={5} borderRadius={50}>
                      <View className='ppjdr-icon'>
                        <BookCover image={PpjdrIcon} width={30} ratio={5} borderRadius={15} />
                      </View>
                    </BookCover>
                    <Text className='text-13 text-default bold line-1 mt-10'>{item.name}</Text>
                  </FlexView>
                </View>

              })}
            </FlexView>
          </View>
        </View>

        <View>
          <View className='page-pd'><Text className='text-20 bold text-default'>今日必读</Text></View>
          <View className=''>
            {page_list && page_list.map((item, index) => {
              return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
                <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.cover}
                         title={`《${item.title}》`}
                         desc={item.desc}
                         titleSize={15}
                         renderCoverChildren={
                           <View className='play-icon'>
                             <BookCover image={PlayIcon} width={60} ratio={5} borderRadius={30} />
                           </View>
                         }
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

export default TabSix;
