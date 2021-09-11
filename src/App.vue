<template>
  <Todo class="dark" />
</template>

<script>
import Todo from "./components/todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
:root {
  font-family: "Josefin Sans", sans-serif;
  --primary: hsl(0, 0%, 98%);
  --secondary: hsl(236, 33%, 92%);
  --light-grayish-blue: hsl(233, 11%, 84%);
  --dark-grayish-blue: hsl(236, 9%, 61%);
  --very-dark-grayish-blue: hsl(235, 19%, 35%);
  --bright-blue: hsl(220, 98%, 61%);
  --check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
  font-size: 18px;
}

.dark {
  --primary: hsl(235, 21%, 11%);
  --secondary: hsl(235, 24%, 19%);
  --light-grayish-blue: hsl(234, 39%, 85%);
  --light-grayish-blue-hover: hsl(236, 33%, 92%);
  --dark-grayish-blue: hsl(234, 11%, 52%);
  --very-dark-grayish-blue: hsl(233, 14%, 35%);
  /* --Very-Dark-Grayish-Blue: hsl(237, 14%, 26%);*/
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
