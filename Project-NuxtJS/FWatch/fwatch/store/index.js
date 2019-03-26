
export const store = new Vuex.Store({
  state: {
    loading: false
  },
  actions: {
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  getters: {
    loading (state) {
      return state.loading
    }
  }
})
