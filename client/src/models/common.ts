export default {
  namespace: 'common',
  state: {
    access_token: '024b12087e6f0d2169c2665a6e127f9b'
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  },

}
