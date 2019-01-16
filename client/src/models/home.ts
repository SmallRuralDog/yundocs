import {getIndex} from "../services";

export default {
  namespace: 'home',
  state: {
    search_tips: [],
    recommend_list:[]
  },
  effects: {
    //获取首页数据
    * getIndex(action: IEffectsAction, {call, put}) {
      const {callback} = action;
      const response: API.ResponseData = yield call(getIndex)
      yield put({
        type: 'save',
        payload: {
          ...response.data
        }
      });
      callback && callback(response)
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  },

}
