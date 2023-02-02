<template>
  <div id="app">
    <Header />
    <Slider />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
export default {
  name: "App",
  components: { Header, Slider },
  created() {
    document.title = "Kicap.vn";
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
