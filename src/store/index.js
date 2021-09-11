import { createStore } from 'vuex'
import { addIfNotExist } from "../utils/utils"


function initialState() {
  return {
    isDarkTheme: true,
    todos: []
  }
}

export default createStore({
  state: initialState,
  mutations: {
    toogleTheme: state => state.isDarkTheme = !state.isDarkTheme,
    createTodo: (state, todo) => addIfNotExist(state.todos, todo)
  },
  getters: {
    isDarkTheme: state => state.isDarkTheme,
    todos: state => state.todos
  },
  actions: {
    toogleTheme({ commit }) {
      commit("toogleTheme");
    },
    createTodo({ commit }, todo) {
      commit("createTodo", todo);
    }
  },
  modules: {
  }
})
