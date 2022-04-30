<template>
  <div class="topnav" :style="topStyle">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "topNa",
        data() {
            return {
                topStyle: {
                    backgroundColor: this.color,
                    color: this.fontcolor,
                },
            };
        },
        props: {
            color: {
                type: String,
                default: "#ff9234",
            },
            fontcolor: {
                type: String,
                default: "white",
            },
        },
    };
</script>

<style scoped>
    .topnav {
        width: 100%;
        display: flex;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        font-size: 1.6rem;
        /* position: fixed;
  top: 0; */
        z-index: 10;
    }
    
    .topnav div:nth-child(2) {
        flex: 1;
    }
    
    .topnav div:nth-child(3),
    .topnav div:nth-child(1) {
        width: 6rem;
    }
</style>