import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Image, Text, View} from '@tarojs/components'
import {AtAvatar} from 'taro-ui'
import NavBar from "../components/NavBar";
import '../assets/styles/user-page.scss';
// @ts-ignore
import IconInvite from '../assets/images/icon_invite.png'
import PageView from "./Page";


class MyPage extends Component {
  config: PageConfig = {
    navigationBarTitleText: '我的',
    navigationStyle: 'custom',

  };


  render() {
    return <PageView>
      <View className='page user-page'
            style={{backgroundImage: `url(http://makefriends.bs2dl.yy.com/my_page_top_bg.png)`}}>
        <NavBar />
        <View className='flex-c page-pd'>
          <View className='flex-1 flex-column '>
            <Text className='bold text-24 mb-5 text-default line-1 username'>立即登录</Text>
            <Text className='text-13 text-desc line-1'>时光回头，当下最重要</Text>
          </View>
          <View className='pl-15 flex-s'>
            <AtAvatar circle={true} size='large' image={'https://imgavater.ui.cn/avatar/8/3/6/8/8638.jpg'} />
          </View>
          <View className='pl-10 flex-s'>
            <Text className='icon icon-right' style={{fontSize: Taro.pxTransform(32), color: '#d0d0d0'}} />
          </View>
        </View>

        <View className='number-nav flex-c-sb page-pd' style={{marginTop: Taro.pxTransform(40)}}>
          <View className='flex-column flex-c flex-s'>
            <View className='text-17 text-default'><Text className='bold'>24</Text><Text
              className='text-13 text-desc ml-5'>本</Text></View>
            <Text className='text-12 text-disable mt-5'>已读书籍</Text>
          </View>
          <View><Text style={{color: '#f7f7f7'}}>|</Text></View>
          <View className='flex-column flex-c  flex-s'>
            <View className='text-17 text-default'><Text className='bold'>83</Text><Text
              className='text-13 text-desc ml-5'>分钟</Text></View>
            <Text className='text-12 text-disable mt-5'>累计阅读</Text>
          </View>
          <View><Text style={{color: '#f7f7f7'}}>|</Text></View>
          <View className='flex-column flex-c  flex-s'>
            <View className='text-17 text-default'>
              <Text className='bold'>16</Text>
              <Text className='text-13 text-desc ml-5'>人</Text>
            </View>
            <Text className='text-12 text-disable mt-5'>我的关注</Text>
          </View>
        </View>

        <View className='page-pd'>
          <View className='flex-c-sb invite'>
            <Image mode='aspectFill' className='l-icon' src={IconInvite} />
            <Text className='text-13 bold'>邀请好友读书，获得反读书费</Text>
            <View className='r-btn'>
              <Text className='icon icon-right' style={{fontSize: Taro.pxTransform(24)}} />
            </View>
          </View>
        </View>

        <View className='page-pd'>
          <View className='flex-c-sb menu-list-item '>
            <View className='flex-c'>
              <Image mode='aspectFill'
                     className='l-icon'
                     src={'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'} />
              <Text className='text-15 ml-10 text-default'>阅读报告</Text>
            </View>
            <Text className='icon icon-right' />
          </View>
          <View className='flex-c-sb menu-list-item '>
            <View className='flex-c'>
              <Image mode='aspectFill'
                     className='l-icon'
                     src={'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'} />
              <Text className='text-15 ml-10 text-default'>收藏书单</Text>
            </View>
            <Text className='icon icon-right' />
          </View>
          <View className='flex-c-sb menu-list-item '>
            <View className='flex-c'>
              <Image mode='aspectFill'
                     className='l-icon'
                     src={'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'} />
              <Text className='text-15 ml-15 text-default'>好友排名</Text>
            </View>
            <Text className='icon icon-right' />
          </View>
        </View>

      </View>
    </PageView>
  }
}

export default MyPage
