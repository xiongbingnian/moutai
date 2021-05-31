<template>
  <div class="address">
    <b-header :title="title"></b-header>
    <div class="fluid-container" v-show="fluid">
    	<img class="register-head" src="./register-head.png" alt="" />
    	<button @click="toRegistered()" class="register-btn">个人用户注册</button>
    </div>
	<div class="registered-container" v-show="registered">
	  <h3 class="register-title">个人用户注册</h3>
	  <mt-field label="用户名 :" v-model="ruleForm.account">*</mt-field>
	  <!--<mt-field v-model="ruleForm.b_year" label="年 :"  >*</mt-field>
	  <mt-field v-model="ruleForm.b_month" label="月 :"   >*</mt-field>
	  <mt-field v-model="ruleForm.b_day" label="日 :"   >*</mt-field>-->
	  <mt-field v-model="birthday" label="生日 :"  type="date" >*</mt-field>
	  <mt-field label="邮箱 :" v-model="ruleForm.email">*</mt-field>
      <!-- 所在地区 -->
      <a class="mint-cell mint-field">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">所在地区：</span>
          </div>
          <div class="mint-cell-value">
            <select @change="getCity(ruleForm.province_id)" v-model="ruleForm.province_id">
              <option></option>
              <option v-for="(item,index) in province" :key="index" :value="item.id">{{item.name}}</option>
            </select>
            <select @change="getArea(ruleForm.city_id)" v-model="ruleForm.city_id">
              <option></option>
              <option v-for="(item,index) in city" :key="index" :value="item.id">{{item.name}}</option>              
            </select>
            <select v-model="ruleForm.area_id">
              <option></option>
              <option v-for="(item,index) in area" :key="index" :value="item.id">{{item.name}}</option>              
            </select>
            <div class="mint-field-other">*</div>
          </div>
        </div>
      </a>
      <mt-field label="详细地址 :" v-model="ruleForm.address">*</mt-field>
      <mt-field label="密码 :" v-model="ruleForm.password" type="password">*</mt-field>
      <mt-field label="确认密码 :" v-model="ruleForm.passwords" type="password">*</mt-field>
      <mt-field label="验证手机 :" v-model="ruleForm.phone">*</mt-field>
      <mt-field class="code" label="验证码 :" v-model="ruleForm.img_code" @blur="checkLpicma">
      	<button class="btn-code" @click="createCode" v-text="checkCode"></button>
      </mt-field>
      <label class="agreement" for="agreement">
	    <input type="checkbox" checked="checked" v-model="checked" class="select-icon" id="agreement"/>
	   	 我已阅读并同意
	    <!--<a class="f14 text-red" target="_blank" href="http://www.moutaivip.com/cache/import/茅台定制用户协议.doc">-->
          	《茅台定制用户注册协议》
        <!--</a>-->
	  </label>
      <div class="submitBtn">
	    <button type="button" id="submitBtn" @click="submitForm('ruleForm')">立即注册</button>
	  </div>
	  </div>
	  <!-- 提示框 -->
    <modal :modalContent="modalContent" :inStatus="inStatus"
      :modalzIndex="modalzIndex" 
      @selectConfirmCancel="isConfirmCancel"
      :modalTitle="modalTitle"
    >
    </modal>
  </div>
