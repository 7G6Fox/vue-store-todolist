<template>

  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      
      />
      <span class="item"
      :class="{isDone:todo.done}">{{ todo.title }}</span>
       <button class="btn-delete" 
    @click="handleDelete(todo.id)">
    X</button>
    </label>
   
  </li>

</template>

<script>
export default {
  name: "MyItem",
  data(){
    return{
      isDone:false
    }
  },
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      this.checkTodo(id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/listcomm.scss';
li button.btn-delete {
    display: none;
    margin-top: 3px;
    background-color: transparent;
    font-size: 18px;
    color: $light-blue;
    right: 10px;
    position: absolute;
    border: none;
    top: 5px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: $light-blue;
    &:hover {
        color: $blue;
    }
    &:focus {
        outline: none;
    }
}

li:hover .btn-delete {
    display: block;
}
label {
    font-size: 1.2em;
}

input,
label:hover {
    cursor: pointer;
    font-size: 1.3em;
}

//点击完成后的划线
.isDone {
    position: relative;
    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 3px solid rgba(89, 114, 210, 0.77);
        animation: borderShow 0.3s linear;
    }
    @keyframes borderShow {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
    .item {
        margin: 10px;
    }
}
        
</style>
