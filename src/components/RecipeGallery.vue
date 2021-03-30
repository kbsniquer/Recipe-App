<template>
  <div class="container">
    <div class="recipe shadow-sm p-5 mt-5">
      <h1>Your Recipes</h1>
      <div
        class="card"
        v-for="(recipe, index) in this.$store.getters.recipes"
        :key="index + 1"
      >
        <h1 class="recipeTitle">
          {{ recipe.title }}
        </h1>
        <div class="row p-3">
          <div class="col-6">
            <div class="recipeTime">
              <i class="far fa-clock"></i>
              {{ recipe.time }}
            </div>
          </div>
          <div class="col-6">
            <div class="recipeCategory">
              <i class="fas fa-utensils"></i>
              {{ recipe.cat }}
            </div>
          </div>
        </div>
        <p class="recipeDesc">
          {{ recipe.desc }}
        </p>
        <ul class="recipeList">
          <li v-for="(ing, index) in recipe.ingredients" :key="index">
            {{ ing.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeGallery",
  title: "Recipe Gallery",
};
</script>

<style scoped>
.card {
  padding: 1rem;
  margin: 1rem;
}
.recipeTitle {
  font-size: 3rem;
}
.recipeTime {
  text-align: right;
}
.recipeCategory {
  text-align: left;
}
.recipeDesc {
  margin: 0 auto;
  width: 75%;
}
.recipeList {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
}
</style>
