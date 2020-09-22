<template>
  <div class="wrap add_person">
    <div class="left">
      <div class="imgwrap">
        <img src alt />
      </div>
      <el-upload
        class="avatar-uploader"
        action
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        <el-button size="small" type="primary">添加头像</el-button>
      </el-upload>
    </div>
    <div class="middle">
      <avue-form ref="form" :option="groupFormOption" v-model="form" @submit="handleSubmit">
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
            <el-step title="工作信息" icon="iconfont icongongzuoxinxi"></el-step>
            <el-step title="授权信息" icon="iconfont iconquanxian"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { groupFormOption } from "@/const/views/personManager/addPerson/index.js";
export default {
  name: "addPerson",
  data() {
    return {
      msg: "aaa",
      imageUrl: "",
      form: {
        name: "",
        organ: "",
        authorizationOrgan: "",
      },

      groupFormOption,
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleSubmit(form, done) {
      console.log(form);
      this.$message.success(JSON.stringify(this.form));
      done();
    },
  },
  created() {
    this.option1 = Object.assign(this.deepClone(this.option), {
      card: true,
    });
  },
  computed: {
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