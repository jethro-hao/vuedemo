<template>
  <div class="login_index_wrap wrap wrap_login width_all">
    <div class="el_progress_wrap width_all">
      <el-progress
        ref="elProgress"
        v-show="percentage<100"
        :percentage="percentage"
        status="exception"
        class="width_all"
      ></el-progress>
    </div>
    <Vbanner></Vbanner>
    <Vlogin @percentageFn="handlePercentageFn"></Vlogin>
  </div>
</template>
<script>
import Vbanner from "./banner.vue";
import Vlogin from "./login.vue";
export default {
  name: "loginIndex",
  components: { Vbanner, Vlogin },
  data() {
    return {
      percentage: 0,
    };
  },
  methods: {
    handlePercentageFn(data) {
      this.percentage = data;
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "@/style/page/login/login.scss";
</style>