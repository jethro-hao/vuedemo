<!--
 * @Author: Jethro
 * @Date: 2020-09-09 10:54:52
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-13 15:11:28
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
    <div class="child1">
      <child1 ref="child" :fmsg="msg"></child1>
    </div>
    <div class="child2">
      <child2 @fn="fn"></child2>
    </div>
  </div>
</template>
<script>
import child1 from "./child1";
import child2 from "./child2";
export default {
  name: "father",
  components: {
    child1,
    child2,
  },
  data() {
    return {
      msg: "I am father.(The value is father to child1.)",
      str: "",
      des: "",
    };
  },
  methods: {
    // 接收子组件传过来的值
    fn(val, des) {
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
.child1 {
  border: 5px solid #e6a23c;
  margin: 20px 10px;
  padding: 5px;
}
.child2 {
  border: 5px solid pink;
  margin: 20px 10px;
  padding: 5px;
}
</style>