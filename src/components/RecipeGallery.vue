<template>
  <div class="container">
    <div class="recipeContainer">
      <div class="p-5" v-if="hasNotEnteredRecipe">
        <h1 class="emptyRecipeH1">
          {{ emptyRecipeH1 }}
        </h1>
        <p class="emptyRecipeMsg">
          {{ emptyRecipeMsg }}
        </p>
        <button class="btn" @click="goToAddRecipe">
          ADD NEW RECIPE
        </button>
      </div>
      <div v-if="this.$store.getters.recipes.length != 0">
        <h1>My Recipes</h1>
        <div class="overflow-auto">
          <RecipeCard />
        </div>
        <div>
          <p class="pt-5 scrollMore">Scroll for more</p>
          <p><i class="fa fa-angle-double-down"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default {
  name: "RecipeGallery",
  title: "Recipe Gallery",
  methods: {
    goToAddRecipe: function() {
      this.$router.push("/add-recipe");
    },
  },
  components: {
    RecipeCard,
  },
  data() {
    return {
      emptyRecipeH1: "Uh oh",
      emptyRecipeMsg:
        "You don't have any recipes added yet.  Please go to ADD NEW RECIPE to add your first one today!",
    };
  },
  computed: {
    hasNotEnteredRecipe: function() {
      return this.$store.getters.recipes.length === 0;
    },
  },
};
</script>

<style scoped>
.recipeContainer {
  background-color: #fcfcfc;
  color: #357266;
  padding-bottom: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
  margin: 0;
}
.emptyRecipeMsg {
  margin: 0 auto;
  width: 75%;
  padding-bottom: 2rem;
  font-size: 1.5rem;
}
.overflow-auto {
  max-height: 500px;
}
.scrollMore p {
  margin-top: 0;
}
</style>
