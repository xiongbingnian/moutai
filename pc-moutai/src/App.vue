<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="head">
        <a href="javascript:;" class="left">
          <div class="logo">
            <img src="./common/img/logo.png" >
          </div>
        </a>
        <div class="right" style="height:77px;">
          <nav class="left">
            <ul class="dropdown clearfix">
              <li>
                <router-link to="/home">首页</router-link>
              </li>
              <li>
                <router-link to="/personality">个性定制</router-link>
              </li>
              <li @mouseenter="show" @mouseleave="hide" @click="active(0)">
                <router-link to="/standard">标准定制
                  <i class="el-icon-caret-bottom" v-if="this.$store.getters.getMyactive==0||this.$store.getters.getMyactive=='null'"></i>
                </router-link>
              </li>
              <li>
                <router-link to="/information">
                  资讯天地
                </router-link>
              </li>
              <li @click="memberActive">
                <router-link to="/member">
                  我的中心
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="login left" v-if="!isvipshow">
            <router-link to="/registered">注册</router-link>|
            <router-link to="/login">登录</router-link>
          </div>
          <div class="login_img left" v-if="isvipshow">
            <ul class="clearfix">
              <li @click="bottomVip">
                <a href="javascript:;">
                  <img :src="userImg?userImg:'http://cs.zsb9.cn./uploads/20180116/5a5de885b980d.png'">
                  <h2>{{userName}}</h2>
                </a>
              </li>
              <li>
                <router-link to="/cart" class="cart_top">
                  <div class="icon_num">{{carNum}}</div>
                </router-link>
                <h2> 购物车</h2>
              </li>
            </ul>
            <div class="bottom-vip" v-if="isbottomVip">
              <ul>
                <li @click="bottomVip(0)">
                  <router-link to="/member">
                    <span>
                      <i class="el-icon-tickets"></i> 个人中心</span>
                  </router-link>
                </li>
                <li @click="logout">
                  <a href="javascript:;">
                    <span>
                      <i class="el-icon-edit-outline"></i> 注销</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 下拉框 -->
      <div class="standard_nav" v-if="isshow" @mouseenter="show" @mouseleave="hide" v-show="this.$store.getters.getMyactive==0||this.$store.getters.getMyactive=='null'">
        <div class="head_nav">
          <ul class="clearfix">
            <li @click="active(0)" :class="{active:0==this.$store.getters.getMyactive}">
              <router-link to="/standard">
                <img src="./common/img/standard_0.png">
              </router-link>
            </li>
            <li @click="active(index+1)" v-for="(item,index) in standardData" :key="index">
              <router-link v-bind="{to:'/standardPage'+item.id}">
                <img :src="item.image">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <b-footer v-if="this.$store.state.footer=='show'"></b-footer>
    <side-bar></side-bar>
  </div>
