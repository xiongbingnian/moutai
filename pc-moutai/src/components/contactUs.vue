<template>
  <div class="menuM">
    <div class="head">
      <div class="navi">
        <ul>
          <li>
            <router-link to="/home">网站首页</router-link>
          </li>
          <li>
            <router-link to="/contactUs" class="active">联系我们</router-link>
          </li>
          <li>
            <router-link to="/recruitment">招贤纳士</router-link>
          </li>
          <li>
            <router-link to="/legalPage">法律声明</router-link>
          </li>
        </ul>
      </div>
      <div class="sub_page">
        <div class="rect">
          <h2>
            <p>
              <i class="rect_icon"></i>
              <b>联系我们 </b>
            </p>
          </h2>
          <div class="c_detail">
            <div class="msg">
              <ul>
                <li>
                  国酒茅台定制营销（贵州）有限公司
                </li>
                <li>
                  公司地址：贵阳市观山湖区金阳北路3号附1号正汇国际A座17F
                </li>
                <li>
                  公司电话：400-861-9898
                </li>
                <li>
                  服务时间：9:00-17:00
                </li>
                <li>
                  <p style="float: left">公司地图：</p>
                  <!-- <img src="../common/img/moutaiditu.png" alt="">   -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {}
  };

</script>
<style scoped>


</style>
