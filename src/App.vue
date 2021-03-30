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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
label {
  color: #00bef0;
  font-weight: bolder;
}
.btn {
  background-color: transparent;
  border: 2px solid #00bef0;
  color: #00bef0;
  padding: 10px 20px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  border-radius: 25px;
}
.btn:hover {
  background-color: #01a5ce;
  border: 2px solid #01a5ce;
  border-radius: 25px;
}
.container {
  padding: 3.5rem;
}
</style>
