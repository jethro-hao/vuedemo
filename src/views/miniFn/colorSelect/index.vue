<!--
 * @Author: Jethro
 * @Date: 2020-11-12 16:34:39
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-12 16:58:20
 * @FilePath: \vuedemo\src\views\miniFn\colorSelect\index.vue
-->

<template>
  <div class="wrap">
    <el-row :span="24">
      <el-col :span="6">
        <p class="p-color">rgba:&nbsp;{{ form }}</p>
        <p class="p-color">十六进制:&nbsp;{{ color }}</p>
        <avue-input-color
          placeholder="请选择颜色"
          v-model="form"
        ></avue-input-color>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "colorSelect",
  data() {
    return {
      form: "rgba(255,,0,1)",
    };
  },
  methods: {
    hexify(color) {
      /* var myHex = hexify('rgba(255,232,186,0.4)'); // "#f5faf3"console.log(myHex);
       */
      var values = color
        .replace(/rgba?\(/, "")
        .replace(/\)/, "")
        .replace(/[\s+]/g, "")
        .split(",");
      var a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
      return (
        "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2)
      );
    },
  },
  computed: {
    color: function () {
      return this.hexify(this.form);
    },
  },
};
</script>
<style lang="scss">
.p-color {
  padding: 10px;
}
</style>