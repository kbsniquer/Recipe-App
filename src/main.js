import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
