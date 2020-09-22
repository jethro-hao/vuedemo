<template>
  <div class="wrap">
    <h2>brother1</h2>
    <p>{{fmsg}}</p>
    <el-button type="primary" round @click="handleByValue">brother1 to brother2</el-button>
  </div>
</template>
<script>
import Bus from "@/assets/Bus";
export default {
  name: "brother1",
  props: { fmsg: String },
  data() {
    return {
      msg: "I am brother1.",
      n: 1,
    };
  },
  methods: {
    handleByValue() {
      // 向兄弟组件传值
      Bus.$emit("byValue", this.msg, "(The value is brother1 to brother2.)");
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
</style>