<template>
  <div class="container">
    <div class="recipeContainer">
      <p class="emptyRecipeMsg" v-if="this.$store.getters.recipes.length === 0">
        {{ emptyRecipeMsg }}
      </p>
      <RecipeCard />
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default {
  name: "RecipeGallery",
  title: "Recipe Gallery",
  components: {
    RecipeCard,
  },
  data() {
    return {
      emptyRecipeMsg:
        "Uh oh! You don't have any recipes added yet.  Please go to ADD NEW RECIPE to add your first one today!",
    };
  },
};
</script>

<style scoped>
.recipeContainer {
  background-color: #fcfcfc;
  color: #357266;
}
.recipeContainer {
  border-radius: 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
  margin: 0;
}
.emptyRecipeMsg {
  margin: 0 auto;
  width: 75%;
  padding: 3rem;
  font-size: 1.5rem;
}
</style>
