<template>
  <div class="wrap">
    <h1>demo</h1>
    <hr />
    <button @click="handleDecrement">-</button>
    computed接收：{{count}}--------------------------data接收：{{datacount}}
    <button
      @click="handleIncrement"
    >+</button>
    <hr />
    <div>{{sex}}</div>
    <div>{{from}}</div>
    <div>{{myCmpted}}</div>
    <hr />
    <div>from1:{{from1}}</div>
    <div>from12:{{from2}}</div>
    <hr />
    <el-button @click="handleSubmit">click me</el-button>
    <el-button @click="handleSubmit2">click me 2</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "RandomVerificationCode",
  data() {
    return {
      str: "国籍",
      datacount: this.$store.state.count,
    };
  },
  methods: {
    handleIncrement() {
      this.$store.commit("increment");
    },
    handleDecrement() {
      this.$store.commit("decrement");
    },
    // 1 随机字符串
    handleSubmit() {
      console.log(this.randomstring(8));
    },
    randomstring(L) {
      var s = "";
      var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) return n; //1-10
        if (n < 36) return String.fromCharCode(n + 55); //A-Z
        return String.fromCharCode(n + 61); //a-z
      };
      while (s.length < L) s += randomchar();
      return s;
    },
    // 2 随机字符串
    handleSubmit2() {
      console.log(this.randomString(5, "PICKCHARSFROMTHISSET"));
    },
    randomString(len, charSet) {
      //randomValue = randomString(5);
      // randomString(5, 'PICKCHARSFROMTHISSET');
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
  },
  computed: mapState({
    count: "count", // 第一种写法
    sex: (state) => state.sex, // 第二种写法
    from: function (state) {
      // 用普通函数this指向vue实例,要注意
      return this.str + ":" + state.from;
    },
    // 注意下面的写法看起来和上面相同,事实上箭头函数的this指针并没有指向vue实例,因此不要滥用箭头函数
    // from: (state) => this.str + ':' + state.from
    myCmpted: function () {
      // 这里不需要state,测试一下computed的原有用法
      return "测试:" + this.str;
    },
    from1: function () {
      return this.$store.getters.address;
    },
    from2: function () {
      return this.$store.getters.addressMore;
    },
  }),
  created() {
    // 写个定时器，发现computed依旧保持了只要内部有相关属性发生改变不管是当前实例data中的改变，还是vuex中的值改变都会触发dom和值更新
    setTimeout(() => {
      this.str = "国家";
    }, 1000);
    // console.log(this.$store.getters.findArr(2));
    // console.log(this.$store.getters.findArr(7));
  },
};
</script>