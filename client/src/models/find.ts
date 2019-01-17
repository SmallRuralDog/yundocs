import {
  getFindBooks,
  getFindCourses,
  getFindDocs,
  getFindRecommend,
  getFindResources,
  getFindVoices
} from "../services";

export default {
  namespace: 'find',
  state: {
    recommend: {},
    books: {},
    docs: {},
    courses: {},
    resources: {},
    voices: {}
  },
  effects: {
    //获取发现页推荐数据
    * getRecommend(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const recommend = yield select((store: IStore) => store.find.recommend);
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
              ...recommend,
              error: e
            }
          }
        });
      }
    },
    //获取发现页图书数据
    * getBooks(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const books = yield select((store: IStore) => store.find.books);
      try {
        const res: API.ResponseData = yield call(getFindBooks);
        yield put({
          type: 'save',
          payload: {
            books: {
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
            books: {
              ...books,
              error: e
            }
          }
        });
      }
    },
    //获取发现页文档数据
    * getDocs(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const docs = yield select((store: IStore) => store.find.docs);
      try {
        const res: API.ResponseData = yield call(getFindDocs);
        yield put({
          type: 'save',
          payload: {
            docs: {
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
            docs: {
              ...docs,
              error: e
            }
          }
        });
      }
    },
    //获取发现页教程数据
    * getCourses(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const courses = yield select((store: IStore) => store.find.courses);
      try {
        const res: API.ResponseData = yield call(getFindCourses);
        yield put({
          type: 'save',
          payload: {
            courses: {
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
            courses: {
              ...courses,
              error: e
            }
          }
        });
      }
    },
    //获取发现页资源数据
    * getResources(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const resources = yield select((store: IStore) => store.find.resources);
      try {
        const res: API.ResponseData = yield call(getFindResources);
        yield put({
          type: 'save',
          payload: {
            resources: {
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
            resources: {
              ...resources,
              error: e
            }
          }
        });
      }
    },
    //获取发现页听书数据
    * getVoices(action: IEffectsAction, {call, put, select}) {
      const {callback} = action;
      const voices = yield select((store: IStore) => store.find.voices);
      try {
        const res: API.ResponseData = yield call(getFindVoices);
        yield put({
          type: 'save',
          payload: {
            voices: {
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
            voices: {
              ...voices,
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
