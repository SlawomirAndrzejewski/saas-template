import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    user: {
      id: null,
      username: ''
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.user.id = localStorage.getItem('userid')
        state.user.username = localStorage.getItem('username')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.user.id = null
        state.user.username = ''
        state.isAuthenticated = false
      }
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
