<template>
  <div class="header">
    <div class="container">
      <div class="top-header">
        <div class="header__contact">
          <p>
            HOTLINE TƯ VẤN:<a href="#" id="phone-number">{{ phone }}</a>
          </p>
        </div>
        <div class="header__logo">
          <div class="wrap-logo">
            <a href="" title="Kicap">
              <img src="../assets/images/logo.png" alt="Kicap" class="logo" />
            </a>
          </div>
        </div>
        <ul class="header__log">
          <li class="header__log-item">
            <a class="header__log-link" href="#">tài khoản</a>
            <ul class="account">
              <li class="account-item"><a href="">Đăng nhập</a></li>
              <li class="account-item"><a href="">Đăng ký</a></li>
            </ul>
          </li>

          <li class="header__log-item">
            <a class="header__log-link" href="#">giỏ hàng</a>
            <i class="icon" id="cart-icon"
              ><font-awesome-icon
                icon="fa-solid fa-bag-shopping "
                class="fa-icon"
              />
              <span>{{ amount }}</span></i
            >
          </li>
          <li class="header__log-item">
            <a class="header__log-link" href="#">tìm kiếm</a>
            <i class="icon"
              ><font-awesome-icon
                icon="fa-solid fa-magnifying-glass "
                class="fa-icon"
            /></i>
          </li>
        </ul>
      </div>
      <div class="bot-container">
        <ul class="bot-header">
          <li class="bot-item" :class="{ active: isActive }">
            <a href="#">trang chủ</a>
          </li>
          <li class="bot-item">
            <a href="#"
              >kycap bộ <font-awesome-icon icon="fa-solid fa-angle-down"
            /></a>
            <ul class="drop">
              <DropItem v-for="item in keycap" :key="item" :List="item" />
            </ul>
          </li>
          <li class="bot-item"><a href="#">mod phím</a></li>
          <li class="bot-item"><a href="#">keycap lẻ</a></li>
          <li class="bot-item"><a href="#">combo chất</a></li>
          <li class="bot-item" id="pro">
            <a href="#"
              >sản phẩm <font-awesome-icon icon="fa-solid fa-angle-down"
            /></a>
            <div class="product">
              <ul class="product-list">
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in keysets"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in keyoods"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in cables"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in kits"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in switchs"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
                <div class="prod_item">
                  <ProductDrop
                    v-for="item in acesses"
                    :key="item"
                    :ProItem="item"
                  />
                </div>
              </ul>
            </div>
          </li>
          <li class="bot-item"><a href="#">blog</a></li>
          <li class="bot-item">
            <a href="#"
              >về kicap <font-awesome-icon icon="fa-solid fa-angle-down"
            /></a>
            <ul class="drop">
              <DropItem v-for="item in about" :key="item" :List="item" />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import DropDown from "./DropDown.vue";
