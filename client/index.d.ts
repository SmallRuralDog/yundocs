interface ITab {
  name: string;
}
type BookCoverRatio = 1 | 2 | 3 | 4 | 5 | 6;

interface IStore {
  loading: {
    effects: string[]
  };
  common: ICommonStore;
  home: IHomeStore;
}
interface ICommonStore {

}
interface IHomeStore {
  search_tips: string[];
  recommend_list: IModel.Recommend[]
}

type IDispatch = (object: { type: string, payload?: object, callback?: (res: API.ResponseData) => void }) => void;

interface IEffectsAction {
  payload?: any;
  callback?: (res: API.ResponseData) => void;
}



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

declare namespace API {
  export interface Response {
    data: ResponseData,
    errMsg: string,
    statusCode: number,
    header: any
  }

  export interface ResponseData {
    code: number;
    data: any;
    status: string;
  }
}


