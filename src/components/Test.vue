<template>
  <div class="temp">
    <button @click="bam" class="static" :class="{ active: isActive }">
      {{ btn_content }}
    </button>

    <ul>
      <Item v-for="arr in arrs" :key="arr.id" :valueitem="arrs" />
    </ul>
  </div>
</template>

<script>
// import { ref } from "vue";
import Item from "./Item.vue";
export default {
  name: "Test",
  components: { Item },
  data() {
    return {
      msg: "dao nguoc",
      isActive: true,
      hasError: false,
      name: "vue.js",
      btn_content: "bam vao day",
      foods: [
        {
          name: "banana",
        },
        { name: "cam" },
        { name: "xoai" },
      ],
      arrs: [
        { id: 1, title: "viec 1" },
        { id: 2, title: "viec2" },
        { id: 3, title: "viec3" },
      ],
    };
  },
  computed: {
    daonguoc: function () {
      return this.msg.split(" ").reverse().join(" ");
    },
  },
  methods: {
    bam() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.static.active {
  color: blue;
}
.static {
  color: red;
}
</style>