</template>
<script>
import BHeader from "base/b-header/b-header";
import Modal from "base/modal/modal";
import MoutaiLoading from "base/moutai-loading/moutai-loading";
import { Toast } from "mint-ui";
var code;
export default {
  data() {
  	/* 定义一个方法用来验证邮箱 */
    var checkEmail = (rule, value, callback) => {
      // 定义一个正则表达式
      var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
      // 匹配用户输入的值
      if (!reg.test(value)) {
        return callback(new Error("您输入的emial格式不正确"));
      }
      callback();
    };
    /* 定义一个方法用来验证手机号的格式 */
    var checkMobile = (rule, value, callback) => {
      // 定义一个手机号码的正则表达式
      var reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,5,6,7,8])|(19[7]))\d{8}$/;
      // 匹配用户输入的值
      if (!reg.test(value)) {
        return callback(new Error("手机号码格式错误"));
      }
      callback();
    };
    /* 密码验证 */
    var checkPassword = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (!reg.test(value)) {
        return callback(new Error("密码中必须包含一个字母"));
      }
      callback();
    };
    /* 两次密码必须一致 */
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
    	checked:true,
      fluid:true,
      registered:false,
      title: "注册",
      inStatus: 1,
      modalzIndex: -1,
      modalTitle: "",
      modalContent: "",
      isdisabled: false, //禁用点击验证码框
      checkCode: "", //随机验证码
      province: [], //所在地区省份
      city: [], //市区
      area: [], //区县
      birthday:"",//生日
      /* 表单数据 */
      ruleForm: {
        province_id: "", //选择之后的省id
        city_id: "", //选择之后的市id
        area_id: "", //选择之后的区id
        account: "", //用户名
        email: "", //邮箱
        address: "", //详细地址
        password: "", //密码
        passwords: "", //确认密码
        phone: "", // 手机号码
        phone_code: "", //手机验证码
        img_code: "", //验证码
        b_year: "", //年
        b_month: "", //月
        b_day: "", //日
        type: []
      },
      isShow: false,
      time_second: "", //时间-秒
      isVerifyCode: false, //验证码提示隐藏
      timer: null, // 计时器器

      /* 验证 */
      rules: {
        /* 用户名 */
        account: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        /* 密码 */
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          {
            validator: checkPassword,
            trigger: "blur"
          }
        ],
        /* 确认密码 */
        passwords: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          {
            validator: checkPassword,
            trigger: "blur"
          },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        /* 邮箱 */
        email: [
          {
            required: true,
            message: "请输入您的邮箱",
            trigger: "blur"
          },
          {
            validator: checkEmail,
            trigger: "blur"
          }
        ],
        /* 生日 */
        b_year: [
          {
            required: true,
            message: "请选择您的生日",
            trigger: "blur"
          }
        ],
        /* 所在地区 */
        province_id: [
          {
            required: true,
            message: "请输入您所在的地址",
            trigger: "blur"
          }
        ],
        /* 详细地址 */
        address: [
          {
            required: true,
            message: "请输入您的详细地址",
            trigger: "blur"
          }
        ],
        /* 手机 */
        phone: [
          {
            required: true,
            message: "请输入您的手机号码",
            trigger: "blur"
          },
          {
            validator: checkMobile,
            trigger: "blur"
          }
        ],
        /* 手机验证码 */
        phone_code: [
          {
            required: true,
            message: "请输入短信验证码",
            trigger: "blur"
          }
        ],
        /* 验证码 */
        img_code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
        /* 已阅读 */
        type: [
          {
            type: "array",
            required: true,
            message: "请先同意《茅台定制用户注册协议》",
            trigger: "change"
          }
        ]
      }
    };
  },
  components: {
    BHeader,
    Modal,
    MoutaiLoading
  },
  methods: {
	toRegistered(){
	  this.fluid=false;
      this.registered=true;
	},
  	/* 提示框显示 */
    modalIsShow(modalTitle, modalContent) {
      this.inStatus = 0;
      this.modalzIndex = 1050;
      this.modalTitle = modalTitle;
      this.modalContent = modalContent;
    },
    modelIsHide() {
      this.inStatus = 1;
      /* 动画的事件是300毫秒，所以要用300毫秒的延时来执行隐藏，不然没有动画效果 */
      setTimeout(() => {
        this.modalzIndex = -1;
      }, 300);
    },
    /* 提示框确认与取消按钮 */
    isConfirmCancel(status) {
      this.modelIsHide();
    },
    // 点击获取区县
    getArea(id) {
      var url = "/province/getzonelist?id=" + id + "&zoneType=3";
      this.$http.get(url).then(res => {
        this.area = res.data.data.dataList;
      });
    },
    // 点击获取市区
    getCity(id) {
      var url = "/province/getzonelist?id=" + id + "&zoneType=2";
      this.$http.get(url).then(res => {
        this.city = res.data.data.dataList;
      });
    },
    // 自动获取省份
    getProvince() {
      var url = "/province/getzonelist";
      this.$http.get(url).then(res => {
        this.province = res.data.data.dataList;
      });
    },
    //点击个人注册
    personal(index) {
      this.num = index;
    },
	/* 点击提交验证 */
    submitForm(formName) {
			this.birthday.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
			this.ruleForm.b_year=RegExp.$1; //年
      this.ruleForm.b_month=RegExp.$2; //月
      this.ruleForm.b_day=RegExp.$3;//日
      if(this.checked==true){
      	this.ruleForm.type=[];
        this.ruleForm.type.push("已阅读并同意");
      }else{
      	this.ruleForm.type=[];
      	this.ruleForm.type.push("没有阅读并同意");
      }
      console.log("协议"+this.ruleForm.type);
      let url = "/user/register";
      this.$http.post(url, this.ruleForm).then(res => {
        //console.log(res.data);
        if (res.data.errcode == 0) {
          //注册成功，跳转到登录页面
//        this.$message({
//          message: "恭喜您，注册成功",
//          type: "success"
//        });
          setTimeout(() => {
            this.$router.push({
              path: "/login"
            });
          }, 1000);
        } else {
          this.modalIsShow("提示",res.data.msg);
//        this.modalIsShow("提示",res.data.errmsg);
        }
      });
    }, 
    /* 获取验证码 */
    getVerifyCode() {
      $(".gain").addClass("disabled"); //点击添加class
      const time_count = 8; //声明时间
      if (!this.timer) {
        //目前的timer是null，此处要用了非null==ture，就执行下面代码，如果执行之后timer就变成了有值，再次点击就不会执行了
        this.time_second = time_count;
        this.isVerifyCode = true;
        this.timer = setInterval(() => {
          if (this.time_second > 0 && this.time_second <= time_count) {
            this.time_second--;
          } else {
            $(".gain").removeClass("disabled"); //移除disabled
            this.isVerifyCode = false;
            clearInterval(this.timer);
            this.timer = null; //重置为null
          }
        }, 1000);
      }
    },
    /* 图片验证码 */
    createCode() {
      code = "";
      var codeLength = 4; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
      this.checkCode = code; //把code值赋给验证码
    },
    // 失焦验证图和密码
    checkLpicma() {
      this.ruleForm.img_code.toUpperCase(); //取得输入的验证码并转化为大写
      if (this.ruleForm.img_code == "") {
        $(".shabi").slideUp(100);
        // $(".login_content1 span:eq(2)").text("请输入验证码")
        // $(".login_content1 span:eq(2)").removeClass("disappear");
      } else if (this.ruleForm.img_code.toUpperCase() != this.checkCode) {
        //若输入的验证码与产生的验证码不一致时
        console.log(this.ruleForm.img_code.toUpperCase());
        console.log(code);
        this.$message({
          message: "验证码错误",
          type: "error"
        });
        // $(".shabi").text("验证码不正确")
        // $(".shabi").slideDown(100)
        // this.createCode(); //刷新验证码
        // this.ruleForm.img_code = '';
      } else {
        //输入正确时
        // $(".login_content1 span:eq(2)").addClass("disappear");
        // $(".login_content1 span:eq(2)").text("请输入验证码")
        // $(".shabi").slideUp(100)
        this.$message({
          message: "验证码正确",
          type: "success"
        });
        return true;
      }
    }
  },
  mounted() {
    this.createCode(); // 页面刷新先获取一次
    this.getProvince();
  }
};
</script>
<style lang="stylus">
.registered-container {
  padding:0 0.2rem 0.4rem ;

  .mint-cell-wrapper {
    display: block;
  }

  .mint-field {
    background: #f7f7f7;

    .mint-cell-title {
      line-height: 0.8rem;
      font-weight: 400;
    }

    .mint-cell-value {
      position: relative;

      input {
        width: 96%;
        border: 1px #a6a6a6 solid;
        height: 0.88rem;
        background: #fff;
        padding-left: 0.1rem;
      }

      input:focus {
        border: 1px solid #d8000b;
        box-shadow: 0 0 4px rgba(216, 0, 16, 0.2);
      }

      select {
        margin-right: 0.3rem;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        height: 0.88rem;
        line-height: 0.54rem;
        border-radius: 0;
        border: 1px solid #a6a6a6;
        font-size: 0.3rem;
        padding: 0.15rem 0.35rem 0.15rem 0.16rem;
        width: 38%;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        color: #555;

        option {
          font-weight: normal;
          display: block;
          white-space: pre;
          min-height: 1.2em;
          padding: 0px 2px 1px;
          text-transform: none;
        }
      }

      select:focus {
        border: 1px solid #d8000b;
        box-shadow: 0 0 4px rgba(216, 0, 16, 0.2);
      }

      select:nth-child(3) {
        margin-right: 0;
      }

      .mint-field-clear {
        position: absolute;
        right: 12px;
      }

      .mint-field-other {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -0.2rem;
        color: #d8000b;
      }
    }
  }

  .mint-button {
    margin: 20px auto;
    display: block;
    width: 98%;
    border-radius: 0;
    font-size: 0.44rem;
  }

  .help-block {
    color: #d8000b;
    line-height: 0.3rem;
    font-size: 0.24rem;
    display: block;
    padding: 0.2rem;
  }
}