</template>
<script>
import { vm } from "common/js/vm.js";
import SideBar from "base/side-bar";
import BFooter from 'base/b-footer';
const ERR_OK = 0;
export default {
  components: {
    SideBar,
    BFooter
  },
  data() {
    return {
      isshow: false, //控制显示隐藏
      num: null,
      tiem: null,
      isvipshow: false,
      isbottomVip: false,
      userName: "", //返回的用户名称
      userImg: "", // 返回的用户头像
      standardData: [], //下拉框数据
      cartData: [],
      carNum:0
    };
  },
  mounted() {
    // 监听 changeshow 这个事件
    vm.$on("changeshow", () => {
      // 1.0 获取到localStorage中的key="islogin"对应的值
      this.checklogin();
    });
    // 当页面重新刷新以后要去获取到localStorage中的这个登录状态，赋值给isvipshow
    this.checklogin();
    this.getStandard();
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
    /* 注销接口 */
    logout() {
      this.isbottomVip = false;
      if (confirm("你真的要退出吗？")) {
        var token = sessionStorage.getItem("token");
        var url = "/user/sign_out?token=" + token + "";
        this.$http.post(url).then(res => {
          if (res.data.errcode == 0) {
            // 退出成功
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userName");
            sessionStorage.removeItem("userImg");
            sessionStorage.removeItem("currentRoutePath");
            this.$router.push({
              path: "/login"
            });
            this.isvipshow = false;
            // 3.0 将localStorage中的值修改成false
            sessionStorage.setItem("islogin", false);
            localStorage.setItem("member", 0);
            var index = localStorage.getItem("member");
            this.$store.dispatch("chagemember", index);
          } else {
            // 退出不成功
          }
        });
      }
    },
    /* 控制点击头像显示隐藏注销按钮 */
    bottomVip(index) {
      this.isbottomVip = !this.isbottomVip;
      if (index == 0) {
        this.memberActive();
      }
    },
    /* 登录状态 */
    checklogin() {
      var islogin = sessionStorage.getItem("islogin");
      this.userName = sessionStorage.getItem("userName");
      this.userImg = sessionStorage.getItem("userImg");
	    this.carNum = sessionStorage.getItem("carNum");
      if (islogin == "true") {
        this.isvipshow = true;
      } else {
        this.isvipshow = false;
      }
    },
    //鼠标经过显示
    show() {
      this.isshow = true;
    },
    //鼠标移开隐藏
    hide() {
      this.isshow = false;
    },
    active(index) {
      // 当点击第一个的时候隐藏弹出框
      if (index == 0) {
        this.isshow = false;
      }
      localStorage.setItem("tab", index);
      var index = localStorage.getItem("tab");
      this.$store.dispatch("chageMyactive", index);
    },
    /* 控制当前状态值 */
    memberActive() {
      localStorage.setItem("member", 0);
      var indexmember = localStorage.getItem("member");
      this.$store.dispatch("chagemember", indexmember);
    }
  }
};
</script>
<style lang="less" scoped>
/* 顶部导航栏 */

#app {
  padding-top: 77px;
  min-width: 1200px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    height: 75px;
    background: #1d1d1d;
    border-bottom: 2px solid #dc1721;
    .logo {
      padding-top: 10px;
      padding-left: 20px;
    }
    /* 右边导航 */
    nav {
      ul.dropdown {
        position: relative;
        width: 100%;
        li {
          font-weight: 700;
          float: left;
          width: 150px;
          position: relative;
          height: 100%;
          line-height: 75px;
          a {
            display: block;
            padding: 0 8px;
            color: #9e9e9e;
            position: relative;
            z-index: 2000;
            text-align: center;
            text-decoration: none;
            font-weight: 300;
            font-size: 14px;
            i {
              font-size: 16px;
            }
          }
          a:hover {
            position: relative;
            color: #dc1721;
          }
        }
      }
    }
    .login {
      color: #a87e41;
      line-height: 75px;
      padding-right: 30px;
      padding-left: 20px;
      font-size: 14px;
      a {
        color: #a87e41;
        text-decoration: none;
        margin: 0 5px;
        font-size: 13px;
      }
    }
    .login_img {
      padding-top: 10px;
      position: relative;
      .bottom-vip {
        height: auto;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
        margin-top: 6px;
        width: 100px;
        margin-left: -15px;
        ul {
          li:hover {
            opacity: 0.7;
          }
          li {
            background: #000;
            float: none;
            margin: 0;
            a {
              display: block;
              padding: 10px;
              text-align: center;
              white-space: nowrap;
              span {
                padding-left: 6px;
                display: inline-block;
                vertical-align: top;
                color: #777;
              }
            }
          }
        }
      }
      ul {
        li {
          position: relative;
          float: left;
          margin-left: 15px;
          img {
            width: 39px;
            height: 39px;
            border: 2px solid #a87e41;
            border-radius: 35px;
            box-sizing: border-box;
          }
          h2 {
            color: #a87e41;
            font-size: 13px;
            line-height: 22px;
            font-weight: lighter;
            width: 45px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .cart_top {
            width: 32px;
            height: 39px;
            text-align: right;
            color: #fff;
            display: block;
            font-size: 12px;
            margin-left: 6px;
            background: url("./common/img/cart_ion.png") 50% no-repeat;
          }
          .icon_num {
            width: 15px;
            height: 15px;
            float: right;
            text-align: center;
            transform: scale(0.75);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}

</style>

