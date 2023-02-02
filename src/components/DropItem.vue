<template>
  <a href="" class="list-link"
    ><li class="list-item">{{ List }}</li></a
  >
</template>

<script>
export default {
  name: "DropItem",
  props: ["List"],
};
</script>

<style scoped>
@import "../assets/css/style.css";
.list-item {
  text-decoration: none;
  list-style: none;
  color: var(--text-color);
  font-size: 14px;
  border-bottom: 1px solid rgb(243, 235, 235);
  padding: 10px 12px;
}
.list-item:hover {
  color: var(--hover-color);
  transition: 0.2s;
}
</style>
