var app = newFunction();
function newFunction() {
  return new Vue({
    el: "#app",
    data: {
      page: 1,
      todoList: [
        { todo: "吃飯", time: "20:00", flag: false },
        { todo: "睡覺", time: "21:00", flag: false },
        { todo: "打東東", time: "22:00", flag: false },
      ],
      title: "今日待辦事項",
      date: "2022年4月19日",
      isTitle: true,
      isTodo: true,
      isTime: true,
      isBtn: true,
      newTodo: "",
      newTime: "",
      todoIsError: false,
      timeIsError: false,
    },
    methods: {
      addTodo: function () {
        if (this.newTodo.length == 0) {
          this.todoIsError = true;
        }
        if (this.newTime.length == 0) {
          this.timeIsError = true;
        }
        if (this.newTodo.length && this.newTime.length) {
          this.todoList.push({
            todo: this.newTodo.trim(),
            time: this.newTime.trim(),
            flag: false,
          });
          this.newTodo = "";
          this.newTime = "";
          this.todoIsError = false;
          this.timeIsError = false;
        }
      },
      removeTodo: function (index) {
        this.todoList.splice(index, 1);
      },
    },
  });
}
