<template>
  <div class="container">
    <form @submit.prevent="addRecipe()" class="shadow-sm p-5">
      <h1>Create Your New Recipe</h1>
      <div class="form-group row p-2">
        <label for="recipeTitle" class="col-sm-3 col-form-label"
          >Recipe Title</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newRecipeTitle"
            placeholder="Enter a title for your recipe"
          />
        </div>
      </div>
      <div class="form-group row p-2">
        <label for="recipeDesc" class="col-sm-3 col-form-label"
          >Recipe Description</label
        >
        <div class="col-sm-9">
          <textarea
            class="form-control"
            name="recipeDesc"
            v-model="newRecipeDesc"
            cols="30"
            rows="5"
            placeholder="Enter a description for your recipe..."
          ></textarea>
        </div>
      </div>
      <div>
        <button class="btn btn-primary m-3" type="submit">Add Recipe</button>
      </div>
    </form>
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
^
<script>
export default {
  name: "Recipe",
  data: function() {
    return {
      recipes: [],
      newRecipeTitle: "",
      newRecipeDesc: "",
    };
  },
  methods: {
    addRecipe() {
      if (this.newRecipeTitle && this.newRecipeDesc) {
        this.recipes.push({
          title: this.newRecipeTitle,
          desc: this.newRecipeDesc,
        });
      } else {
        alert("Please enter a new recipe!");
      }

      // Clear out the input fields after submission
      this.newRecipeTitle = "";
      this.newRecipeDesc = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  padding-top: 50px;
}
</style>
