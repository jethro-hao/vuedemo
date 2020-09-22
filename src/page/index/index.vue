<template>
  <div class="home">
    <el-container class="height_all">
      <el-header>
        <topbar />
      </el-header>
      <el-container class="height_all">
        <el-aside class="height_all">
          <sidebar class="height_all" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sidebar from "@/page/index/sidebar/index.vue";
import topbar from "@/page/index/top/top.vue";
export default {
  name: "Home",
  components: {
    sidebar,
    topbar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  overflow: hidden;
  body {
    height: 100%;
    #app {
      height: 100%;
    }
    .home {
      height: 100%;
    }
    .height_all {
      height: 100%;
    }
  }
}
</style>
