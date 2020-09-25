<template>
  <div class="wrap">
    <el-button>mock</el-button>
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
    this.getTest();
  },
  methods: {
    getTest() {
      this.$http.get("/api/test").then(function (res) {
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