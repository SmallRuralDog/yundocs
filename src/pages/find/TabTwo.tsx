import Taro, {Component} from "@tarojs/taro";
import {Navigator, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";
import BookRow from "../../components/BookRow";
import {AtRate, AtTag} from "taro-ui";
import FlexView from "../../components/FlexView";
import SplitLine from "../../components/SplitLine";

class TabTwo extends Component {
  render() {
    return <View className='tab-tow'>
      <View className='page-pd flex-c-sb flex-w'>
        {tjs.map((item, index) => {
          return <View className='mb-10 flex-s' key={index}>
            <Navigator url={'/pages/details'}>
              <BookCover borderRadius={10}
                         image={item}
                         width={330} ratio={2} />
            </Navigator>
            <View className='mt-10'>
              <Text className='text-15 bold line-1 text-default'>想和你环游世界</Text>
            </View>
          </View>
        })}
      </View>

      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>主编力荐</Text></View>
        <View>
          <Swiper style={{height: Taro.pxTransform(320)}} nextMargin={Taro.pxTransform(150)}>
            {zblj.map((item, index) => {
              return <SwiperItem key={index} style={{overflow: 'unset'}}>

                <View className='ml-15 mt-15  shadow-small radius'>
                  <Navigator url={'/pages/details'} className='p-10 radius'>
                    <BookRow coverWidth={150} coverRatio={1} coverBorderRadius={5} image={item.img}
                             title={`《${item.title}》`}
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
                </View>

              </SwiperItem>
            })}
          </Swiper>

        </View>
      </View>


      <View>
        <View className='page-pd'><Text className='text-20 bold text-default'>书籍专栏</Text></View>
        <View className=''>
          {zblj.map((item, index) => {
            return <Navigator key={index} url={'/pages/details'} className='pl-15 pr-15 pb-10 pt-10'>
              <BookRow coverWidth={170} coverRatio={1} coverBorderRadius={5} image={item.img}
                       title={`${item.title}`}
                       desc={item.desc}
                       titleSize={15}
                       renderMore={<View className='yd-tags'>
                         <AtTag size='small' className='yd-tag'>历史</AtTag>
                         <AtTag size='small' className='yd-tag ml-5'>管理学</AtTag>
                         <AtTag size='small' className='yd-tag ml-5'>商学</AtTag>
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


const tjs = [
  'http://img11.360buyimg.com/da/jfs/t1/19437/13/3938/119291/5c2db39dE71514644/cb6b1092a27bffa6.jpg',
  'http://img10.360buyimg.com/da/jfs/t1/23969/12/4000/102224/5c2db54eE0cc297e2/fa5a2a4274b13c53.jpg',
  'http://img30.360buyimg.com/da/jfs/t1/18488/22/4181/197483/5c2f041dEeba8d934/b470a9198aa5617b.jpg',
  'http://img30.360buyimg.com/da/jfs/t1/23743/40/3956/175106/5c2c8484Ec6ebe7db/7847463b2f6a1efa.jpg'

];

const zblj = [
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

export default TabTwo;
