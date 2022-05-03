<template>
  <ul class="my-category">
    <li
      :class="{ active : currentIndex === index }"
      v-for="(item, index) in Category"
      :key="index"
      @click="Change(index, item)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "my-category",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    Category: {
      type: Array,
      default() {
        return [];
      },
    },
    getItem: {
      type: Function,
      default: null,
    },
  },
  methods: {
    Change(index, item) {
      this.currentIndex = index;
      this.getItem(item.miniWallkey);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-category {
  background-color: $white;
  text-align: center;
letter-spacing: -1px;
line-height: 4rem;
li{
height:4rem;
}
}

.active {
  position: relative;
  background-color: $white;
  color: $mall-orange;
  font-weight: bold;
  border-left: 4px solid $mall-orange;
  box-shadow: 1px 0 3px 2px gainsboro;
}
</style>