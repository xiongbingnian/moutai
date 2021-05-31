<template>
  <!-- 右侧工具栏 -->
  <div class="side-bar">
    <div class="side-bar-video" style="margin-bottom: 80px;">
      <a @click="btnVideo">
        <img style="margin-top: 12px;" src="../common/img/video.png">
        <span>定制教程</span>
      </a>
    </div>
    <div class="back-to-top" @click='returnTop'>
      <img src="../common/img/top-ico1.png">
    </div>
    <div class="side-bar-qq">
      <a href="javascript:;" target="_blank">
        <img src="../common/img/qq-ico.png">
        <span>QQ客服</span>
      </a>
    </div>
    <div class="bg" @click="btnBg" v-if="bgHide">
      <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&amp;v=20161117&amp;vid=q03628o09z9&amp;auto=0"
        autostart="true" type="application/x-shockwave-flash" style="height: 683.156px; width: 932px;" class="embed" v-if="bgHide">
    </div>
  </div>
</template>
<script>
  import {
    vm
  } from "common/js/vm.js";
  export default {
    data() {
      return {
        bgHide: false,
      }
    },
    methods: {
      /* 返回顶部 */
      returnTop() {
        $("html,body").animate({
            scrollTop: 0
          },
          200
        );
      },
      btnVideo() {
        this.bgHide = true;
      },
      btnBg() {
        this.bgHide = false;
      }
    }
  };

</script>
<style lang="less" scoped>
  /* 右侧工具栏 */

  .bg {
    height: 100%;
    background: rgba(0, 0, 0, .4);
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }

  .bg .embed {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .side-bar {
    position: fixed;
    bottom: 20%;
    right: 0;
    width: 60px;
    z-index: 99999;
    color: #fff;
    line-height: 60px;
    div {
      margin: 10px 0 0;
      float: right;
      cursor: pointer;
      overflow: hidden;
      text-align: center;
      transition: all 300ms;
      a {
        font-size: 14px;
        text-decoration: none;
        display: block;
        span {
          display: block;
          font-family: "微软雅黑";
          font-size: 18px;
          line-height: 60px;
        }
        img {
          width: 40px;
          height: auto;
          float: left;
          margin: 8px 0px 8px 11px;
        }
      }
    }
    .side-bar-video {
      width: 60px;
      height: 60px;
      background: #a87e41;
    }
    .back-to-top {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #a87e41;
      color: #fff;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      img {
        float: left;
        margin: 10px 0 0 10px;
        width: 40px;
      }
    }
    .side-bar-qq {
      width: 60px;
      height: 60px;
      background: #a87e41;
    }
  }

</style>
