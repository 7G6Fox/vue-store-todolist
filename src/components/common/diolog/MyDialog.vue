<template>
  <div v-show="showItem" class="my-dialog" @click.stop>
    <div class="dialog-cover back" @click="closeSelf"></div>

    <transition name="trop">
      <div class="dialog-content">
        <div class="dialog_head back">
          <slot name="header"></slot>
        </div>

        <div class="dialog_main">
          <slot name="main"></slot>
        </div>

        <div class="foot_close">
          <slot name="confirm"></slot>
          <slot name="cancel"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props:{showItem:{
    type:Boolean,
    default:false,
    require:true
  }},
  methods: {

    closeSelf() {
      this.$emit("on-close",false);
    },
    
  },
};
</script>

<style lang="scss" scoped>
.my-dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 20px;
  .dialog-cover {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .dialog-content {
    position: fixed;
    background-color: white;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translatex(-50%) translateY(-50%);
    padding: 30px;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    z-index: 200;
    padding: 15px;
  }
}
</style>