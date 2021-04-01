<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
h1 {
  padding-top: 2rem;
  color: #326273;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: aqua;
}
#app {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #326273;
  padding-top: 3rem;
  min-height: 100vh;
}
.container {
  padding: 4rem;
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
</style>
