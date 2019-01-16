import {getFindRecommend} from "../services";

export default {
  namespace: 'find',
  state: {
    recommend:{

    }
  },
  effects: {
    * getRecommend(action: IEffectsAction, {call, put}) {
      const {callback} = action;
      const res: API.ResponseData = yield call(getFindRecommend);
      yield put({
        type: 'save',
        payload: {
          recommend: {
            init:true,
            ...res.data
          }
        }
      });

      callback && callback(res.code === 200)
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  }
}
