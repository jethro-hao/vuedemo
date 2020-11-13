<!--
 * @Author: Jethro
 * @Date: 2020-09-01 11:28:59
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-12 17:13:24
 * @FilePath: \vuedemo\src\page\index\sidebar\viewsmenu.vue
-->
<template>
  <div class="menu_wrap height_all">
    <el-menu
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical-demo height_all"
      background-color="#000"
      text-color="#909399"
      active-text-color="#fff"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>小功能</span>
        </template>
        <el-menu-item index="/demo">demo</el-menu-item>
        <el-menu-item index="/qrcode">二维码</el-menu-item>
        <el-menu-item index="/randomData">随机数据mock</el-menu-item>
        <el-menu-item index="/remoteSearch">远程搜索</el-menu-item>
        <el-menu-item index="/fullscreen">全屏显示</el-menu-item>
        <el-menu-item index="/colorSelect">颜色选择器</el-menu-item>
        <el-menu-item index="/formDesign">表单设计</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont iconchuandi"></i>
          <span>组件传值</span>
        </template>
        <el-menu-item index="/father">father</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont iconrenyuanguanli"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item index="/personnel/add">添加人员</el-menu-item>
        <el-menu-item index="/organization">机构管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Viewsmenu",
  data() {
    return {};
  },
  methods: {},
  computed: mapState({
    isCollapse: (state) => state.isCollapse,
  }),
  mounted() {},
};
</script>
<style lang="scss" >
a {
  text-decoration: none;
}
.el-aside {
  text-align: left;
  width: auto !important;
  .el-submenu__title {
    width: 300px;
  }
}

.iconfont {
  margin-right: 5px;
}
</style>