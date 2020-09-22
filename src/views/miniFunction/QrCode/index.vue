<template>
  <div class="Qrcode_wrap">
    <el-tag
      class="qrtag"
      v-popover:popover
      @click.stop="handleQrcode('abcdefghijklmnopqrstuvwxyz')"
    >二维码信息</el-tag>
    <el-popover ref="popover" placement="bottom" width="200" trigger="click">
      <div>
        <p>二维码信息</p>
        <p>code:abcdefghijklmnopqrstuvwxyz</p>
        <div id="qrcode"></div>
      </div>
    </el-popover>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  methods: {
    // 二维码
    handleQrcode(code) {
      document.getElementById("qrcode").innerHTML = "";
      new QRCode(document.getElementById("qrcode"), {
        text: code,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Qrcode_wrap {
  text-align: center;
  .qrtag:hover {
    cursor: pointer;
  }
}
</style>