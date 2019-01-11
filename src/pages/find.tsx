import Taro, {Component, PageConfig} from "@tarojs/taro";
import {View} from '@tarojs/components'
import Tabs from "../components/Tabs";
import TabRecommend from "./find/TabRecommend";
import TabTwo from "./find/TabTwo";

interface IProps {

}

interface IState {
  tabActive: number;
}

class FindPage extends Component<IProps, IState> {
  config = {
    navigationBarTitleText: '发现'
  } as PageConfig;

  state: IState = {
    tabActive: 0
  };

  onTabClick = (tab: Itab, index: number) => {
    console.log(tab);
    this.setState({
      tabActive: index
    })
  };

  render() {
    const {tabActive} = this.state
    return <View className='page find-page tabs-page'>
      <Tabs
        tabs={[
          {name: '推荐'}, {name: '图书'}, {name: '新书'}, {name: '小说'}, {name: '杂志'}, {name: '听书'}
        ]}
        active={tabActive}
        onClick={this.onTabClick}
      />
      <View>
        {tabActive === 0 && <TabRecommend />}
        {tabActive === 1 && <TabTwo />}
      </View>
    </View>
  }
}

export default FindPage
