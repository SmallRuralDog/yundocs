import Taro, {Component} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import {AtRate} from "taro-ui";
import FlexView from "../../components/FlexView";
import BookRow from "../../components/BookRow";
import SplitLine from "../../components/SplitLine";
import PageView from "../Page";
import './find-tab-page.scss';

interface IProps {
  find: IFindStore;
  dispatch: IDispatch;
  loading: boolean;
  onReload: () => void;
}

class TabFive extends Component<IProps, {}> {
  static defaultProps = {
    find: {
      resources: {}
    }
  } as IProps;

  render() {
    const {find: {resources: {page_list, init, error}}, loading, onReload} = this.props;
    return <PageView
      init={init}
      error={error}
      className='page-view-tab'
      onReload={onReload}
      loading={loading}>
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
    </PageView>
  }
}


export default TabFive;
