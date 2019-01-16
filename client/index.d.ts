interface ITab {
  name: string;
}

//封面比例类型
type BookCoverRatio = 1 | 2 | 3 | 4 | 5 | 6;

/***********************************************************************************************************************/
/**
 * 全局状态
 */
interface IStore {
  loading: {
    effects: string[]
  };
  common: ICommonStore;
  home: IHomeStore;
  find: IFindStore;
}

/**
 * 公共状态
 */
interface ICommonStore {

}

/**
 * 首页状态
 */
interface IHomeStore {
  //搜索词
  search_tips: string[];
  //推荐列表
  recommend_list: IModel.Recommend[]
}

interface IFindStore {
  //发现推荐页
  recommend:{
    //数据初始化
    init:boolean;
    //幻灯片
    slide_list:{
      //ID
      id:string;
      //封面
      cover:string;
    }[],
    //每日推荐
    day_rec:{}[]
  }
}

/***********************************************************************************************************************/
/**
 * dva异步方法调用
 */
type IDispatch = (object: { type: string, payload?: object, callback?: (res: API.ResponseData) => void }) => void;

interface IEffectsAction {
  //参数
  payload?: any;
  //回调
  callback?: (res?: API.ResponseData | boolean) => void;
}

/***********************************************************************************************************************/
/**
 * 数据模型
 */
declare namespace IModel {
  //首页推荐
  export interface Recommend {
    id: string;
    title: string;
    desc: string;
    cover: string;
    progress: number;
    users: string[];
  }
}
/***********************************************************************************************************************/
declare namespace API {
  //http请求结果
  export interface Response {
    data: ResponseData,
    errMsg: string,
    statusCode: number,
    header: any
  }

  //API接口返回数据
  export interface ResponseData {
    code: number;
    data: any;
    status: string;
  }
}


