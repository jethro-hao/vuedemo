<template>
  <div class="wrap add_person">
    <div class="left">
      <img id="finalImg" :src="imgUrl" :alt="imgUrl" />
      <camera></camera>
    </div>
    <div class="middle">
      <avue-form
        ref="form"
        :option="groupFormOption"
        v-model="form"
        @submit="handleSubmit"
      >
        <template slot="baseInfoHeader">
          <span class="color_box"></span>
          <span class="title">基本信息</span>
          <span class="des">主要包含用户身份信息</span>
        </template>
        <template slot="jobsInfoHeader">
          <span class="color_box"></span>
          <span class="title">工作信息</span>
          <span class="des">主要包含工作信息</span>
        </template>
        <template slot="authorizationInfoHeader">
          <span class="color_box"></span>
          <span class="title">授权信息</span>
          <span class="des">主要包含工作信息</span>
        </template>
      </avue-form>
    </div>
    <div class="right">
      <div class="right_content">
        <div class="right_content_top">
          <el-progress type="circle" :percentage="percentage"></el-progress>
        </div>
        <div class="right_content_bottom">
          <el-steps :active="active" direction="vertical">
            <el-step title="基本信息" icon="iconfont iconjibenxinxi"></el-step>
            <el-step
              title="工作信息"
              icon="iconfont icongongzuoxinxi"
            ></el-step>
            <el-step title="授权信息" icon="iconfont iconquanxian"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { groupFormOption } from "@/const/views/personManager/addPerson/index.js";
import camera from "@/components/takephoto/camera";
export default {
  name: "addPerson",
  components: {
    camera,
  },
  data() {
    return {
      msg: "aaa",
      imgUrl: "/img/user.png",
      form: {
        name: "",
        organ: "",
        authorizationOrgan: "",
      },

      groupFormOption,
    };
  },
  methods: {
    //表单的提交
    handleSubmit(form, done) {
      this.$message.success(JSON.stringify(this.form));
      done();
    },
  },
  // created() {
  //   this.option1 =c(this.deepClone(this.option), {
  //     card: true,
  //   });
  // },
  computed: {
    //百分比
    percentage() {
      let n = 0;
      let m = Math.floor(100 / 3);
      if (this.form.name) {
        n += m;
      }
      if (this.form.organ) {
        n += m;
      }
      if (this.form.authorizationOrgan) {
        n += m;
      }
      if (this.form.name && this.form.organ && this.form.authorizationOrgan) {
        n = 100;
      }
      return n;
    },
    //步骤条
    active() {
      let active = 0;
      if (this.form.name) {
        active = 1;
      }
      if (this.form.organ && this.form.name) {
        active = 2;
      }
      if (this.form.name && this.form.organ && this.form.authorizationOrgan) {
        active = 3;
      }
      return active;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/style/views/personManager/addPerson/addPerson.scss";
</style>