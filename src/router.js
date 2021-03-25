import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import RecipeForm from "./components/RecipeForm.vue";
import RecipeGallery from "./components/RecipeGallery.vue";
import About from "./components/About.vue";

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/", component: About },
    { path: "/add-recipe", component: RecipeForm },
    { path: "/my-recipes", component: RecipeGallery },
  ],
});

export default router;
