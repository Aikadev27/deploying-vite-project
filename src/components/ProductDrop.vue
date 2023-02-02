<template>
  <a href="">
    <li class="pro_items">{{ ProItem }}</li>
  </a>
</template>

<script>
export default {
  name: "ProductDrop",
  props: ["ProItem"],
};
</script>

<style scoped>
.pro_items {
  color: #1c1c1c;
  list-style: none;
  text-transform: capitalize;
  letter-spacing: 1px;
}
.pro_items:hover {
  color: var(--text-hover-color);
  transition: 0.2s;
}
a:first-child {
  font-weight: bolder;
  text-transform: uppercase;
  display: block;
  padding: 0 0 10px 0;
}
</style>
