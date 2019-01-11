import Taro, {Component} from "@tarojs/taro";
import {View, Text} from "@tarojs/components";
import './find-tab-page.scss';
import BookCover from "../../components/BookCover";

class TabTwo extends Component {
  render() {
    return <View className='tab-tow'>
      <View className='page-pd flex-c-sb flex-w'>
        {tjs.map((item, index) => {
          return <View className='mb-10 flex-s' key={index}>
            <BookCover borderRadius={10}
                       shadow={true}
                       image={item}
                       width={330} ratio={2} />
            <View className='mt-10'>
              <Text className='text-15 bold line-1 text-default'>想和你环游世界</Text>
            </View>
          </View>
        })}


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

export default TabTwo;
