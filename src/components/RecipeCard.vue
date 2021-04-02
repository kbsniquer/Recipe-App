<template>
  <div class="recipe shadow-sm p-4">
    <div
      class="card"
      v-for="(recipe, index) in this.$store.getters.recipes"
      :key="index + 1"
    >
      <h1 class="recipeTitle">
        {{ recipe.title }}
      </h1>
      <div class="row">
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
      <h2>Recipe Ingredients</h2>
      <ul class="recipeList">
        <li v-for="(ing, index) in recipe.ingredients" :key="index">
          <i class="fas fa-check"></i> {{ ing.value }}
        </li>
      </ul>
      <h2>Recipe Instructions</h2>
      <p class="recipeDesc">
        {{ recipe.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
};
</script>

<style scoped>
h2 {
  color: #d35f2d;
}
.card {
  padding: 1rem;
  margin-bottom: 1rem;
}
.card:last-child {
  margin-bottom: 0;
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
.recipeTime,
.recipeTime {
  padding-bottom: 2rem;
}
.recipeDesc {
  margin: 0 auto;
  width: 75%;
  padding-bottom: 1rem;
}
.recipeList {
  display: inline-block;
  list-style-type: none;
  padding-right: 20px;
  column-count: 2;
}
</style>
