<template>
  <div class="container">
    <div class="aboutContainer">
      <div class="aboutText">
        <h1>Welcome to Recipe App</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button class="btn">Let's Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  title: "Recipe App",
};
</script>

<style scoped>
.aboutText {
  padding: 3rem;
}
.aboutContainer {
  background-color: #fcfcfc;
  color: #357266;
  padding-bottom: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0px 8px 15px -8px rgba(64, 67, 97, 0.5);
  margin: 0;
}
</style>
