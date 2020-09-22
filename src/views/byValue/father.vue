<template>
  <div class="wrap father">
    <h2>father</h2>
    <p>{{str}}{{des}}</p>
    <p></p>
    <div class="brother1">
      <Brother1 :fmsg="msg"></Brother1>
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