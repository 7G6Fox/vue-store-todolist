<template>
  <div id="todo-container">
    <h1>Your ToDo-List</h1>
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />

      <ul class="todo-main">
        <transition-group name="todo" appear>
         <MyItem
          v-for="todo in myleft"
          :key="todo.id"
          :todo="todo"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        </transition-group>
        
      </ul>

      <MyFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
        :isShow="isShow"
      />
      
    </div>
    <p class="footer">感谢使用！ </p>
    <span><indexFooter class="github"></indexFooter></span>
  </div>
</template>

<script>
import MyItem from "./todolist/list-item.vue";
import MyFooter from "./todolist/list-footer.vue";
import MyHeader from "./todolist/list-header.vue";
import indexFooter from '@/components/common/myFooter.vue';
export default {
  name: "todoList",
  data() {
    return {
      //Json字符串=>字符串对象
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      myleft: [],
      toShow: 0,
    };
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
        // console.log('todos被改变了，我监视到了');
        //isShow为1时则过滤,每一次改变的时候需要判断
        if (this.toShow) {
          this.myleft = this.change(value);
        } else {
          this.myleft = this.todos;
        }
        //  console.log('toShow',this.toShow);
        // console.log('watch值为',this.myleft);
      },
    },
  },
  components: { MyItem, MyHeader, MyFooter ,indexFooter},
  mounted() {
    this.myleft = this.todos;
  },

  methods: {
    //状态
    //判断
    isShow(value) {
      if (value ? this.myleft = this.change(value) : this.myleft = this.todos);
      this.toShow = value;
    }, //这是过滤器,判断是否过滤
    change(value) {
      if (value) {
        let myList = this.todos.filter((todo) => {
          return !todo.done;
        });
        console.log("我是过滤器", myList);
        return myList;
      }
    },

    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.myleft = this.todos;
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
/*main*/
@import "@/assets/css/list";

</style>
