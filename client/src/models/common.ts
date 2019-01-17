export default {
  namespace: 'common',
  state: {
    isConnected: true,
    networkType: ''
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    },
  },

}
