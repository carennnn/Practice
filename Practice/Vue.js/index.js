//第一題
// var app4 = new Vue({
//   el: "#app-4",
//   data: {
//     todos: [
//       { text: "Learn JavaScript" },
//       { text: "Learn Vue" },
//       { text: "Build something awesome" },
//     ],
//     seen: false,
//   },
// });
// app4.todos.push({ text: "New Item" });

//第二題
// var app3 = new Vue({
//   el: "#app-3",
//   data: {
//     seen: false,
//   },
// });
// app3.seen = false;

//第三題
// var app6 = new Vue({
//   el: "#app-6",
//   data: {
//     message: "Hello Vue!",
//   },
// });

// //第四題
// //定義新的component叫做todo-item
// Vue.component("todo-item", {
//   template: "<li>This is a todo</li>",
// });
// //在component裡建立一個instance
// var app = new Vue({
//   el: "#app",
// });

// //第五題
// Vue.component("todo-item", {
//   // todo-item 組件現在接受一個"prop"，類似於一個自定義 attribute
//   // 這個 prop 名為 todo
//   props: ["todo"],
//   template: "<li>{{ todo.text }}</li>",
// }); //必須寫在前面
// var app7 = new Vue({
//   el: "#app-7",
//   data: {
//     groceryList: [
//       { id: 0, text: "Vegetables" },
//       { id: 1, text: "Cheese" },
//       { id: 2, text: "Whatever else humans are supposed to eat" },
//     ],
//   },
// });

new Vue({
  el: "#app01",
  data: {
    img: "<img src='crocodile.png'>",
    msg: "圖片去哪裡了",
    select: "",
    number: 5,
    counter: 0,
    status: "english",
    brands: [{ name: "addidas" }, { name: "nike" }, { name: "nubalance" }],
  },
  methods: {
    add() {
      this.counter += 1;
    },
    Click(num1, num2) {
      alert(num1 + num2);
    },
    click1(event) {
      console.log(event);
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    list: [
      {
        name: "小明",
        age: 16,
      },
      {
        name: "媽媽",
        age: 38,
      },
      {
        name: "漂亮阿姨",
        age: 24,
      },
    ],
    flag: true,
  },
  methods: {
    edit() {
      this.flag = false;
    },
    input() {
      this.flag = true;
    },
  },
});
