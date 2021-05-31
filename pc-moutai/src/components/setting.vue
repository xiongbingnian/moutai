<template>
  <div class="tab_container">
    <div id="tab5" class="tab_content" style="display: block; ">
      <div class="info">
        <div class="customize_li">
          <ul>
            <li class="active">
              <router-link to="/setting">基本信息</router-link>
            </li>
            <li>
              <router-link to="/avatar">头像照片</router-link>
            </li>
            <!-- <li>
              <router-link to="/moreUserInfo">更多个人信息</router-link>
            </li> -->
            <li>
              <router-link to="/address">常用收货地址</router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
          <el-row :gutter="20">
            <el-col :offset="8">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <!-- 用户名 -->
                <el-form-item label="用户名 :">
                  <span v-text="userInfoData.name"></span>
                </el-form-item>
                <!-- 昵称 -->
                <el-row>
                  <el-col :span="6">
                    <el-form-item label="昵称 :">
                      <el-input v-model="ruleForm.nickname"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 性别 -->
                <el-form-item label="性别 :">
                  <el-checkbox-group v-model="ruleForm.sex" size="mini">
                    <el-checkbox-button true-label="1">男</el-checkbox-button>
                    <el-checkbox-button true-label="2">女</el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <!-- 年龄 -->
                <el-form-item label="生日 :" prop="b_year">
                  <p>{{userInfoData.year}}年{{userInfoData.month}}月{{userInfoData.day}}</p>
                </el-form-item>
                <!-- 所在地区 -->
                <el-form-item label="所在地区 :" prop="b_year">
                  <p>{{userInfoData.province}}{{userInfoData.city}}{{userInfoData.area}}{{userInfoData.address}}</p>
                </el-form-item>
                <!-- 手机号 -->
                <el-form-item label="手机号 :" prop="b_year">
                  <span v-text="userInfoData.phone"></span>
                  <el-button @click='amendMessage("phone")' size='mini' plain>修改</el-button>
                </el-form-item>
                <!-- 邮箱 -->
                <el-row>
                  <el-col :span="6">
                    <el-form-item label="邮箱 :" prop="email">
                      <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 真实姓名 -->
                <el-row>
                  <el-col :span="6">
                    <el-form-item label="真实姓名 :" prop="real_name">
                      <el-input v-model="ruleForm.real_name"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 登录密码 -->
                <el-form-item label="登录密码 :" prop="b_year">
                  <el-button @click='amendMessage("pwd")' size='mini' plain>修改</el-button>
                </el-form-item>
                <!-- 保存 -->
                <el-form-item>
                  <el-button type="success" class="btnsave" @click="saveUserMessage">保存</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="popups_bg" v-show="popups_bg" @click="btnClose"></div>
    <!-- 修改手机号 -->
    <div class="modal" v-show="amendPhone" style="width:650px;">
      <div class="title">
        <h2>修改手机号</h2>
        <div class="btn" @click="btnClose">X</div>
      </div>
      <div class="center">
        <div class="stepA" style="display: none;">
          <img src="../common/img/lc-p1.png" style="margin-left:20px;" alt="">
          <div class="item">
            <div class="left text"></div>
            <div class="left input">
              <div class="personal_sub">
                <button type="button" onclick="passwordStepB()" style="cursor: pointer;">提交</button>
              </div>
            </div>
          </div>
        </div>
        <div class="stepB" style="display: block;">
          <img src="../common/img/lc-p2.png" style="margin-left:20px;" alt="">
          <el-form :model="ruleFormPhone" :rules="rulesPhone" ref="ruleFormPhone" label-width="160px" class="demo-ruleForm">
            <el-row style="padding-top:16px;">
              <el-col :span="17">
                <el-form-item label="新的手机号 :" prop="phone">
                  <el-input v-model="ruleFormPhone.phone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="btnsubmit" @click="phoneStepC">提交</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="stepC" style="display: none;">
          <img src="../common/img/lc-p3.png" style="margin-left:20px;" alt="">
          <div class="passwordSuccessCon" style="position:relative;height:150px;">
            <div class="SuccessPic" style="margin-top:20px;"></div>
            <div class="SuccessText" style="color:#A0A0A0;display:block;">
              <h1 style="color:#000;margin-bottom:5px;">新手机设置成功！</h1>
              请牢记您的手机号码。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 修改密码 -->
    <div class="modal" v-show="amendPwd">
      <div class="title">
        <h2>修改密码</h2>
        <div class="btn" @click="btnClose">X</div>
      </div>
      <div class="center">
        <div class="stepA" style="display: none;">
          <img src="../common/img/lc1.png" style="margin-left:40px;" alt="">
          <div class="item">
            <div class="left text">
              已验证手机：
            </div>
            <div class="left input" id="update_password_name" style="font-weight:800;font-size:20px;line-height:40px;">175XXXX908</div>
          </div>
          <div class="item validCode">
            <div class="left text">
              短信验证码：
            </div>
            <div class="left input">
              <input type="text" class="w24 validCode" id="valid_code" name="validCode">
              <button class="" style="width:150px;cursor: pointer" id="sendPhoneCode" onclick="sendSmsCodeFun(this)">
                获取短信验证码
              </button>
              <div style="clear:both;"></div>
              <p class="code_number" style="width: 350px; display: none;">校验码已发出，请注意查收短信，如果没有收到，你可以在
                <i class="sendCode">1</i>秒 后要求系统重新发送</p>
            </div>
          </div>
          <div class="item" style="display: none;">
            <div class="left text">
              验证码：
            </div>
            <div class="left input idcode-contain">
              <input type="text" placeholder="请输入右边验证码" class="w30 img_code" name="img_code">
              <div class="idcode" onclick="getImgCodeFun(this)" style="cursor:pointer">
                <img src="http://www.moutaivip.com/api/common/imgcode/getImgCode" width="100%" height="100%">
              </div>
              <div class="notClear">看不清？
                <a style="cursor:pointer" onclick="getImgCodeFun(this)">换一张</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left text"></div>
            <div class="left input">
              <div class="personal_sub">
                <button type="button" onclick="passwordStepB()" style="cursor: pointer;">提交</button>
              </div>
            </div>
          </div>
        </div>
        <div class="stepB" style="display: block;">
          <img src="../common/img/lc2.png" style="margin-left:40px;" alt="">
          <el-form :model="ruleFormPwd" :rules="rulesPwd" ref="ruleFormPwd" label-width="160px" class="demo-ruleForm">
            <el-row style="padding-top:16px;">
              <el-col :span="17">
                <el-form-item label="新的登录密码 :" prop="name">
                  <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item label="请再输入一次密码 :" prop="name">
                  <el-input v-model="ruleFormPwd.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="btnsubmit" @click="passwordStepC">提交</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="stepC" style="display: none;">
          <img src="../common/img/lc3.png" style="margin-left:40px;" alt="">
          <div class="passwordSuccessCon" style="position:relative;height:150px;">
            <div class="SuccessPic" style="margin-top:20px;"></div>
            <div class="SuccessText" style="color:#A0A0A0;display:block;">
              <h1 style="color:#000;margin-bottom:5px;">新密码设置成功！</h1>
              请牢记您新设置的密码。
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
      return {
        userInfoData: [],
        isAddressShow: '',
        amendPhone: false, //修改手机弹窗
        amendPwd: false, //修改密码弹窗
        popups_bg: false, //背景控制展示隐藏
        /* 基本信息 */
        ruleForm: {
          sex: '1',
          nickname: '',
          email: '',
          real_name: '',
          token: sessionStorage.getItem('token'),
        },
        /* 修改手机 */
        ruleFormPhone: {
          phone: '',
          token: sessionStorage.getItem('token'),
        },
        /* 修改密码 */
        ruleFormPwd: {
          password: '',
          token: sessionStorage.getItem('token'),
        },
        rules: {},
        rulesPwd: {},
        rulesPhone: {}
      };
    },
    mounted() {
      this.getUserInfo();
    },
    methods: {
      /* 保存用户信息 */
      saveUserMessage() {
//    	console.log(this.ruleForm.sex);
        let url = '/personal/updUserInfo';
        this.$http.post(url, this.ruleForm)
          .then(res => {
            if (res.data.errcode == 1) {
              this.$message.success(res.data.errmsg);
            } else this.$message.error(res.data.errmsg);
          })
      },
      /* 获取用户基本信息 */
      getUserInfo() {
        let url = '/personal/getUserInfo?token=' + this.ruleFormPhone.token + '';
        this.$http.get(url)
          .then(res => {
            if (res.data.errcode == 0) {
              this.userInfoData = res.data.data;
              return;
            } else this.$message.error(res.data.errmsg);
          })
      },
      /* 修改手机提交接口 */
      phoneStepC() {
        let url = '/personal/validNewPhone';
        this.$http.post(url, this.ruleFormPhone)
          .then(res => {
            console.log(this.ruleFormPhone)
            if (res.data.errcode == 0) {
              this.$message({
                message: res.data.errmsg,
                type: 'success'
              });
              return;
            }
            this.$message.error(res.data.errmsg);
          })
      },
      /* 修改密码提交接口 */
      passwordStepC() {
        var url = '/personal/modifyPassword';
        this.$http.post(url, this.ruleFormPwd)
          .then(res => {
            if (res.data.errcode == 0) {
              this.$message({
                message: res.data.errmsg,
                type: 'success'
              });
              return;
            }
            this.$message.error(res.data.errmsg);
          })
      },
      /* 关闭 */
      btnClose() {
        this.amendPhone = false;
        this.amendPwd = false;
        this.popups_bg = false;
        $(".modal").removeClass("bounceInDown");
      },
      /* 修改密码 */
      amendMessage(message) {
        if (message == 'phone') {
          this.amendPhone = true;
        } else if (message == 'pwd') {
          this.amendPwd = true;
        }
        this.popups_bg = true;
        $(".modal").addClass("bounceInDown");
      },
    }
  };

</script>
<style scoped>
  .btnsave {
    padding: 10px 150px;
    background: #d8000b;
    border-color: #d8000b;
    margin-top: 40px;
    font-size: 20px;
    transform: translateX(-30%);
  }

  .btnsave:hover {
    background: #ed000c;
    border-color: #ed000c;
  }

  .btnsubmit {
    background: #d8000b;
    border-color: #d8000b;
    font-size: 18px;
    color: #fff;
    width: 300px;
    margin-left: -30px;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background: #d8000b !important;
    border-color: #d8000b !important;
  }

</style>
