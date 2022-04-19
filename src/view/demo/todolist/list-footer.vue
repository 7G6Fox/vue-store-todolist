<template>
  <div class="todo-footer">
    <label v-show="total">
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      加油！
      <span v-show="total">已完成{{ doneTotal }}/</span>全部{{ total }}
    </span>
    <input
      type="button"
      value="全部"
      class="btn btn-none"
      :class="{ isActive: index === 0 }"
      @click="Total"
    />
    <input
      type="button"
      value="剩余"
      class="btn btn-none"
      :class="{ isActive: index === 1 }"
      @click="Left"
    />
    <button class="btn btn-danger" @click="clearAll">清除所有</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo", "isShow"],
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    total() {
      return this.todos.length;
    },
    //已完成数
    doneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    //控制全选框
    isAll: {
      //全选框是否勾选
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      //isAll被修改时set被调用
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  watch: {
    index(value) {
      //console.log("index被改变了", value);
      this.isShow(value);
    },
  },
  methods: {
    clearAll() {
      this.clearAllTodo();
    },
    Total() {
      this.index = 0;
    },
    Left() {
      this.index = 1;
    },
  },
};
</script>

<style lang='scss' scoped>
/*footer*/
@import "assets/css/color.scss";
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  button {
    float: right;
    margin: 10px;
  }

  //点击全部、剩余的样式
  input[type="checkbox"] {
    transform: scale(1.5);
    cursor: pointer;
  }
  .btn-none {
    color: $blue;
    border: 1px solid $boder-b;
    background-color: $white;
    margin-left: 5px;
  }

  .isActive {
    color: $white !important;
    background-color: $blue !important;
    border: 1px solid $boder-b !important;
  }
}
.btn {
  padding: 4px 12px;
  font-size: 16px;
  line-height: 20px;
  box-shadow: inset 0 1px 3px 1px $shadow-g;
  cursor: pointer;
}

.btn-danger {
  color: $white;
  background-color: $blue;
  border: 1px solid $boder-b;
  &:hover {
    color: $white;
    background-color: $light-blue;
  }
  &:focus {
    outline: none;
  }
}
</style>
