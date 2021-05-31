<template>
  <div id="memberContain" class="tab_container">
    <div id="tab1" class="tab_content" style="display: block; ">
      <div class="user">
        <div class="user_img">
          <img :src="userImg?userImg:'http://cs.zsb9.cn./uploads/20180116/5a5de885b980d.png'">
        </div>
        <h2 v-text="userName"></h2>
        <div class="user_info">
          <ul>
            <li class="level_name">普通会员（VIP1）</li>
            <li>会员成长值
              <span class="growing">0.00</span>
            </li>
            <li>积分
              <span class="integral">0.00</span>
            </li>
          </ul>
        </div>
        <div class="user_nav">
          <ul>
            <li>
              <router-link to="/standardOrder">
                待付款
                <span class="notPaid">(0)</span>
                <p>|</p>
              </router-link>
            </li>
            <li>
              <router-link to="/standardOrder">
                待收货
                <span class="waitReceived">(0)</span>
                <p>|</p>
              </router-link>
            </li>
            <li>
              <router-link to="/standardOrder">
                待审核
                <span class="unAudit">(0)</span>
                <p>|</p>
              </router-link>
            </li>
            <li>
              <router-link to="/standardOrder">
                待评价
                <span class="unCommented"> (0)</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div style="height: 150px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCookie } from "common/js/cookie.js";
export default {
  data() {
    return {
      userName: sessionStorage.getItem("userName"),
      userImg: sessionStorage.getItem("userImg")
    };
  },
  mounted() {
    // alert(sessionStorage.getItem('token'));
    // window.location.reload(); //页面刷新
    this.getUserInfo();
    // console.log(getCookie("token"))
  },
  methods: {
    getUserInfo() {
      let token = sessionStorage.getItem("token");
      let url = "/personal/getUserInfo?token=" + token + "";
      this.$http.get(url).then(res => {
        // console.log(res)
        // console.log(token)
      });
    }
  }
};
</script>
<style scoped>
  .tab_container{
    min-width: 1200px;
  }
</style>
