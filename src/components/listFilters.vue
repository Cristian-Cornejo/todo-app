<template>
  <div class="list-filters" :class="{ dark: isDarkTheme }">
    <button
      @click="changeFilter('allSelected')"
      :class="{ selected: filterOptions.allSelected }"
    >
      All
    </button>
    <button
      @click="changeFilter('activeSelected')"
      :class="{ selected: filterOptions.activeSelected }"
    >
      Active
    </button>
    <button
      @click="changeFilter('completedSelected')"
      :class="{ selected: filterOptions.completedSelected }"
    >
      Completed
    </button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ListFilters",
  computed: {
    ...mapGetters(["isDarkTheme", "filterOptions"]),
  },
  methods: {
    ...mapActions(["changeFilter"]),
  },
};
</script>
<style scoped>
.list-filters {
  display: flex;
  background-color: var(--primary-soft);
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-radius: 6px;
}

.list-filters button {
  background: none;
  border: none;
  color: var(--dark-grayish-blue);
  font-size: 0.8rem;
  font-weight: 700;
}

.list-filters button.selected {
  color: var(--bright-blue);
}

button + button {
  margin-left: 1rem;
}
</style>