<template>
  <div class="container">
    <form @submit.prevent="addRecipe()" class="p-3">
      <h1>Add New Recipe</h1>
      <!-- Recipe title form group with label & input -->
      <div class="form-row p-2">
        <div class="form-group col-md-12">
          <label for="recipeTitle" class="control-label">Recipe Title</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              v-model="newRecipeTitle"
              placeholder="Enter a title for your recipe"
            />
          </div>
        </div>
      </div>
      <!-- Row with dropdowns for types of recipes & cook times -->
      <div class="form-row-dropdowns">
        <label for="recipeCookTimeDropdown">Cook Time</label>
        <select name="recipeCookTimeDropdown" v-model="newRecipeTime">
          <option
            class="dropdown-item"
            v-for="(time, index) in recipeCookTimes[0]"
            :key="index"
            >{{ time }}</option
          >
        </select>

        <label for="recipeCookTimeDropdown">Recipe Category</label>
        <select name="recipeCategoryDropdown" v-model="newRecipeCat">
          <option
            class="dropdown-item"
            v-for="(category, index) in recipeCategories[0]"
            :key="index"
            >{{ category }}</option
          >
        </select>
      </div>
      <!-- Recipe ingredients text area, ingredients separated by comma for gallery ul -->
      <div class="form-row p-2">
        <div class="form-group col-md-12">
          <label for="recipeIngredients" class="control-label"
            >Recipe Ingredients</label
          >
          <div class="col-sm-12">
            <textarea
              class="form-control"
              name="recipeDesc"
              v-model="newRecipeIngredients"
              cols="30"
              rows="2"
              placeholder="Enter recipe ingredients separated by commas..."
            ></textarea>
          </div>
        </div>
      </div>
      <!-- Recipe description text area -->
      <div class="form-row p-2">
        <div class="form-group col-md-12">
          <label for="recipeTitle" class="control-label"
            >Recipe Description</label
          >
          <div class="col-sm-12">
            <textarea
              class="form-control"
              name="recipeDesc"
              v-model="newRecipeDesc"
              cols="30"
              rows="4"
              placeholder="Enter a description for your recipe..."
            ></textarea>
          </div>
        </div>
      </div>
      <!-- Submit new recipe button -->
      <div>
        <button class="btn btn-primary m-3" type="submit">
          Add New Recipe
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RecipeForm",
  data: function() {
    return {
      recipes: [],
      recipeCategories: [
        {
          breakfast: "Breakfast",
          lunch: "Lunch",
          dinner: "Dinner",
          snack: "Snack",
        },
      ],
      recipeCookTimes: [
        {
          zeroToFifteen: "0 - 15 mins",
          fifteenToThirty: "15 - 30 mins",
          thirtyToFourtyFive: "30 - 45 mins",
          fourtyFiveToHour: "45 mins - 1hr",
          hourPlus: "1hr or more",
        },
      ],
      recipeIngredients: [],
      newRecipeTitle: "",
      newRecipeTime: "",
      newRecipeCat: "",
      newRecipeDesc: "",
    };
  },
  methods: {
    addRecipe() {
      if (this.newRecipeTitle && this.newRecipeDesc) {
        let newRecipe = {
          title: this.newRecipeTitle,
          time: this.newRecipeTime,
          cat: this.newRecipeCat,
          desc: this.newRecipeDesc,
        };
        this.recipes.push(newRecipe);

        // Update store
        this.$store.commit("addRecipe", newRecipe);
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
  width: 75%;
  margin: 0 auto;
}
select {
  border: 2px solid #00bef0;
  color: #00bef0;
  padding: 0.5rem;
  margin: 0.5rem;
}
label {
  display: inline-block;
}
.control-label {
  float: left;
}
.form-row-dropdowns {
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: inline-block;
  padding: 0.25rem;
}
</style>
