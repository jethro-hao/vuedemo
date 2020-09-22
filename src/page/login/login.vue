<template>
  <div class="avue_login_wrap">
    <avue-login
      :option="loginFormOption"
      @refresh="refresh"
      :codesrc="codesrc"
      @submit="submit"
      @send="send"
    ></avue-login>
  </div>
</template>
<script>
import { loginFormOption } from "@/const/page/login/index";
export default {
  name: "login",
  data() {
    return {
      loginFormOption,
    };
  },
  created() {
    this.refresh();
    const _this = this;
    let pn = 0;
    let t = setInterval(function () {
      if (pn < 100) {
        pn += 5;
        _this.$emit("percentageFn", pn);
      } else {
        clearInterval(t);
      }
    }, 100);
  },
  methods: {
    refresh() {
      // this.$message.success("图片验证码刷新成功");
      this.codesrc =
        "https://pigx.pig4cloud.com/code?randomStr=" + new Date().getTime();
      console.log(this.codesrc);
    },
    send(done) {
      this.$message.success("验证码发送成功");
      done();
    },
    submit(form) {
      if (form.password === "123" && form.username === "admin") {
        this.$message.success("登录成功");
      }
      // this.$message.success(JSON.stringify(form));
      // console.log(form);
      this.$router.push({
        path: "/home",
      }); // 只能用 name
    },
  },
  computed: {
    // percentage: () => {
    //   let pn = 0;
    //   let t = setInterval(() => {
    //     if (pn < 100) {
    //       clearInterval(t);
    //     } else {
    //       pn += 10;
    //       return String(pn);
    //     }
    //   }, 100);
    // },
  },
  mounted() {
    // this.$emit("percentageFn", this.percentage);
  },
};
</script>