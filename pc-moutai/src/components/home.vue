<template>
  <div class="article">
    <div class="wel-msg">{{ userName }}
      <span v-if="userName">，</span>欢迎来到国酒茅台定制营销（贵州）有限公司官方网站！</div>
    <div class="home_carousel">
      <template>
        <el-carousel arrow="never" trigger="click">
          <el-carousel-item>
            <div class="img-wrap">
              <img src="http://www.moutaivip.com/cache/images/20180110/1515548476815.jpg" alt="">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="img-wrap">
              <img src="http://www.moutaivip.com/cache/images/20180110/1515548348716.jpg" alt="">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="img-wrap">
              <img src="http://www.moutaivip.com/cache/images/20180110/1515548368038.jpg" alt="">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="img-wrap">
              <img src="http://www.moutaivip.com/cache/images/20180110/1515548383396.jpg" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="mail sh1">
      <div class="left w5">
        <div class="video">
          <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&amp;v=20161117&amp;vid=q03628o09z9&amp;auto=0"
            autostart="true" type="application/x-shockwave-flash" style="height: 683.156px; width: 932px;" v-show="!imgHide">
          <img src="../common/img/video.jpg" @click="btnImg" v-show="imgHide">
        </div>
      </div>
      <div class="left topics w5">
        <div class="left w5 ">
          <router-link to="/personality" class="sh-top1">
            <img src="../common/img/zunxiang.jpg" class="ind1">
          </router-link>
        </div>
        <div class="left w5 ">
          <router-link to="/standard" class="sh-top2">
            <img src="../common/img/jingdian.jpg" class="ind2">
          </router-link>
        </div>
        <div class="left w10 " @click="active(3)">
          <router-link to="/standardPage3" class="sh-bottom1">
            <img src="../common/img/zaixian.jpg" class="ind3">
          </router-link>
        </div>
      </div>
    </div>

    <div style="height:50px;"></div>
  </div>
</template>

<script>
  import {
    vm
  } from "common/js/vm.js";
  export default {
    data() {
      return {
        userName: sessionStorage.getItem("userName"),
        imgHide: true,
      };
    },
    mounted() {},
    methods: {
      active(index) {
        localStorage.setItem("tab", index);
        var index = localStorage.getItem("tab");
        this.$store.dispatch("chageMyactive", index);
      },
      btnImg() {
        this.imgHide = false;
      },
    }
  };

</script>
<style>
  .el-carousel__indicators {
    text-align: center;
    width: 100%;
  }


</style>
