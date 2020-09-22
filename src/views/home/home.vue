<template>
  <div class="wrap">
    <avue-data-box :option="boxOption"></avue-data-box>
    <!-- <avue-echart-wordcloud
      ref="echart"
      :option="wordcloudConfig"
      :data="wordcloudData"
      width="1000"
    ></avue-echart-wordcloud>-->
    <avue-data-card :option="cardOption"></avue-data-card>
  </div>
</template>
<script>
import {
  wordcloudData,
  wordcloudConfig,
  cardOption,
  boxOption,
} from "@/const/views/home/index";
export default {
  name: "home",
  data() {
    return {
      wordcloudData,
      wordcloudConfig,
      cardOption,
      boxOption,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>