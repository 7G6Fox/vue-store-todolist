<template>
  <div class="top">
    <img src="@/assets/imgs/shop/top.jpg" />
  </div>
</template>

<script>
export default {
  name: "ToTop",
};
</script>

<style scope>
.top {
  display: block;
  position: fixed;
  bottom: 6rem;
  right: 1rem;
  z-index: 10;
}
.top img {
  width: 5rem;
  height: 5rem;
}
</style>