<template>
  <div class="slider">
    <div class="carousel-slider">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/images/slider_1.png"
              class="d-block w-100"
              alt="slider 1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/slider_2.png"
              class="d-block w-100"
              alt="slider 2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/slider_3.png"
              class="d-block w-100"
              alt="slider 3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.slider {
  width: 100%;
  margin-top: 60px;
  /* display: flex; */
  /* display: none; */
}
.slider img {
  max-height: 800px;
  height: 100%;
  object-fit: cover;
  object-fit: cover;
  width: 100%;
  /* max-width: 1680px; */
}
.carousel-slider {
  width: 90%;
  /* max-width: 1680px; */
  margin-left: 5%;
}
/* !todo: làm cầu nối giữa SẢN PHẨM và PRODUCT LIST + binding data từng thành phần */
</style>
