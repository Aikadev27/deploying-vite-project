<template>
  <li class="item">{{ valueitem }}</li>
</template>

<script>
export default {
  name: "Item",
  props: ["valueitem"],
};
</script>

<style scoped>
.item {
  width: 100%;
  height: 20px;
  background-color: coral;
  color: white;
  text-align: center;
}
</style>
