<template>
  <div class="tab-control row_flex">
    <span
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="barControl(index)"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
            return {
                currentIndex: 0,
            };
        },
        methods: {
            barControl(index) {
                this.currentIndex = index;
                this.$bus.$emit('GoodsIndex', index);
            },
        },
        props: {
            titles: {
                type: Array,
                default () {
                    return [];
                },
            },
        },
    };
</script>

<style lang="scss" scope>
    .tab-control {
        width: 100%;
        height: 1rem;
        height: 4rem;
        line-height: 3rem;
        font-size: 1.3rem;
        padding: .6rem 0;
        z-index: 10;
        background-color: white;
        .active {
            color: $mall-orange;
            position: relative;
        }
        .active::after {
            content: "";
            position: absolute;
            width: 4rem;
            text-align: center;
            bottom: 0;
            border-bottom: 3px solid $mall-orange;
            right: 50%;
            transform: translateX(50%);
        }
    }
    
    .tab-control-item {
        flex: 1;
    }
</style>