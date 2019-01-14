import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import BookRow from "../../components/BookRow";
import {AtRate} from "taro-ui";
import FlexView from "../../components/FlexView";
import SplitLine from "../../components/SplitLine";

class TabThree extends Component {
  render() {
    return <View className='tab-three'>
      <View className='page-pd'>
        <BookCover borderRadius={10} image={'https://img.alicdn.com/simba/img/TB1VOAwoAvoK1RjSZFNSuwxMVXa.jpg'}
                   width={690} ratio={4} />
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>新书上架</Text></View>
        <View>
          <Swiper
            style={{height: Taro.pxTransform(330)}}
            displayMultipleItems={3}
            previousMargin={Taro.pxTransform(30)}
            nextMargin={Taro.pxTransform(60)}>
            {xssj.map((item, index) => {
              return <SwiperItem key={index}>
                <View style={{maxWidth: Taro.pxTransform(190)}}>
                  <Navigator key={index} url={'/pages/details'}>
                    <BookCover image={item.img} width={190} ratio={1} borderRadius={5} />
                  </Navigator>
                  <View className='mt-5'>
                    <Text className='line-1 text-default text-15 bold'>{item.title}</Text>
                  </View>
                </View>
              </SwiperItem>
            })}
          </Swiper>
        </View>
      </View>


      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>今日必读</Text></View>
        <View className=''>
          {xssj.map((item, index) => {
            return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
              <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.img}
                       title={`${item.title}`}
                       desc={item.desc}
                       titleSize={15}
                       renderMore={<FlexView align='center' className='text-desc text-12'>
                         <Text>小小特工</Text>
                         <SplitLine height={18} />
                         <Text>368人在读</Text>
                       </FlexView>}
                       renderFooter={<FlexView align='flex-end' className='mb-5 mt-5'>
                         <AtRate value={4.6} size={13} /> <Text className='text-default bold text-15 ml-5'
                                                                style={{lineHeight: Taro.pxTransform(30)}}>4.6</Text>
                       </FlexView>}
              />
            </Navigator>
          })}
        </View>
      </View>

    </View>
  }
}

const xssj = [
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/1004608738/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/3602691/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/1004179514/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/1003354631/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/1009704712/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://bookcover.yuewen.com/qdbimg/349573/1003580078/300',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  }
];
export default TabThree;
