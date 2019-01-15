import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import FlexView from "../components/FlexView";
import '../assets/styles/recharge-page.scss';
import classNames from 'classnames';
import {AtButton} from "taro-ui";
import PageView from "./Page";

interface IProps {

}

interface IState {
  active: number;

}

class RechargePage extends Component<IProps, IState> {

  config: PageConfig = {
    navigationBarTitleText: '云点'
  };

  state: IState = {
    active: 0
  };

  onItemClick = (item, index) => {
    console.log(item);
    this.setState({
      active: index
    })
  };

  render() {
    const {active} = this.state;
    return <PageView>
      <View className='page recharge-page'>
        <View className='pt-15'>
          <FlexView justify={"center"} align='baseline' className='text-default bold'>
            <Text className='text-32  '>13.00</Text>
            <Text className='text-15  ml-10'>云点</Text>
          </FlexView>

          <FlexView justify='center' align={"center"} className='text-15 text-primary mt-15'>
            <Text>充值订单</Text> <Text className='aui-border-r ml-15 mr-15' style={{height: '10px'}} /> <Text>消费记录</Text>
          </FlexView>
        </View>

        <View className='aui-border-b' style={{height: '40Px'}} />

        <View className='mt-15'>
          <View className='page-pd'><Text className='text-20 bold text-default'>充值金额</Text></View>
          <View className='page-pd r-list'>
            <FlexView className='flex-w' justify={"space-between"}>
              {recharge_list.map((item, index) => {
                return <View
                  className={classNames('r-item flex-s radius-small mt-15', {'r-item-active': active === index})}
                  style={{width: Taro.pxTransform(210)}}
                  key={index}
                  onClick={this.onItemClick.bind(this, item, index)}
                >
                  <FlexView direction="column" align="center">
                    <View className='price text-20 bold'><Text>{item.price}</Text><Text
                      className='text-13 ml-5'>元</Text></View>

                    <Text className='value text-13 mt-5 text-desc'>{item.value}云点</Text>
                  </FlexView>
                </View>
              })}
            </FlexView>
          </View>
          <View className='page-pd mt-15'>
            <AtButton type='primary' loading={true} disabled={true}>确认支付</AtButton>
          </View>
        </View>

        <View className='aui-border-b ml-15 mr-15' style={{height: '20Px'}} />

        <View className='mt-15'>
          <View className='page-pd'><Text className='text-20 bold text-default'>提示</Text></View>
          <FlexView direction='column' className='page-pd text-13 text-desc'>
            <Text>1.充值金额不可自定义</Text>
            <Text className='mt-5'>2.云点为虚拟币，不可以提现和转增他人</Text>
          </FlexView>
        </View>

      </View>
    </PageView>
  }

}

const recharge_list = [
  {
    price: 6,
    value: 6
  },
  {
    price: 68,
    value: 68
  },
  {
    price: 88,
    value: 88
  },
  {
    price: 208,
    value: 208
  },
  {
    price: 338,
    value: 338
  },
  {
    price: 998,
    value: 998
  }
];

export default RechargePage;