.mint-toast-text {
  line-height: 22px;
}
.customize-text{
	display: block;
	padding: 0.16rem 0.18rem;
	height: 2.2rem;
	line-height: 0.3rem;
	font-size: 0.24rem;
	resize: none;
	overflow: visible;
	width: 94%;
	margin: 0 .2rem;
	box-sizing: border-box;
}
#submitBtn{
	margin: 20px auto;
	display: block;
	width: 94%;
	line-height: .88rem;
	font-size: 0.44rem;
	color: #fff;
	background-color: #ef4f4f;
	border: none;
}
.mint-cell-wrapper{
	background: none;
}
.code .mint-cell-value{
	width: 70%!important;
}
.btn-code{
	position: absolute;
	top: -0.4rem;
	width: 1.6rem;
	background: #c3e9f7;
    border: #3dabef 2px solid;
    color: #3dabef;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 500;
    height: 0.8rem;
}
.mint-cell-text {
    vertical-align: middle;
    font-size: 0.25rem;
}
.register-head{
	margin: 1rem auto .82rem;
    display: block;
    width: 2.32rem;
}
.register-btn{
	margin: 0 auto 0.6rem;
    display: block;
    width: 5.6rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    background-color: #1b1b1b;
    color: #fff;
    border: none;
}
.register-title{
	text-align: center;
    font-size: .4rem;
    color: #d8000b;
    border-bottom: 1px solid #cbcbcb;
    padding: 0.4rem 0;
}
.agreement {
    margin: 0.2rem auto 0;
    display: block;
    text-align: center;
}
</style>
