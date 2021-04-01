<template>
  <div class="container">
    <div class="aboutContainer">
      <div class="aboutText">
        <h1>Welcome to My Recipe App</h1>
        <p>
          My Recipe App is a simple app where you can add and view your recipes.
          This project was built with Vue.js & Bootstrap, so that I can practice
          using those tools. :-)
        </p>
        <p>
          If you see any issues or bugs, please feel free to contact me at
          kbsniquer@gmail.com. Hope you enjoy adding & seeing your recipes!
        </p>
        <button class="btn" @click="goToAddRecipe">Let's Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  title: "Recipe App",
  methods: {
    goToAddRecipe: function() {
      this.$router.push("/add-recipe");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
.btn {
  margin-top: 1rem;
}
.aboutText {
  padding: 2rem;
}
.aboutContainer {
  background-color: #fcfcfc;
  color: #357266;
  padding-bottom: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
  margin: 0;
}
</style>
