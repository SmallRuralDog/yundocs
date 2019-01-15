import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import BookCover from "../components/BookCover";
import {AtAvatar, AtIcon, AtRate, AtTag} from "taro-ui";
import '../assets/styles/details-page.scss';

class DetailsPage extends Component {
  config: PageConfig = {
    navigationBarTitleText: '书籍详情'
  };

  render() {
    return <View className='page details-page'>
      <View className='flex-column flex-c-c page-pd'>
        <BookCover borderRadius={10} width={250} shadow={true} ratio={1}
                   image={'http://makefriends.bs2dl.yy.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190110122111.png'} />
        <View className='mt-10'>
          <Text className='text-17 bold text-default'>《优秀的人不会输给情绪》</Text>
        </View>
        <View className='text-13 text-desc mt-5'>
          <Text>马歇尔·普鲁斯特</Text>
          <Text className='ml-10 mr-10' />
          <Text>368人在读</Text>
        </View>
        <View className='mt-10 yd-tags'>
          <AtTag size='small' className='mr-5 yd-tag'>历史</AtTag>
          <AtTag size='small' className='mr-5 yd-tag'>管理学</AtTag>
          <AtTag size='small' className='mr-5 yd-tag'>商学</AtTag>
          <AtTag size='small' className=' yd-tag'>理财顾问</AtTag>
        </View>
        <View className='mt-10 flex-c-c'>
          <AtRate value={4.6} size={15} />
          <Text className='text-15 bold text-default ml-15'>4.6</Text>
        </View>
      </View>
      <View className='page-pd mt-15'>
        <View className='text-20 bold text-default'>
          <Text>书籍简介</Text>
        </View>
        <View className='text-13 text-default mt-10'>
          <Text>关于情商，道理我们听得太多，可至今没有一种道理可以真正提升我们的能力。本书正是写给在受情绪困扰而无法获得有效沟通，无法让自己的能力得到充分发挥的年轻人</Text>
        </View>
      </View>
      <View className='page-pd mt-15'>
        <View className='text-20 text-default flex-c-sb'>
          <Text className='bold'>用户评分4.6</Text>
          <View className='text-13 text-desc flex-c-c'>
            <Text className='mr-5'>查看更多</Text>
            <AtIcon prefixClass='icon' value='right' size={12} />
          </View>
        </View>
        <View>
          <View className='flex mt-15'>
            <AtAvatar size='small' circle={true} text={'kao'} />
            <View className='ml-10'>
              <View className='flex-column'>
                <Text className='text-13 text-default bold'>努力的丁二酱</Text>
                <Text
                  className='text-13 text-desc mt-5'>注意用CMYK模式来做，分辨率至少要在300DPI以上，这要在一开始做文件就设置好，如果开始设置的很小，等到出非林前在强行改大分辨率的话，图片的精度不会变高的。</Text>
              </View>
            </View>
          </View>
          <View className='flex mt-15'>
            <AtAvatar size='small' circle={true} text={'kao'} />
            <View className='ml-10'>
              <View className='flex-column'>
                <Text className='text-13 text-default bold'>努力的丁二酱</Text>
                <Text
                  className='text-13 text-desc mt-5'>注意用CMYK模式来做，分辨率至少要在300DPI以上，这要在一开始做文件就设置好，如果开始设置的很小，等到出非林前在强行改大分辨率的话，图片的精度不会变高的。</Text>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View className='details-footer-bar'>
        <View className='add-bookmark flex-c-c'><AtIcon prefixClass='icon' value='plus' /><Text>加入书架</Text></View>
        <Navigator url={'/pages/cart'} className='action-btn flex-c-c'>
          <View><Text>开始听书</Text></View>
        </Navigator>
      </View>
    </View>
  }
}

export default DetailsPage;
