<template>
  <div class="container">
    <div class="recipeContainer">
      <form @submit.prevent="addRecipe()">
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
        <div class="row dropdowns">
          <div class="col-12 col-sm-6">
            <label for="recipeCookTimeDropdown">Cook Time</label>
            <select name="recipeCookTimeDropdown" v-model="newRecipeTime">
              <option
                class="dropdown-item"
                v-for="(time, index) in recipeCookTimes[0]"
                :key="index"
                >{{ time }}</option
              >
            </select>
          </div>

          <div class="col-12 col-sm-6">
            <label for="recipeCCategoryDropdown">Category</label>
            <select name="recipeCategoryDropdown" v-model="newRecipeCat">
              <option
                class="dropdown-item"
                v-for="(category, index) in recipeCategories[0]"
                :key="index"
                >{{ category }}</option
              >
            </select>
          </div>
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
          <button class="btn m-3" type="submit">
            Add New Recipe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeForm",
  title: "Add a Recipe",
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
      newRecipeIngredients: [],
      newRecipeTitle: "",
      newRecipeTime: "",
      newRecipeCat: "",
      newRecipeDesc: "",
    };
  },
  methods: {
    createIngredientsArray(newIngredients) {
      return newIngredients.split(", ").map((str) => ({ value: str }));
    },
    addRecipe() {
      if (this.newRecipeTitle && this.newRecipeDesc) {
        let newRecipe = {
          title: this.newRecipeTitle,
          time: this.newRecipeTime,
          cat: this.newRecipeCat,
          desc: this.newRecipeDesc,
          ingredients: this.createIngredientsArray(this.newRecipeIngredients),
        };
        this.recipes.push(newRecipe);

        // Update store
        this.$store.commit("addRecipe", newRecipe);
      } else {
        alert("Please enter a new recipe!");
      }

      // Clear out the input fields after submission
      this.newRecipeTitle = "";
      this.newRecipeCat = "";
      this.newRecipeIngredients = "";
      this.newRecipeDesc = "";
      this.newRecipeTime = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  padding: 1rem;
  width: 75%;
  margin: 0 auto;
  color: #d35f2d;
}
select {
  border: 2px solid #d35f2d;
  padding: 0.5rem;
  margin: 0.5rem;
}
label {
  display: inline-block;
  font-size: 1.25rem;
}
.btn {
  background-color: transparent;
  color: #d35f2d;
  border: 2px solid #d35f2d;
  padding: 10px 20px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  border-radius: 25px;
  font-size: 1.25rem;
  text-transform: uppercase;
}
.btn:hover {
  background-color: #d35f2d;
  border: 2px solid #d35f2d;
  color: white;
  border-radius: 25px;
}
.recipeContainer,
.recipeContainerLabel h1 span {
  background-color: #fcfcfc;
}
.recipeContainer {
  border-radius: 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
}
.control-label {
  float: left;
}
@media only screen and (max-width: 800px) {
  select {
    margin: 0;
    padding: 0.5rem;
  }
  .btn {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 575px) {
  .dropdowns div {
    padding: 0.5rem;
    text-align: left;
  }
  .dropdowns label {
    padding: 0.5rem;
  }
}
</style>
