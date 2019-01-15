import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import FlexView from "../components/FlexView";
import PageView from "./Page";


class ResultPage extends Component {
  render() {
    return <PageView>
      <View className='page result-page'>
        <FlexView direction='column'>

        </FlexView>
      </View>
    </PageView>
  }
}

export default ResultPage;
