import Taro, {Component, PageConfig} from "@tarojs/taro";
import {View} from '@tarojs/components'
import Tabs from "../components/Tabs";
import PageView from "./Page";

interface IProps {

}

interface IState {
  tabActive: number;
}

class BookmarkPage extends Component<IProps, IState> {
  config = {
    navigationBarTitleText: '书签'
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
      <View>
        <Tabs
          tabs={[
            {name: '阅读记录'}, {name: '我的关注'}, {name: '电子书'}, {name: '订阅专栏'}
          ]}
          active={tabActive}
          onClick={this.onTabClick}
        />
      </View>
    </PageView>
  }
}

export default BookmarkPage
