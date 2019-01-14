import Taro, {Component} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import {AtRate} from "taro-ui";
import FlexView from "../../components/FlexView";
import BookRow from "../../components/BookRow";
import SplitLine from "../../components/SplitLine";
import './find-tab-page.scss';

class TabFive extends Component {
  render() {
    return <View>
      <View className=''>
        {list.map((item, index) => {
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
  }
}

const list = [
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  },
  {
    img: 'https://manhua.qpic.cn/manhua_detail/0/16_18_02_2231ec0e8fd9d7c73b437d8213c32298.jpg/0',
    title: '狗与剪刀的正确用法',
    desc: '某一天，春海和人意外死在强盗手中，却由于身为书痴的执著而奇迹似地复活——以腊肠狗的外貌复活。春海和人正在为成为狗和无法看书烦恼时，眼前出现把剪刀当武器的虐待狂──夏野雾姬，一看就知道是个危险分子，可是她听得懂狗语，而且，她的真实身份竟是我最崇拜的作家秋山忍。'
  }
];

export default TabFive;
