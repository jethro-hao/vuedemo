<template>
  <div class="wrap">
    <el-button @click="getRandomData">获取随机数据</el-button>
    <el-button @click="getCustomData">获取自定义数据</el-button>
  </div>
</template>
<script>
export default {
  name: "mock",
  data() {
    return {
      msg: "hello",
    };
  },
  mounted() {
    // this.getTest();
  },
  methods: {
    getTest() {
      this.$http.get("/api/test").then(function (res) {
        console.log(res.data);
      });
    },
    getRandomData() {
      this.$http.get("/api/randomData").then((res) => {
        console.log("获取到的mock随机数据：");
        console.log(res.data);
      });
    },
    getCustomData() {
      this.$http.get("/api/customData").then((res) => {
        console.log("获取到的mock自定义的数据：");
        console.log(res.data);
      });
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="less" scoped>
</style>