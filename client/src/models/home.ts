import {getIndex} from "../services";

export default {
  namespace: 'home',
  state: {
    init: false,
    search_tips: [],
    recommend_list: []
  },
  effects: {
    //获取首页数据
    * getIndex(action: IEffectsAction, {call, put}) {
      const {callback} = action;
      try {
        const response: API.ResponseData = yield call(getIndex);
        console.log(response)
        yield put({
          type: 'save',
          payload: {
            init: true,
            ...response.data
          }
        });
        callback && callback(response)
      } catch (e) {
        yield put({
          type: 'save',
          payload: {
            error: e
          }
        });
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  },

}
