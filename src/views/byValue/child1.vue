<!--
 * @Author: Jethro
 * @Date: 2020-09-09 10:14:10
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-13 15:10:06
 * @FilePath: \vuedemo\src\views\byValue\child1.vue
-->
<template>
  <div class="wrap">
    <h2>child1</h2>
    <p>{{ fmsg }}</p>
    <el-button type="primary" round @click="c1Toc2">
      <span>child1 to child2</span>
    </el-button>
    <el-button type="success" @click="callFatherMethod">
      <span> 子组件调用父组件的方法(看控制台)</span>
    </el-button>
  </div>
</template>
<script>
import Bus from "@/assets/Bus";
export default {
  name: "child1",
  props: { fmsg: String },
  data() {
    return {
      msg: "I am child1.",
      n: 1,
    };
  },
  methods: {
    c1Toc2() {
      // 向兄弟组件传值
      Bus.$emit("byValue", this.msg, "(The value is child1 to child2.)");
    },
    speak() {
      console.log("我是子组件的方法，我被父组件调用了");
    },
    callFatherMethod() {
      this.$parent.sing();
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
</style>