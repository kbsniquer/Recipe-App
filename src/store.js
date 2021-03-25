import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: [],
  },
  getters: {
    recipes: (state) => {
      return state.recipes;
    },
  },
  mutations: {
    addRecipe: (state, recipe) => {
      state.recipes.push(recipe);
    },
  },
});

export default store;
