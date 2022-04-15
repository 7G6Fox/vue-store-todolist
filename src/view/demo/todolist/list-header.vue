<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="按回车创建待做任务"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  //接收从App传递过来的addTodo
  props: ["addTodo"],
  data() {
    return {
      //收集用户输入的title
      title: "",
    };
  },
  methods: {
    add() {
      //校验数据
      if (!this.title.trim()) return alert("输入不能为空");
      //将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      //通知App组件去添加一个todo对象
      this.addTodo(todoObj);
      //清空输入
      this.title = "";
    },
  },
};
</script>

<style lang='scss' scoped>
/*header*/
//创建组件的input
.todo-header input{
    width: 100%;
    height: 70px;
    font-size: 1.2em;
    display: inline;
    border: none;
    padding: 0;
      &:focus {
        outline: none;
        border-color: none;
        box-shadow:
         none;
      }
    }
</style>
