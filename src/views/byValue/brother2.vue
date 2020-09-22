<template>
  <div class="wrap">
    <h2>brother2</h2>
    <p>{{msg}}{{des}}</p>
    <el-button type="primary" round @click="handleB2ToF">brother2 to father</el-button>
  </div>
</template>
<script>
import Bus from "@/assets/Bus";
export default {
  name: "brother2",
  data() {
    return {
      msg: "",
      des: "",
      // str: "The value is brother2 to father.",
      str: "I am brother2. ",
    };
  },
  methods: {
    handleB2ToF() {
      // 子组件向父组件传值
      // this.$emit("ffn", this.str);
      this.$emit("ffn", this.str, "(The value is brother2 to father.)");
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