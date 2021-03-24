<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <a class="navbar-brand" href="#">My Recipe App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">My Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Add New Recipe</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: none;
}
.nav-link,
.navbar-brand {
  color: black;
}
</style>
