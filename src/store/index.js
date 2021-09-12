import { createStore } from 'vuex'
import { addIfNotExist, removeTask, toggleCompleted } from "../utils/utils"


function initialState() {
  return {
    isDarkTheme: true,
    todos: [
      { task: "Jog around the park 3x", isCompleted: false },
      { task: "10 minutes meditation", isCompleted: false },
      { task: "Read for 1hour", isCompleted: false }],
    filteredTodos: [],
    filterOptions: {
      allSelected: true,
      activeSelected: false,
      completedSelected: false,
    }
  }
}

export default createStore({
  state: initialState,
  mutations: {
    toogleTheme: state => state.isDarkTheme = !state.isDarkTheme,
    createTodo: (state, todo) => state.todos = addIfNotExist(state.todos, todo),
    toogleComplete: (state, task) => state.todos = toggleCompleted(state.todos, task),
    deleteTodo: (state, task) => state.todos = removeTask(state.todos, task),
    clearCompleted: state => state.todos = state.todos.filter(t => t.isCompleted === false),
    changeFilter: (state, option) => {
      state.filterOptions = {
        allSelected: false,
        activeSelected: false,
        completedSelected: false,
      };
      state.filterOptions[option] = true;
    }
  },
  getters: {
    filterOptions: state => state.filterOptions,
    isDarkTheme: state => state.isDarkTheme,
    todos: state => {
      if (state.filterOptions.allSelected) {
        return state.todos
      }
      if (state.filterOptions.activeSelected) {
        return [...state.todos].filter(t => t.isCompleted === false)
      }
      if (state.filterOptions.completedSelected) {
        return [...state.todos].filter(t => t.isCompleted === true)
      }
    },
    itemsLeft: state => state.todos.filter(t => t.isCompleted === false).length
  },
  actions: {
    changeFilter({ commit }, option) {
      commit("changeFilter", option);
    },
    clearCompleted({ commit }) {
      commit("clearCompleted");
    },
    deleteTodo({ commit }, task) {
      commit("deleteTodo", task);
    },
    toogleComplete({ commit }, task) {
      commit("toogleComplete", task);
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
