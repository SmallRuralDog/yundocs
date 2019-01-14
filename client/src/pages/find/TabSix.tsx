import Taro, {Component} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import {AtRate, AtTag} from "taro-ui";
import FlexView from "../../components/FlexView";
import BookRow from "../../components/BookRow";
import SplitLine from "../../components/SplitLine";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
// @ts-ignore
import PlayIcon from '../../assets/images/play_icon.png';
// @ts-ignore
import PpjdrIcon from '../../assets/images/ppjdr_icon.png';

class TabSix extends Component {
  render() {


    return <View className={'tab-six'}>

      {hot_item && <View className='page-pd'>
        <Navigator url={'/pages/details'} className='p-10 mt-10 radius shadow-small'>
          <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={hot_item.img}
                   title={`《${hot_item.title}》`}
                   desc={hot_item.desc}
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
      </View>}

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>品牌解读人</Text></View>
        <View className='mt-10 mb-15 pt-15 pb-15'>
          <FlexView>
            {users.map((item, index) => {
              return index < 4 && <View className='flex-1'>
                <FlexView key={index} direction='column' align='center'>
                  <BookCover image={item.avatar} width={100} ratio={5} borderRadius={50}>
                    <View className='ppjdr-icon'>
                      <BookCover image={PpjdrIcon} width={30} ratio={5} borderRadius={15} />
                    </View>
                  </BookCover>
                  <Text className='text-13 text-default bold line-1 mt-10'>{item.name}</Text>
                </FlexView>
              </View>

            })}
          </FlexView>
        </View>
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>今日必读</Text></View>
        <View className=''>
          {list.map((item, index) => {
            return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
              <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.img}
                       title={`《${item.title}》`}
                       desc={item.desc}
                       titleSize={15}
                       renderCoverChildren={
                         <View className='play-icon'>
                           <BookCover image={PlayIcon} width={60} ratio={5} borderRadius={30} />
                         </View>
                       }
                       renderMore={<View className='yd-tags'>
                         <AtTag size='small' className='yd-tag'>历史</AtTag>
                         <AtTag size='small' className='yd-tag'>管理学</AtTag>
                         <AtTag size='small' className='yd-tag'>商学</AtTag>
                       </View>}
                       renderFooter={<FlexView align='flex-end' justify={"space-between"} className='mt-5'>
                         <FlexView align='center' className='text-desc text-12'>
                           <Text>小小特工</Text>
                           <SplitLine height={18} />
                           <Text>368人在读</Text>
                         </FlexView>
                         <Text className='text-17 bold text-green' style={{lineHeight: 1}}>￥298</Text>
                       </FlexView>}
              />
            </Navigator>
          })}
        </View>
      </View>


    </View>
  }
}

const users = [
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/0DtUCTzj3GXcuDiaQe8kJ34WOmlQTeF0ZZ9N7Z6w21AUic7oicnGg3yB9U1lKicDiaEBBqHoyytHwlW8aylW9OZLcpQ/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WtWHuQTQ8havib5EfIPKWaoxGmY71XfpW3lSrl4WeichecuaTzBZ9mPcUrwjSHwzfMqsfQxI2Fa7f0wU3pLWKibdQ/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKxzTa1Q7anGvsCBo6EPyYTE118LAUDeldtm0hShsQFFb7fohdfzDQFFxYDLvDaZxiaJUT6HzYwNjg/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  },
  {
    avatar: 'https://wx.qlogo.cn/mmopen/vi_32/WV4jGu8iaAr26ib8wFyresPHiaTfNAjqSsoqfarILZQWnicyuXQKTwRXiaMg7OTZTZOaIgLqzcqUZFkqiaDpnravZ2Yw/132',
    name: '伊利亚特'
  }
];

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
const hot_item = list[0];
export default TabSix;
