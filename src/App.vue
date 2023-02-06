<template>
  <div id="app">
    <Header />
    <Slider />
    <HomeSlider />
    <HomeSlider />
    <HomeSlider />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import HomeSlider from "./components/HomeSlider.vue";
export default {
  name: "App",
  components: { Header, Slider, HomeSlider },
  created() {
    document.title = "Kicap.vn";
  },
};
</script>

<style lang="scss">
@import "./assets/css/style.css";
</style>
