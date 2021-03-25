<template>
  <div class="container">
    <div class="recipe shadow-sm p-5 mt-5">
      <h1>Your Recipes</h1>
      <div
        class="card"
        v-for="(recipe, index) in this.$store.getters.recipes"
        :key="index + 1"
      >
        <h1>
          {{ recipe.title }}
        </h1>
        <p>
          {{ recipe.desc }}
        </p>
        <p>
          {{ recipe.time }}
        </p>
        <p>
          {{ recipe.cat }}
        </p>
        <ul>
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
};
</script>

<style scoped></style>
