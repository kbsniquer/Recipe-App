<template>
  <div class="container">
    <div class="recipeContainerLabel">
      <h1>
        <span>My Recipes</span>
        <a href="#/add-recipe"
          ><span
            class="disabledAddNew"
            style="background-color: #d35f2d; color: white;"
            >Add New Recipe</span
          ></a
        >
      </h1>
    </div>
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
.recipeContainer,
.recipeContainerLabel h1 span {
  background-color: #fcfcfc;
  color: #357266;
}
.recipeContainer {
  border-radius: 0 0.75rem 0.75rem 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
  margin: 0;
}
.recipeContainerLabel h1 span {
  padding: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
}
.recipeContainerLabel {
  text-align: left;
  text-transform: uppercase;
  display: inline;
}
.emptyRecipeMsg {
  margin: 0 auto;
  width: 75%;
  padding: 3rem;
  font-size: 1.5rem;
}
</style>
