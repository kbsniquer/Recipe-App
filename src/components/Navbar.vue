<template>
  <nav class="navbar navbar-dark navbar-expand-md fixed-top">
    <a class="navbar-brand" href=""
      ><img class="nav-logo" src="../assets/logo.svg" /> My Recipe App</a
    >
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
          <a class="nav-link" href="#/my-recipes">My Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/add-recipe">Add New Recipe</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem 0.5rem 0.5rem 2rem;
  background-color: #326273;
}
.navbar-brand,
.nav-link {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}
.nav-logo {
  width: 20%;
  margin-right: 0.5rem;
}
.nav-logo img {
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.75);
}
.navbar-dark,
.navbar-toggler {
  color: white;
  border: 0;
}
</style>
