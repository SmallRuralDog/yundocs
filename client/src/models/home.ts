import { getIndex } from "../services/index";

export default {
  namespace: 'home',
  state: {
    search_tips: []
  },
  effects: {
    *getIndex(action: IEffectsAction, { select, call, put }) {
      const { callback } = action;
      const response: API.ResponseData = yield call(getIndex)
      yield put({
        type: 'save',
        payload: {
          ...response.data
        }
      })
      callback && callback(response)
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },

}
