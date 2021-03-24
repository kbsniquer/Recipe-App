<template>
  <div class="container">
    <div class="recipe shadow-sm p-5 mt-5">
      <h1>Your Recipes</h1>
      <div class="card" v-for="(recipe, index) in recipes" :key="index + 1">
        <h1>
          {{ recipe.title }}
        </h1>
        <p>
          {{ recipe.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
