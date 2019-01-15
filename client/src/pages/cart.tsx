import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import '../assets/styles/cart-page.scss';
import FlexView from "../components/FlexView";
import BookCover from "../components/BookCover";
import {AtButton, AtIcon} from "taro-ui";
import YdConfig from "../YdConfig";
import PageView from "./Page";

class CartPage extends Component {

  config: PageConfig = {
    navigationBarTitleText: '订单确认',
    backgroundColor: YdConfig.color.page_bg,
  };

  render() {
    return <PageView>
      <View className='page cart-page'>
        <View className='page-pd'>
          <FlexView className='white-bg mt-15 p-15 radius shadow-small' direction={"column"}>
            <FlexView>
              <BookCover
                image={'http://img11.360buyimg.com/da/jfs/t1/19437/13/3938/119291/5c2db39dE71514644/cb6b1092a27bffa6.jpg'}
                width={160} ratio={6} borderRadius={10} />
              <View className='ml-10'>
                <FlexView direction={"column"} justify={"space-between"}>
                  <Text className='text-15 bold text-default'>给年轻们的第一堂课</Text>
                  <Text className='text-13 bold text-warning'>199.00 云点</Text>
                </FlexView>
              </View>
            </FlexView>
            <View className='mt-15 mb-15 aui-border-b ' />
            <FlexView align={"center"} justify={"space-between"} className='text-13'>
              <Text className='bold text-15'>优惠券</Text>
              <FlexView align={"center"}>

                <Text className='text-disable'>无可用</Text>
                <AtIcon prefixClass='icon' value='right' size='13' className='ml-5 text-disable' />
              </FlexView>
            </FlexView>
          </FlexView>
        </View>

        <View>
          <View className='page-pd text-15 text-default mt-15'><Text>支付方式</Text></View>
          <View className='page-pd'>
            <FlexView className='white-bg p-15 radius' align={"center"} justify={"space-between"}>
              <View className='text-15 text-default bold'>
                <Text>余额</Text>
                <Text className='ml-5 text-danger'>863.00 云点</Text>
              </View>
              <AtIcon prefixClass='icon' value='check-circle-fill' size='20' color={YdConfig.color.primary} />
            </FlexView>
          </View>
        </View>

        <View className='page-pd text-12 text-disable'>
          <Text>· 购买后，可以在“已购”进行查看和使用</Text>
        </View>

        <View className='page-pd mb-15 position-bottom'>
          <AtButton type='primary' className='bold'>支付 199.00 云点</AtButton>
        </View>

      </View>
    </PageView>
  }
}

export default CartPage;
