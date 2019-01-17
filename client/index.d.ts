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
  //当前是否有网络连接
  isConnected: boolean;
  //网络类型
  networkType: 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none';
}

/**
 * 首页状态
 */
interface IHomeStore {
  //数据初始化
  init: boolean;
  error: API.Error;
  //搜索词
  search_tips: string[];
  //推荐列表
  recommend_list: IModel.Recommend[]
}

interface IFindStore {

  //发现推荐页
  recommend: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //幻灯片
    slide_list: {
      //ID
      id: string;
      //封面
      cover: string;
    }[],
    //每日推荐
    day_rec: {
      id: string;
      title: string;
      desc: string;
      cover: string;
    }[]
  };
  books: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //
    banner_list: {
      id: string;
      title: string;
      cover: string;
    }[];
    //推荐列表
    rec_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      user: string;
      grade: number;
    }[];
    //分页列表
    page_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      tags: string[];
      user: string;
      price: number;
      grade: number;
    }[]
  },
  docs: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //
    banner: {
      id: string;
      title: string;
      cover: string;
    };
    //推荐列表
    rec_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      user: string;
      grade: number;
    }[];
    //分页列表
    page_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      tags: string[];
      user: string;
      price: number;
      grade: number;
    }[]
  },
  courses: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //
    slide_list: {
      id: string;
      title: string;
      cover: string;
    }[];
    //推荐列表
    rec_users: {
      id: string;
      avatar:string;
      name:string;
    }[];
    //分页列表
    page_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      tags: string[];
      user: string;
      price: number;
      grade: number;
    }[]
  },
  resources: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //
    banner: {
      id: string;
      title: string;
      cover: string;
    };
    //推荐列表
    rec_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      user: string;
      grade: number;
    }[];
    //分页列表
    page_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      tags: string[];
      user: string;
      price: number;
      grade: number;
    }[]
  },
  voices: {
    //数据初始化
    init: boolean;
    error: API.Error;
    //
    banner: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      user: string;
      grade: number;
    };
    //推荐列表
    rec_users: {
      id: string;
      avatar:string;
      name:string;
    }[];
    //分页列表
    page_list: {
      id: string;
      title: string;
      desc: string;
      cover: string;
      read_count: number;
      tags: string[];
      user: string;
      price: number;
      grade: number;
    }[]
  },
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

  export interface Book
  {
    id: string;
    title: string;
    desc: string;
    cover: string;
    read_count: number;
    tags: string[];
    user: string;
    price: number;
    grade: number;
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

  export interface Error extends ErrorConstructor {
    code: number;
    text: string;
    data: any;
    status: string;
  }
}


