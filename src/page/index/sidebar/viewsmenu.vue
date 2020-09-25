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
          <span>导航一</span>
        </template>
        <el-menu-item index="/demo">demo</el-menu-item>
        <el-menu-item index="/demo2">demo2</el-menu-item>
        <el-menu-item index="/qrcode">二维码</el-menu-item>
        <el-menu-item index="/mock">MOCK</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont iconchuandi"></i>
          <span>byValue</span>
        </template>
        <el-menu-item index="/father">father</el-menu-item>
        <el-menu-item index="/brother1">brother1</el-menu-item>
        <el-menu-item index="/brother2">brother2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont iconrenyuanguanli"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item index="/addPerson">添加人员</el-menu-item>
        <el-menu-item index="/organManage">机构管理</el-menu-item>
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