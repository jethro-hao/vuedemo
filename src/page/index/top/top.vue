<!--
 * @Author: Jethro
 * @Date: 2020-09-08 10:38:22
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-12 10:38:54
 * @FilePath: \vuedemo\src\page\index\top\top.vue
-->
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
      <span @click="handleExit" class="right_item">
        <i class="iconfont icontuichu"></i
      ></span>
      <span @click="fullScreen" class="right_item">
        <i class="iconfont iconquanping"></i
      ></span>
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
    //  折叠
    handleFolding() {
      this.$store.commit("handleIsCollapse");
      //传值
    },
    // 退出系统
    handleExit() {
      this.$confirm("确认退出吗", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(() => {
          this.$message.info("操作已取消");
        });
    },
    // 全屏
    fullScreen() {},
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

    .right_item {
      display: inline-block;
      margin-left: 10px;
      line-height: 60px;
    }
    .icontuichu,
    .iconquanping {
      color: #909399;
      transition: 0.5;
      &:hover {
        cursor: pointer;
        color: #fff;
      }
    }
  }
}
</style>