import Taro, {Component, PageConfig} from "@tarojs/taro";
import {Navigator, Text, View} from "@tarojs/components";
import BookCover from "../components/BookCover";
import {AtAvatar, AtIcon, AtRate, AtTag} from "taro-ui";
import '../assets/styles/details-page.scss';
import PageView from "./Page";
import {getDetail} from "../services";


interface IState {
  book:IModel.Book,
  init:boolean;
  error:API.Error;
  loading:boolean;
  comments:{
    id:string;
    avatar:string;
    name:string;
    comment:string;
  }[]
}

class DetailsPage extends Component<{},IState> {
  config: PageConfig = {
    navigationBarTitleText: '书籍详情'
  };

  state  = {
    loading:true,
    init:false,
  } as IState;

  componentDidMount(): void {
    this.getData();
  }

  getData= async ()=>{
    try {
      const res = await getDetail();
      this.setState({
        init:true,
        book:res.data.book,
        loading:false,
        comments:res.data.comment_list
      })
    }catch (e) {
      this.setState({
        error:e,
        loading:false,
      })
    }
  };

  onReload = () => {
    this.setState({
      loading:true
    },()=>{
      this.getData();
    })

  };

  render() {
    const {book,init,error,loading,comments} = this.state;
    console.log(this.state)
    return <PageView
      init={init}
      loading={loading}
      error={error}
      onReload={this.onReload.bind(this)}
    >
      <View className='page details-page'>
        <View className='flex-column flex-c-c page-pd'>
          <BookCover borderRadius={10} width={250} shadow={true} ratio={1}
                     image={book.cover} />
          <View className='mt-10'>
            <Text className='text-17 bold text-default'>《{book.title}》</Text>
          </View>
          <View className='text-13 text-desc mt-5'>
            <Text>{book.user}</Text>
            <Text className='ml-10 mr-10' />
            <Text>{book.user}人在读</Text>
          </View>
          <View className='mt-10 yd-tags'>
            {book.tags.map((tag,index)=>{
              return <AtTag key={index} size='small' className='yd-tag'>{tag}</AtTag>
            })}

          </View>
          <View className='mt-10 flex-c-c'>
            <AtRate value={book.grade} size={15} />
            <Text className='text-15 bold text-default ml-15'>{book.grade}</Text>
          </View>
        </View>
        <View className='page-pd mt-15'>
          <View className='text-20 bold text-default'>
            <Text>书籍简介</Text>
          </View>
          <View className='text-13 text-default mt-10'>
            <Text>{book.desc}</Text>
          </View>
        </View>
        <View className='page-pd mt-15'>
          <View className='text-20 text-default flex-c-sb'>
            <Text className='bold'>用户评分{book.grade}</Text>
            <View className='text-13 text-desc flex-c-c'>
              <Text className='mr-5'>查看更多</Text>
              <AtIcon prefixClass='icon' value='right' size={12} />
            </View>
          </View>
          <View>
            {comments && comments.map((comment,index)=>{
              return <View className='flex mt-15' key={index}>
                <AtAvatar size='small' circle={true} text={'kao'} image={comment.avatar} />
                <View className='ml-10'>
                  <View className='flex-column'>
                    <Text className='text-13 text-default bold'>{comment.name}</Text>
                    <Text
                      className='text-13 text-desc mt-5'>{comment.comment}</Text>
                  </View>
                </View>
              </View>
            })}


          </View>
        </View>


        <View className='details-footer-bar'>
          <View className='add-bookmark flex-c-c'><AtIcon prefixClass='icon' value='plus' /><Text>加入书架</Text></View>
          <Navigator url={'/pages/cart'} className='action-btn flex-c-c'>
            <View><Text>开始听书</Text></View>
          </Navigator>
        </View>
      </View>
    </PageView>
  }
}

export default DetailsPage;
