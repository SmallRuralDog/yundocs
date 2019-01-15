import Taro, {Component, PageConfig} from "@tarojs/taro";
import {View} from '@tarojs/components'
import Tabs from "../components/Tabs";
import TabRecommend from "./find/TabRecommend";
import TabTwo from "./find/TabTwo";
import TabThree from "./find/TabThree";
import TabFour from "./find/TabFour";
import TabFive from "./find/TabFive";
import TabSix from "./find/TabSix";
import PageView from "./Page";

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

  onTabClick = (tab: ITab, index: number) => {
    console.log(tab);
    this.setState({
      tabActive: index
    })
  };

  render() {
    const {tabActive} = this.state;
    return <PageView>
      <View className='page find-page tabs-page'>
        <Tabs
          tabs={[
            {name: '推荐'}, {name: '图书'}, {name: '文档'}, {name: '教程'}, {name: '资源'}, {name: '讨论'}
          ]}
          active={tabActive}
          onClick={this.onTabClick}
        />
        <View>
          {tabActive === 0 && <TabRecommend />}
          {tabActive === 1 && <TabTwo />}
          {tabActive === 2 && <TabThree />}
          {tabActive === 3 && <TabFour />}
          {tabActive === 4 && <TabFive />}
          {tabActive === 5 && <TabSix />}
        </View>
      </View>
    </PageView>
  }
}

export default FindPage
