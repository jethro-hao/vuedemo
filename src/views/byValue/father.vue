<!--
 * @Author: Jethro
 * @Date: 2020-09-09 10:54:52
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-13 14:59:45
 * @FilePath: \vuedemo\src\views\byValue\father.vue
-->
<template>
  <div class="wrap father">
    <h2>father</h2>
    <p>{{ str }}{{ des }}</p>
    <p>
      <el-button @click="callChildMethod" type="success"
        >父组件调用子组件的方法(看控制台)</el-button
      >
    </p>
    <div class="brother1">
      <Brother1 ref="child" :fmsg="msg"></Brother1>
    </div>
    <div class="brother2">
      <Brother2 @ffn="handleFfn"></Brother2>
    </div>
  </div>
</template>
<script>
import Brother1 from "./brother1";
import Brother2 from "./brother2";
export default {
  name: "father",
  components: {
    Brother1,
    Brother2,
  },
  data() {
    return {
      msg: "I am father.(The value is father to brother1.)",
      str: "",
      des: "",
    };
  },
  methods: {
    // 接收子组件传过来的值
    handleFfn(val, des) {
      this.str = val;
      this.des = des;
    },
    callChildMethod() {
      //调用子组件的 speak 方法
      this.$refs.child.speak();
    },
    sing() {
      console.log("我是父组件的方法，我被子组件调用了");
    },
  },
};
</script>
<style lang="scss">
hr {
  margin: 20px 0px;
}
h2 {
  padding: 20px;
}
p {
  padding: 10px;
  margin: 5px;
}
.father {
  border: 5px solid blue;
  text-align: center;
}
.brother1 {
  border: 5px solid #e6a23c;
  margin: 20px 10px;
  padding: 5px;
}
.brother2 {
  border: 5px solid pink;
  margin: 20px 10px;
  padding: 5px;
}
</style>