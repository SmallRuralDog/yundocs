import {getFindRecommend} from "../services";

export default {
  namespace: 'find',
  state: {
    recommend: {}
  },
  effects: {
    //获取发现页推荐数据
    * getRecommend(action: IEffectsAction, {call, put}) {
      const {callback} = action;
      try {
        const res: API.ResponseData = yield call(getFindRecommend);
        yield put({
          type: 'save',
          payload: {
            recommend: {
              init: true,
              ...res.data
            }
          }
        });
        callback && callback(res.code === 200)
      } catch (e) {
        //请求失败处理
        yield put({
          type: 'save',
          payload: {
            recommend: {
              error: e
            }
          }
        });
      }
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  }
}
