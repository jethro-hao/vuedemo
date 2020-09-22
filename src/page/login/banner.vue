<template>
  <div style="width:100%;height:100%;">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="bac1">
        <div class="bottom_p">
          <p>版权所有 ©2019 爱克信智能股份有限公司</p>
          <p>All copyright © 2019 grams love letter intelligent co., LTD. |</p>
        </div>
      </swiper-slide>
      <swiper-slide class="bac2"></swiper-slide>
      <swiper-slide class="bac3"></swiper-slide>
      <swiper-slide class="bac4"></swiper-slide>
      <swiper-slide class="bac5"></swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->
  </div>
</template>
<script>
import { swiperOptions } from "@/const/page/login/index";
export default {
  name: "login",
  data() {
    return {
      swiperOptions,
    };
  },
  created() {},
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss">
</style>