import { createStore } from 'vuex'
import { addIfNotExist, removeByIndex } from "../utils/utils"


function initialState() {
  return {
    isDarkTheme: true,
    todos: [
      { task: "Jog around the park 3x", isCompleted: false },
      { task: "10 minutes meditation", isCompleted: false },
      { task: "Read for 1hour", isCompleted: false }]
  }
}

export default createStore({
  state: initialState,
  mutations: {
    toogleTheme: state => state.isDarkTheme = !state.isDarkTheme,
    createTodo: (state, todo) => state.todos = addIfNotExist(state.todos, todo),
    toogleComplete: (state, index) => state.todos[index] = { ...state.todos[index], isCompleted: !state.todos[index].isCompleted },
    deleteTodo: (state, index) => state.todos = removeByIndex(state.todos, index)
  },
  getters: {
    isDarkTheme: state => state.isDarkTheme,
    todos: state => state.todos
  },
  actions: {
    deleteTodo({ commit }, index) {
      commit("deleteTodo", index);
    },
    toogleComplete({ commit }, index) {
      commit("toogleComplete", index);
    },
    toogleTheme({ commit }) {
      commit("toogleTheme");
    },
    createTodo({ commit, state }, todo) {
      commit("createTodo", todo);
    }
  },
  modules: {
  }
})
