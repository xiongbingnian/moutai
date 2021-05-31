<template>
  <div id="login">
    <div class="img-wrap">
      <img src="../common/img/login_bg.jpg" alt="">
    </div>
    <div class="login_box">
      <h2>欢迎回来</h2>
      <div class="login_from">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" error="false">
          <div class="accountLogin">
            <h1>
              <b>—————</b> 账户登录
              <b>—————</b>
              <p style="color:red;font-weight: 900;font-size:30px;">账号ithhx908密码wwwwww</p>
            </h1>
            <p class=" codeLoginText">
              <a href="javascipt:void(0)">
                <i class="el-icon-mobile-phone"></i>验证码登录</a>
            </p>
            <div class="item" style="padding-top: 5px;">
              <el-form-item prop="account">
                <el-input type="text" placeholder="用户名/邮箱/已验证手机号" v-model="ruleForm.account"></el-input>
              </el-form-item>
            </div>
            <div class="item">
              <el-form-item prop="passwd">
                <el-input type="password" placeholder="密码" v-model="ruleForm.passwd" @keyup.enter.native="submitForm('ruleForm')"></el-input>
              </el-form-item>
            </div>
            <div class="automatic">
              <div class="left">
                <el-checkbox v-model="checked">自动登录</el-checkbox>
              </div>
              <div class="right">
                <i class="el-icon-question"></i>
                <a href="javascript:;" class="forgetText">忘记密码？</a>
              </div>
            </div>
            <div class="login_btn">
              <button type="button" @click="submitForm('ruleForm')">登 录</button>
            </div>
            <div class="err"> </div>
          </div>
          <div class="codeLogin"></div>
          <p class="notAccount">
            还没有账号?
            <router-link to="/registered">立即注册</router-link>
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
/* vm */
import { vm } from "common/js/vm.js";
/* cookie */
import { setCookie, getCookie } from "common/js/cookie.js";
/* 实例化 */
export default {
  data() {
    return {
      checked: false,
      ruleForm: {
        account: "",
        passwd: ""
      },
      /* 验证 */
      rules: {
        /* 用户名 */
        account: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        /* 密码 */
        passwd: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    /* 点击提交验证 */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!'); //此处代表成功通过验证，在此处请求登录接口
          var url = "/user/im_login";
          this.$http
            .post(url, this.ruleForm)
            .then(res => {
              sessionStorage.setItem("token", res.data.data.token);
              if (res.data.errcode == 0) {
              	
              	//获取购物车的数量
              	let url = `/Cart/cart_list?token=${res.data.data.token}`;
				      	this.$http.get(url).then(res => {
						        if (res.data.errcode == 0) {
						        	sessionStorage.setItem("carNum", res.data.data.length);
						        	vm.$emit("changeshow");
						        } else {
						          sessionStorage.setItem("carNum", 0);
						        }
						        console.log(sessionStorage.getItem("carNum"));
					      });
					      
                // setCookie('token', res.data.data.token, 0.0001666)
                sessionStorage.setItem("userName", res.data.data.name);
                sessionStorage.setItem("userImg", res.data.data.image);
                // 密码正确，跳转
                // this.$message.success(res.data.errmsg);
                // 1.0 写入localStroage的值为true （key="islogin"）
                sessionStorage.setItem("islogin", true);
                // 2.0 触发vm.$emit通知layout.vue的监听方法
                vm.$emit("changeshow");
                var currentRoutePath = sessionStorage.getItem(
                  "currentRoutePath"
                );
                if (!currentRoutePath) {
                  currentRoutePath = "/home";
                }
                this.$router.push({
                  path: currentRoutePath
                });
                this.$notify({
                  title: "已登录状态"
                });
              } else {
                // 密码错误，给出提示
                this.$message.error(res.data.errmsg);
              }
            })
            .catch(res => {
              this.$message.error("服务器异常");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
  #login{
    min-width: 1200px;
  }
</style>

