import { createStore } from 'vuex'


function initialState() {
  return {
    isDarkTheme: true
  }
}

export default createStore({
  state: initialState,
  mutations: {
    toogleTheme: state => state.isDarkTheme = !state.isDarkTheme
  },
  getters: {
    isDarkTheme: state => state.isDarkTheme
  },
  actions: {
    toogleTheme({ commit }) {
      commit("toogleTheme");
    }
  },
  modules: {
  }
})
