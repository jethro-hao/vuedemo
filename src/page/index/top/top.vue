<template>
  <div class="topwrap">
    <div class="left">
      <i class="el-icon-menu" @click="handleFolding"></i>
      <router-link to="/home">
        <span class="logo">logo</span>
      </router-link>
      <!-- <span class="sys_name">**管理系统</span> -->
    </div>
    <div class="right">
      <i class="el-icon-service"></i>
      <i @click="handleExit" class="iconfont icontuichu"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
    };
  },
  methods: {
    handleFolding() {
      this.$store.commit("handleIsCollapse");
      //传值
    },
    handleExit() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss">
.el-header {
  background: #000;
  height: 60px;
}
.topwrap {
  height: 100%;
  .left {
    height: 100%;
    width: 200px;
    // background: yellowgreen;
    float: left;
    text-align: left;
    line-height: 60px;
    .logo {
      color: #fff;
      font-size: 24px;
      display: inline-block;
    }
    .el-icon-menu {
      color: #fff;
      display: inline-block;
      margin-right: 50px;
      &:hover {
        cursor: pointer;
      }
    }
    // .sys_name {
    //   color: #ffffff;
    //   font-size: 24px;
    // }
  }
  .right {
    height: 100%;
    width: 200px;
    float: right;
    // background: rosybrown;
    .el-icon-service {
      color: #fff;
      font-size: 24px;
      line-height: 60px;
    }
    .icontuichu {
      color: #fff;
      position: relative;
      left: 20px;
      top: -2px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>