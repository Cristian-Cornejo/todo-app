<template>
  <form @submit.prevent="submit" ref="createTodoForm">
    <div class="create-input" :class="{ dark: isDarkTheme }">
      <div></div>
      <input
        :class="{ dark: isDarkTheme }"
        name="todo"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CreateInput",
  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
  methods: {
    ...mapActions(["createTodo"]),
    submit(e) {
      const { todo } = Object.fromEntries(new FormData(e.target));
      this.createTodo(todo);
      this.$refs.createTodoForm.reset();
    },
  },
};
</script>
<style scoped>
.create-input {
  display: flex;
  background-color: var(--primary-soft);
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 6px;
}
.create-input div {
  border: 1px solid var(--dark-grayish-blue);
  border-radius: 50%;
  width: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.13rem;
}

.create-input input {
  background-color: var(--primary-soft);
  outline: none;
  border: none;
  width: 100%;
  color: var(--secondary);
  font-size: 0.8rem;
}

.create-input input::placeholder {
  font-size: 0.8rem;
}

div + input {
  margin-left: 0.4rem;
}
</style>