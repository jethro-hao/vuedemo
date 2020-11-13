<!--
 * @Author: Jethro
 * @Date: 2020-09-09 10:14:23
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-13 15:11:49
 * @FilePath: \vuedemo\src\views\byValue\child2.vue
-->
<template>
  <div class="wrap">
    <h2>child2</h2>
    <p>{{ msg }}{{ des }}</p>
    <el-button type="primary" round @click="c2Tof">child2 to father</el-button>
  </div>
</template>
<script>
import Bus from "@/assets/Bus";
export default {
  name: "child2",
  data() {
    return {
      msg: "",
      des: "",
      // str: "The value is child2 to father.",
      str: "I am child2. ",
    };
  },
  methods: {
    c2Tof() {
      // 子组件向父组件传值
      // this.$emit("ffn", this.str);
      this.$emit("fn", this.str, "(The value is child2 to father.)");
    },
  },
  computed: {},
  created() {},
  mounted() {
    // 接收兄弟组件传过来的值
    Bus.$on("byValue", (val, des) => {
      this.msg = val;
      this.des = des;
    });
  },
};
</script>