import DropItem from "./DropItem.vue";
import ProductDrop from "./ProductDrop.vue";
export default {
  name: "Header",
  components: { DropItem, ProductDrop },
  data() {
    return {
      isActive: true,
      phone: "0707004827",
      amount: 0,
      keycap: ["Keycap Cherry", "Keycap SA", "Keycap XDA"],
      about: [
        "Giới thiệu",
        "liên hệ",
        "Chính sách bảo hành",
        "Chính sách đổi trả",
      ],
      keysets: ["KEYCAP BỘ", "Jamon ABS", "SA PBT Chalk", "SA Aifei Monster"],
      keyoods: ["KEYCAP LẺ", "PIKACHU ALU", "CARD VGA", "BÚA LIỀM"],
      cables: [
        "CUSTOM CABLE",
        "Cable paracord color",
        "Cable shadow color basic",
      ],
      kits: ["KIT", "KIT NJ80", "MK870 3 mode", "Akko MOD007"],
      switchs: [
        "SWITCH",
        "Gateron Pro Milky Yellow",
        "Fantasy Virus",
        "Kailh Box White",
      ],
      acesses: [
        "PHỤ KIỆN",
        "Núm xoay NJ80",
        "Dụng cụ thay keycap",
        "Chổi quét phím",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1170px;
  width: 100%;
  height: 91px;
  padding: 10px 0;
  margin: 0 auto;
}
.header {
  width: 100%;
  font-size: 14px;
  align-items: center;
  margin-bottom: 50px;
  /* text-transform: uppercase; */
}
.top-header {
  display: flex;
  /* max-width: 1200px; */
  justify-content: space-between;
  align-content: center;
  margin: 0 12px;
  border-bottom: 1px solid #f5f5f5;
}

.account {
  position: absolute;
  width: 100%;
  min-width: 200px;
  background-color: #fff;
  top: calc(100% - 15px);
  right: -100px;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 18%);
  padding: 0;
  z-index: 3;
  display: none;
  border-radius: 3px;
}
.account-item {
  color: var(--text-color);
  list-style: none;
  line-height: 40px;
}
.account-item a {
  display: block;
  width: 100%;
  padding-left: 20px;
}
.account-item:hover a {
  background-color: #edede9;
  border-radius: 3px;
  color: var(--text-hover-color);
}

#phone-number {
  font-weight: bolder;
  text-decoration: none;
  color: var(--text-color);
}
#phone-number:hover {
  color: var(--text-hover-color);
  transition: 0.2s;
}

.top-header {
  width: 100%;
  padding: 0 12px;
}
.header__contact {
  width: 450px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  margin-left: -5%;
}
.wrap-logo img {
  width: 140px;
  height: 70px;
}
.logo {
  cursor: pointer;
}
.header__log {
  max-width: 467px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* overflow: hidden; */
  padding: 0 12px;
}
.header__log-item {
  /* width: 100px; */
  position: relative;
  line-height: 74px;
  list-style: none;
  margin-left: 20px;
  text-transform: uppercase;
}

.header__log-item:hover .header__log-link {
  color: var(--text-hover-color);
  transition: 0.2s;
}
.header__log-item:hover > .account {
  display: block;
}
.header__log-item a {
  text-decoration: none;
  font-size: 14px;
  color: var(--text-color);
}

.icon {
  font-size: 16px;
  margin-left: 4px;
}
#cart-icon {
  position: relative;
}
#cart-icon span {
  position: absolute;
  top: -4px;
  left: calc(100% - 5px);
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 18px;
  width: 18px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
}
.bot-container {
  position: relative;
}
.bot-header {
  width: 100%;
  max-width: 1170px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 20px;
  padding-left: 0;
}
.bot-header a {
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
}
.bot-item {
  position: relative;
  transition-duration: 2s;
}

.bot-item.active a {
  color: var(--text-hover-color);
}

.bot-item:hover a {
  color: var(--text-hover-color);
  transition: 0.2s;
}

.drop {
  position: absolute;
  left: -10%;
  top: calc(100% + 10px);
  min-width: 220px;
  width: 100%;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  padding: 0;
  display: none;
  background-color: #fff;
  z-index: 3;
  animation: fadeIn linear 0.3s;
}
.drop::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 30px;
  bottom: calc(100% - 12px);
  background-color: transparent;
  cursor: pointer;
}
.bot-item:hover > .drop {
  display: block;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(42px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
#pro:hover > .product {
  display: block;
}

.product {
  position: absolute;
  top: calc(100% + 20px);
  right: calc(0% - 250%);
  background-color: #fff;
  width: 1170px;
  max-height: 600px;
  display: none;
  animation: fadeIn linear 0.4s;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  z-index: 10;
}
.product::before {
  content: "";
  position: absolute;
  width: calc(0% + 120px);
  height: 35px;
  right: calc(0% + 260px);
  bottom: calc(100% - 15px);
  background-color: transparent;
  cursor: pointer;
}
.product-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
}
.prod_item {
  width: 33.33333%;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
