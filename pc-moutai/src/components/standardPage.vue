<template>
  <div class="standardPage" style="padding-top:175px;">
    <!-- 弹出框 -->
    <div class="standard_nav" style="z-index:98;" v-if="standardData.length">
      <div class="head_nav">
        <ul class="clearfix">
          <li @click="active(0)" :class="{active:0==this.$store.getters.getMyactive}">
            <router-link to="/standard">
              <img src="../common/img/standard_0.png">
            </router-link>
          </li>
          <li @click="active(1)" :class="{active:1==this.$store.getters.getMyactive}">
            <router-link to="/standardPage1">
              <img :src="standardData[0].image">
            </router-link>
          </li>
          <li @click="active(2)" :class="{active:2==this.$store.getters.getMyactive}">
            <router-link to="/standardPage2">
              <img :src="standardData[1].image">
            </router-link>
          </li>
          <li @click="active(3)" :class="{active:3==this.$store.getters.getMyactive}">
            <router-link to="/standardPage3">
              <img :src="standardData[2].image">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="content-box" v-if="standardPageData.length">
      <!-- 背景图摆放位置-----开始 -->
      <div class="img-wrap" v-if="imgStatus==1">
        <div class="top-img" style="width: 180px; left: 0px; height: 285px;">
          <div class="leaf_1 leaf_3">
            <img src="../common/img/StandardPage/feitian/leaf_1.png">
          </div>
        </div>
        <div class="top-img" style="width: 180px; left: 0px; height: 285px;">
          <div class="leaf_2 leaf_4">
            <img src="../common/img/StandardPage/feitian/leaf_2.png">
          </div>
        </div>
        <div class="top-img" style="width: 180px; left: 0px; height: 285px;">
          <div class="leaf_1">
            <img src="../common/img/StandardPage/feitian/leaf_1.png">
          </div>
        </div>
        <div class="top-img" style="width: 180px; left: 0px; height: 285px;">
          <div class="leaf_2">
            <img src="../common/img/StandardPage/feitian/leaf_2.png">
          </div>
        </div>
        <div class="top-img" style="width: 180px;">
          <img src="../common/img/StandardPage/feitian/white-bamboo.png">
        </div>
        <div class="left-img" style="width: 629px;">
          <img src="../common/img/StandardPage/feitian/white-left-hill.png">
        </div>
        <div class="right-img" style="width: 529px;">
          <img src="../common/img/StandardPage/feitian/white-waterfront.png">
        </div>
      </div>
      <div class="img-wrap" v-if="imgStatus==2">
        <div class="top-img" style="width: 307px; left: 0px;">
          <img src="../common/img/StandardPage/jiangxiang/classical-tree.png">
        </div>
        <div class="left-img" style="width: 496px;">
          <img src="../common/img/StandardPage/jiangxiang/zhenpin-left.png">
        </div>
        <div class="zhenpin-ship left-img">
          <img src="../common/img/StandardPage/jiangxiang/zhenpin-left-ship.png">
        </div>
        <div class="right-img" style="width: 976px;">
          <img src="../common/img/StandardPage/jiangxiang/zhenpin-right.png">
        </div>
        <div class="bottom-img">
          <img src="../common/img/StandardPage/jiangxiang/maisui.png">
        </div>
      </div>
      <div class="img-wrap" v-if="imgStatus==3">
        <div class="top-img shapeAniDisplay" style="width: 332px; left: -110px;">
          <img src="../common/img/StandardPage/tanzi/flower.png">
        </div>
        <div class="left-img" style="width: 897px;">
          <img src="../common/img/StandardPage/tanzi/jiangxiang-left.png">
        </div>
        <div class="left-img" style="width: 897px; overflow: initial;">
          <div class="cloud-move-ani-display">
            <img src="../common/img/StandardPage/tanzi/tanzi-cloud.png">
          </div>
        </div>
        <div class="right-img" style="width: 768px;">
          <img src="../common/img/StandardPage/tanzi/jiangxiang-right.png">
        </div>
      </div>
      <!-- 背景图摆放位置-----结束 -->
      <div class="inner-box clearfix">
        <!-- 左侧图片 -->
        <div class="left-side" :style="{'width':standardPageData[0].item_id==3?'60%':'50%'}">
          <img :src="standardPageData[descboxIndex].image" />
        </div>
        <!-- 右侧介绍 -->
        <div class="right-side" :style="{'width':standardPageData[0].item_id==3?'40%':'50%'}">
          <div class="desc-box">
            <h2>{{ standardPageData[descboxIndex].item_name }}</h2>
            <p class="five">{{ standardPageData[descboxIndex].item_abbr }}</p>
            <br>
            <h3 class="font-yellow">{{ standardPageData[descboxIndex].p_nickname }}</h3>
            <div class="tanzi-detail">
              <p>
                {{ standardPageData[descboxIndex].p_abbr }}
              </p>
              <span>参考定制价格：</span>
              <div class="right-price">
                <p v-for="(price,index) in standardPageData[descboxIndex].price" :key="index">
                  	￥
                  <b>{{price.price}}/{{ price.name }}</b>
                </p>
              </div>
            </div>
            <p class="seven" style="color: rgb(170, 170, 170);">（报价仅供参考，价格根据市场动态调整，以签订合同价格为准）</p>
            <!--<router-link class="make-now" v-bind="{to:'/maotai/item='+standardPageData[descboxIndex].item_id}" target="_blank">-->
            <router-link class="make-now" v-bind="{to:'/maotai/item='+standardPageData[descboxIndex].item_id}">
              <span style="display:block" @click="promptlyStandard">立即定制</span>
            </router-link>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div class="nav-banner">
          <ul>
            <li :class="{nav_banner_active:index==nav_banner_status}" @click="navBanner(index)" v-for="(item,index) in standardPageData"
              v-if="standardPageData.length!=1" :key="index">{{item.p_name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      standardPageData: [],
      imgStatus: 1,
      nav_banner_status: 0, //控制右侧导航状态
      descboxIndex: 0,
      standardData: []
    };
  },
  created() {
    this.getstandardPageData();
    this.getStandard();
  },
  watch: {
    // 当url的参数的发生改变的时候，会触发这个watch的重新执行
    $route: function() {
      // 当触发了这个方法就重新获取到最新的数据
      this.getstandardPageData();
    }
  },
  methods: {
    /* 顶部下拉框标准定制数据 */
    getStandard() {
      let url = "/index/standard_item";
      this.$http.get(url).then(res => {
        if (res.data.errcode == 0) {
          this.standardData = res.data.data;
        }
      });
    },
    /* 点击右侧导航触发，触发之后的值会改变，所以当重新选择其他数据的时候，要还原 */
    navBanner(index) {
      this.nav_banner_status = index;
      // this.desc_box_status = index;
      this.descboxIndex = index;
    },
    promptlyStandard() {},
    active(index) {
      /* 每点击一次设置默认值 */
      this.nav_banner_status = 0;
      // this.desc_box_status = 0;
      this.descboxIndex = 0;
      /* 控制图片的显示隐藏 */
      this.imgStatus = index;
      // 当点击第一个的时候隐藏弹出框
      if (index == 0) {
        this.isshow = false;
      }
      localStorage.setItem("tab", index);
      var index = localStorage.getItem("tab");
      this.$store.dispatch("chageMyactive", index);
    },
    getstandardPageData() {
      let id = this.$route.params.id;
      this.imgStatus = id;
      let url = "/index/standard_list&id=" + id + "";
      this.$http.get(url).then(res => {
        if (res.data.errcode == 0) {
          this.standardPageData = res.data.data;
          console.log(res.data.data);
        }
      });
    }
  }
};
</script>
<style scoped>
.standardPage {
  min-width: 1200px;
}
</style>
