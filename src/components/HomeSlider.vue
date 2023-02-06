<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="title">Sản phẩm <span>mới</span></div>
      </div>
    </div>
    <div class="row">
      <div class="product">
        <!-- product item -->
        <div class="col-xl-3 col-md-lg-3 col-md-6 col-sm-12 col-12">
          <div class="product-item">
            <div class="card">
              <div class="card_img"></div>
              <div class="card_decrip">
                <p class="name">bộ keycap cmk morden</p>
                <span class="cost">400.000đ</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-lg-3 col-md-6 col-sm-12 col-12">
          <div class="product-item">
            <div class="card">
              <div class="card_img"></div>
              <div class="card_decrip">
                <p class="name">bộ keycap cmk morden</p>
                <span class="cost">400.000đ</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-lg-3 col-md-6 col-sm-12 col-12">
          <div class="product-item">
            <div class="card">
              <div class="card_img"></div>
              <div class="card_decrip">
                <p class="name">bộ keycap cmk morden</p>
                <span class="cost">400.000đ</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-lg-3 col-md-6 col-sm-12 col-12">
          <div class="product-item">
            <div class="card">
              <div class="card_img"></div>
              <div class="card_decrip">
                <p class="name">bộ keycap cmk morden</p>
                <span class="cost">400.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- product form -->
    </div>
    <div class="row">
      <a
        href="#"
        class="see_all col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 offset-xl-5 offset-lg-3 offset-md-3 offset-sm-0"
        >see all</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSlider",
};
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  text-align: center;
  font-size: 26px;
  margin: 30px 0;
  span {
    font-weight: bolder;
  }
}
.product {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 12px 0;
  .card {
    margin: 0 4px;
    border: none;
  }
  .card_img {
    background: url("../assets/images/keyboard1.png") no-repeat;
    background-size: cover;
    object-fit: contain;
    width: 100%;
    height: 280px;
  }
  .card_decrip {
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
    p {
      font-weight: 500;
      width: 100%;
      line-height: 16px;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 16px 0 8px 0;
      text-align: center;
    }
    span {
      text-align: center;
      display: block;
      font-weight: bolder;
    }
  }
}
.see_all {
  //   width: 100%;
  height: 40px;
  background-color: black;
  color: #fff;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
