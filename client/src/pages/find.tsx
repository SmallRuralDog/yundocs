import Taro, {Component, PageConfig} from "@tarojs/taro";
import {View} from '@tarojs/components'
import Tabs from "../components/Tabs";
import TabRecommend from "./find/TabRecommend";
import TabTwo from "./find/TabTwo";
import TabThree from "./find/TabThree";
import TabFour from "./find/TabFour";
import TabFive from "./find/TabFive";
import TabSix from "./find/TabSix";
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
      recommend: {},
      books: {},
      docs: {},
      courses: {}
    }
  } as IProps;

  componentDidMount() {
    this.getData();
  }

  onTabClick = (tab: ITab, index: number) => {
    console.log(tab);
    this.setState({
      tabActive: index
    }, () => {
      this.getData();
    })
  };

  getData = (reload?: boolean) => {
    const {dispatch, find} = this.props;
    switch (this.state.tabActive) {
      case 0:
        (!find.recommend.init || reload) && dispatch({
          type: 'find/getRecommend'
        });
        break;
      case 1:
        (!find.books.init || reload) && dispatch({
          type: 'find/getBooks'
        });
        break;
      case 2:
        (!find.docs.init || reload) && dispatch({
          type: 'find/getDocs'
        });
        break;
      case 3:
        (!find.courses.init || reload) && dispatch({
          type: 'find/getCourses'
        });
        break;
      case 4:
        (!find.resources.init || reload) && dispatch({
          type: 'find/getResources'
        });
        break;
      case 5:
        (!find.voices.init || reload) && dispatch({
          type: 'find/getVoices'
        });
        break;
    }
  };

  getLoading = () => {
    const {loading, find} = this.props;
    switch (this.state.tabActive) {
      case 0:
        return loading['find/getRecommend'] && !find.recommend.init;
      case 1:
        return loading['find/getBooks'] && !find.books.init;
      case 2:
        return loading['find/getDocs'] && !find.docs.init;
      case 3:
        return loading['find/getCourses'] && !find.courses.init;
      case 4:
        return loading['find/getResources'] && !find.resources.init;
      case 5:
        return loading['find/getVoices'] && !find.voices.init;
    }
    return false;
  };

  onPullDownRefresh() {
    this.getData(true);
  }

  onReload = () => {
    this.getData(true)
  };

  render() {
    const {find, dispatch} = this.props;
    const {tabActive} = this.state;
    return <View className='page find-page tabs-page'>
      <Tabs
        tabs={[
          {name: '推荐'}, {name: '图书'}, {name: '文档'}, {name: '教程'}, {name: '资源'}, {name: '听书'}
        ]}
        active={tabActive}
        onClick={this.onTabClick}
      />

      {tabActive === 0 && <TabRecommend find={find} dispatch={dispatch} loading={this.getLoading()}
                                        onReload={this.onReload.bind(this)} />}
      {tabActive === 1 && <TabTwo find={find} dispatch={dispatch} loading={this.getLoading()}
                                  onReload={this.onReload.bind(this)} />}
      {tabActive === 2 && <TabThree find={find} dispatch={dispatch} loading={this.getLoading()}
                                    onReload={this.onReload.bind(this)} />}
      {tabActive === 3 && <TabFour find={find} dispatch={dispatch} loading={this.getLoading()}
                                   onReload={this.onReload.bind(this)} />}
      {tabActive === 4 && <TabFive find={find} dispatch={dispatch} loading={this.getLoading()}
                                   onReload={this.onReload.bind(this)} />}
      {tabActive === 5 && <TabSix find={find} dispatch={dispatch} loading={this.getLoading()}
                                  onReload={this.onReload.bind(this)}/>}

    </View>
  }
}

export default FindPage
