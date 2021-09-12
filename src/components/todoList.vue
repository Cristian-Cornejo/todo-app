<template>
  <div class="todo-list" :class="{ dark: isDarkTheme }">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="todo" :class="{ checked: todo.isCompleted }">
          <button
            @click="toogleComplete(index)"
            class="check"
            :class="{ 'check-background': todo.isCompleted }"
          >
            <svg
              v-show="todo.isCompleted"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
            >
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </button>
          <p>
            {{ todo.task }}
          </p>
          <svg
            @click="deleteTodo(index)"
            class="cross"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
          >
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </div>
      </li>
      <li class="status">
        <p>{{ itemsLeft }} items left</p>
        <button @click="clearCompleted">Clear Completed</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TodoList",
  computed: {
    ...mapGetters(["isDarkTheme", "todos", "itemsLeft"]),
  },
  methods: {
    ...mapActions(["toogleComplete", "deleteTodo", "clearCompleted"]),
  },
};
</script>
<style scoped>
.todo-list ul {
  padding-inline-start: 0;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
}

.todo-list li {
  padding: 0.3rem 1rem;
  color: var(--secondary);
  display: flex;
  background-color: var(--primary-soft);
  align-items: center;
  font-size: 0.8rem;
}

.todo-list li.status {
  color: var(--dark-grayish-blue);
  display: flex;
  justify-content: flex-start;
}

.status button {
  margin-left: auto;
  background: none;
  border: none;
  color: var(--dark-grayish-blue);
}

.todo-list li:first-child {
  border-radius: 6px 6px 0 0;
}

.todo-list li:not(:last-child) {
  border-bottom: 1px solid var(--very-dark-grayish-blue);
}

.todo-list li:last-child {
  border-radius: 0 0 6px 6px;
}

.todo {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s;
}

.todo.checked {
  text-decoration: line-through;
  color: var(--dark-grayish-blue);
}

.cross {
  margin-left: auto;
}

.check {
  background: none;
  border: 1px solid var(--dark-grayish-blue);
  border-radius: 50%;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.13rem;
}

.check.check-background {
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.check + p {
  margin-left: 0.4rem;
}
</style>