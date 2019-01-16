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
import {connect} from "@tarojs/redux";


interface IState {
  tabActive: number;
}

interface IProps {
  find: IFindStore;
  loading: string[];
  dispatch: IDispatch
}

@connect((store: IStore) => {
  const {loading, find} = store;
  return {
    find: find,
    loading: loading.effects
  } as IProps
})
class FindPage extends Component<IProps, IState> {
  config = {
    navigationBarTitleText: '发现',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  } as PageConfig;

  state: IState = {
    tabActive: 0
  };

  static defaultProps = {
    find: {
      recommend: {}
    }
  } as IProps;

  componentDidMount() {
    this.getData();
  }

  onTabClick = (tab: ITab, index: number) => {
    console.log(tab);
    this.setState({
      tabActive: index
    },()=>{
      this.getData();
    })
  };

  getData = (reload?:boolean) => {
    const {dispatch, find} = this.props;
    switch (this.state.tabActive) {
      case 0:
        (!find.recommend.init || reload) && dispatch({
          type: 'find/getRecommend'
        });
        break;
    }
  };

  getLoading = () => {
    const {loading, find} = this.props;
    switch (this.state.tabActive) {
      case 0:
        return loading['find/getRecommend'] && !find.recommend.init;
    }
  };

  onPullDownRefresh() {
    this.getData(true);
  }

  render() {
    const {find, dispatch} = this.props;
    const {tabActive} = this.state;
    return <PageView
      loading={this.getLoading()}
      renderHeader={
        <View>
          <Tabs
            tabs={[
              {name: '推荐'}, {name: '图书'}, {name: '文档'}, {name: '教程'}, {name: '资源'}, {name: '讨论'}
            ]}
            active={tabActive}
            onClick={this.onTabClick}
          />
        </View>
      }
    >
      <View className='page find-page tabs-page'>

        <View>
          {tabActive === 0 && <TabRecommend find={find} dispatch={dispatch} />}
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
