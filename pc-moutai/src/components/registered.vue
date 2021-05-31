<template>
  <div class="registered">
    <div class="w1200">
      <!-- 欢迎注册 -->
      <div class="welcome">
        <h2>
          <p>
            <i></i>
            <b>欢迎注册</b> |
            <span>
              已有账号
              <a href="javascript:;">请登录</a>
            </span>
          </p>
        </h2>
      </div>
      <!-- 注册板块 -->
      <div class="register">
        <!-- 个人注册板块 -->
        <h3 class="per_reg" @click="personal(0)">个人用户注册</h3>
        <div class="personal_reg">
          <div class="personal">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" error="false">
              <!-- 用户名 -->
              <el-row>
                <el-col :span="13">
                  <el-form-item label="用户名 :" prop="account">
                    <el-input v-model="ruleForm.account"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 生日 -->
              <el-row>
                <el-col :span="16">
                  <el-row>
                    <el-form-item label="生日 :" prop="b_year">
                      <el-select class="select_el" v-model="ruleForm.b_year">
                        <el-option value="1900" label="1900"></el-option>
                        <el-option value="1901" label="1901"></el-option>
                        <el-option value="1902" label="1902"></el-option>
                        <el-option value="1903" label="1903"></el-option>
                        <el-option value="1904" label="1904"></el-option>
                        <el-option value="1905" label="1905"></el-option>
                        <el-option value="1906" label="1906"></el-option>
                        <el-option value="1907" label="1907"></el-option>
                        <el-option value="1908" label="1908"></el-option>
                        <el-option value="1909" label="1909"></el-option>
                        <el-option value="1910" label="1910"></el-option>
                        <el-option value="1911" label="1911"></el-option>
                        <el-option value="1912" label="1912"></el-option>
                        <el-option value="1913" label="1913"></el-option>
                        <el-option value="1914" label="1914"></el-option>
                        <el-option value="1915" label="1915"></el-option>
                        <el-option value="1916" label="1916"></el-option>
                        <el-option value="1917" label="1917"></el-option>
                        <el-option value="1918" label="1918"></el-option>
                        <el-option value="1919" label="1919"></el-option>
                        <el-option value="1920" label="1920"></el-option>
                        <el-option value="1921" label="1921"></el-option>
                        <el-option value="1922" label="1922"></el-option>
                        <el-option value="1923" label="1923"></el-option>
                        <el-option value="1924" label="1924"></el-option>
                        <el-option value="1925" label="1925"></el-option>
                        <el-option value="1926" label="1926"></el-option>
                        <el-option value="1927" label="1927"></el-option>
                        <el-option value="1928" label="1928"></el-option>
                        <el-option value="1929" label="1929"></el-option>
                        <el-option value="1930" label="1930"></el-option>
                        <el-option value="1931" label="1931"></el-option>
                        <el-option value="1932" label="1932"></el-option>
                        <el-option value="1933" label="1933"></el-option>
                        <el-option value="1934" label="1934"></el-option>
                        <el-option value="1935" label="1935"></el-option>
                        <el-option value="1936" label="1936"></el-option>
                        <el-option value="1937" label="1937"></el-option>
                        <el-option value="1938" label="1938"></el-option>
                        <el-option value="1939" label="1939"></el-option>
                        <el-option value="1940" label="1940"></el-option>
                        <el-option value="1941" label="1941"></el-option>
                        <el-option value="1942" label="1942"></el-option>
                        <el-option value="1943" label="1943"></el-option>
                        <el-option value="1944" label="1944"></el-option>
                        <el-option value="1945" label="1945"></el-option>
                        <el-option value="1946" label="1946"></el-option>
                        <el-option value="1947" label="1947"></el-option>
                        <el-option value="1948" label="1948"></el-option>
                        <el-option value="1949" label="1949"></el-option>
                        <el-option value="1950" label="1950"></el-option>
                        <el-option value="1951" label="1951"></el-option>
                        <el-option value="1952" label="1952"></el-option>
                        <el-option value="1953" label="1953"></el-option>
                        <el-option value="1954" label="1954"></el-option>
                        <el-option value="1955" label="1955"></el-option>
                        <el-option value="1956" label="1956"></el-option>
                        <el-option value="1957" label="1957"></el-option>
                        <el-option value="1958" label="1958"></el-option>
                        <el-option value="1959" label="1959"></el-option>
                        <el-option value="1960" label="1960"></el-option>
                        <el-option value="1961" label="1961"></el-option>
                        <el-option value="1962" label="1962"></el-option>
                        <el-option value="1963" label="1963"></el-option>
                        <el-option value="1964" label="1964"></el-option>
                        <el-option value="1965" label="1965"></el-option>
                        <el-option value="1966" label="1966"></el-option>
                        <el-option value="1967" label="1967"></el-option>
                        <el-option value="1968" label="1968"></el-option>
                        <el-option value="1969" label="1969"></el-option>
                        <el-option value="1970" label="1970"></el-option>
                        <el-option value="1971" label="1971"></el-option>
                        <el-option value="1972" label="1972"></el-option>
                        <el-option value="1973" label="1973"></el-option>
                        <el-option value="1974" label="1974"></el-option>
                        <el-option value="1975" label="1975"></el-option>
                        <el-option value="1976" label="1976"></el-option>
                        <el-option value="1977" label="1977"></el-option>
                        <el-option value="1978" label="1978"></el-option>
                        <el-option value="1979" label="1979"></el-option>
                        <el-option value="1980" label="1980"></el-option>
                        <el-option value="1981" label="1981"></el-option>
                        <el-option value="1982" label="1982"></el-option>
                        <el-option value="1983" label="1983"></el-option>
                        <el-option value="1984" label="1984"></el-option>
                        <el-option value="1985" label="1985"></el-option>
                        <el-option value="1986" label="1986"></el-option>
                        <el-option value="1987" label="1987"></el-option>
                        <el-option value="1988" label="1988"></el-option>
                        <el-option value="1989" label="1989"></el-option>
                        <el-option value="1990" label="1990"></el-option>
                        <el-option value="1991" label="1991"></el-option>
                        <el-option value="1992" label="1992"></el-option>
                        <el-option value="1993" label="1993"></el-option>
                        <el-option value="1994" label="1994"></el-option>
                        <el-option value="1995" label="1995"></el-option>
                        <el-option value="1996" label="1996"></el-option>
                        <el-option value="1997" label="1997"></el-option>
                        <el-option value="1998" label="1998"></el-option>
                        <el-option value="1999" label="1999"></el-option>
                        <el-option value="2000" label="2000"></el-option>
                        <el-option value="2001" label="2001"></el-option>
                        <el-option value="2002" label="2002"></el-option>
                        <el-option value="2003" label="2003"></el-option>
                        <el-option value="2004" label="2004"></el-option>
                        <el-option value="2005" label="2005"></el-option>
                        <el-option value="2006" label="2006"></el-option>
                        <el-option value="2007" label="2007"></el-option>
                        <el-option value="2008" label="2008"></el-option>
                        <el-option value="2009" label="2009"></el-option>
                        <el-option value="2010" label="2010"></el-option>
                        <el-option value="2011" label="2011"></el-option>
                        <el-option value="2012" label="2012"></el-option>
                        <el-option value="2013" label="2013"></el-option>
                        <el-option value="2014" label="2014"></el-option>
                        <el-option value="2015" label="2015"></el-option>
                        <el-option value="2016" label="2016"></el-option>
                        <el-option value="2017" label="2017"></el-option>
                      </el-select>
                      <span style="padding:0 2px;">年</span>
                      <el-select class="select_el" v-model="ruleForm.b_month">
                        <el-option value="1" label="1"></el-option>
                        <el-option value="2" label="2"></el-option>
                        <el-option value="3" label="3"></el-option>
                        <el-option value="4" label="4"></el-option>
                        <el-option value="7" label="7"></el-option>
                        <el-option value="5" label="5"></el-option>
                        <el-option value="6" label="6"></el-option>
                        <el-option value="8" label="8"></el-option>
                        <el-option value="9" label="9"></el-option>
                        <el-option value="10" label="10"></el-option>
                        <el-option value="11" label="11"></el-option>
                        <el-option value="12" label="12"></el-option>
                      </el-select>
                      <span style="padding:0 2px;">月</span>
                      <el-select class="select_el" v-model="ruleForm.b_day">
                        <el-option value="1" label="1"></el-option>
                        <el-option value="2" label="2"></el-option>
                        <el-option value="3" label="3"></el-option>
                        <el-option value="4" label="4"></el-option>
                        <el-option value="5" label="5"></el-option>
                        <el-option value="6" label="6"></el-option>
                        <el-option value="7" label="7"></el-option>
                        <el-option value="8" label="8"></el-option>
                        <el-option value="9" label="9"></el-option>
                        <el-option value="10" label="10"></el-option>
                        <el-option value="11" label="11"></el-option>
                        <el-option value="12" label="12"></el-option>
                        <el-option value="13" label="13"></el-option>
                        <el-option value="14" label="14"></el-option>
                        <el-option value="15" label="15"></el-option>
                        <el-option value="16" label="16"></el-option>
                        <el-option value="17" label="17"></el-option>
                        <el-option value="18" label="18"></el-option>
                        <el-option value="19" label="19"></el-option>
                        <el-option value="20" label="20"></el-option>
                        <el-option value="21" label="21"></el-option>
                        <el-option value="22" label="22"></el-option>
                        <el-option value="23" label="23"></el-option>
                        <el-option value="24" label="24"></el-option>
                        <el-option value="25" label="25"></el-option>
                        <el-option value="26" label="26"></el-option>
                        <el-option value="27" label="27"></el-option>
                        <el-option value="28" label="28"></el-option>
                        <el-option value="29" label="29"></el-option>
                        <el-option value="30" label="30"></el-option>
                        <el-option value="31" label="31"></el-option>
                      </el-select>
                      <span style="padding:0 2px;">日</span>
                    </el-form-item>
                  </el-row>
                </el-col>
                <el-col :span="8" style="position: relative;">
                  <span style="line-height:40px;position: absolute;left:-78px;">注：未满18岁的不允许注册！</span>
                </el-col>
              </el-row>
              <!-- 邮箱 -->
              <el-row>
                <el-col :span="13">
                  <el-form-item label="邮箱 :" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 三级联动 -->
              <el-row>
                <el-col :span="20">
                  <el-form-item label="所在地区 :" prop="province_id">
                    <el-select v-model="ruleForm.province_id" placeholder="请选择省" @change="getCity" class="province">
                      <el-option v-for="item in province" :key="item.value" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <el-select v-model="ruleForm.city_id" placeholder="请选择市" @change="getArea" class="province">
                      <el-option v-for="item in city" :key="item.value" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <el-select v-model="ruleForm.area_id" placeholder="请选择区" class="province">
                      <el-option v-for="item in area" :key="item.value" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="13">
                  <el-form-item label="详细地址 :" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 密码 -->
              <el-row>
                <el-col :span="13">
                  <el-form-item status-icon label="密码 :" prop="password">
                    <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 确认密码 -->
              <el-row>
                <el-col :span="13">
                  <el-form-item status-icon label="确认密码 :" prop="passwords">
                    <el-input type="password" v-model="ruleForm.passwords" auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 验证手机 -->
              <el-row>
                <el-col :span="13">
                  <el-form-item label="验证手机 :" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 短信验证码 -->
              <!-- <el-row>
                <el-col :span="8">
                  <el-form-item label="短信验证码 :" prop="phone_code">
                    <el-input v-model="ruleForm.phone_code"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-button class="gain" @click="getVerifyCode" :disabled="isdisabled">获取短信验证码</el-button>
                </el-col>
              </el-row>
              <el-row v-show="isVerifyCode">
                <el-col :span="13">
                  <el-form-item>
                    <p style="font-size:12px;line-height:22px;color:#000;">
                      校验码已发出，请注意查收短信，如果没有收到，你可以在
                      <span style="color:#ed000c;">{{time_second}}</span> 秒后要求系统重新发送
                    </p>
                  </el-form-item>
                </el-col>
              </el-row> -->
              <!-- 验证码 -->
              <el-row>
                <el-col :span="9">
                  <el-form-item label="验证码 :" prop="img_code" class="haofan">
                    <el-input v-model="ruleForm.img_code" @blur="checkLpicma"></el-input>
                    <span class="shabi disappear"></span>
                  </el-form-item>
                </el-col>
                <el-col :span="3" style="margin-left:10px;">
                  <el-button class="chackCode" @click="createCode" v-text="checkCode" size="small"></el-button>
                </el-col>
              </el-row>
              <!-- 我已阅读并同意 -->
              <el-form-item prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="我已阅读并同意" name="type"></el-checkbox>
                  <a class="f14 text-red" target="_blank" href="http://www.moutaivip.com/cache/import/茅台定制用户协议.doc">
                    《茅台定制用户注册协议》
                  </a>
                </el-checkbox-group>
              </el-form-item>
              <!-- 立即注册 -->
              <el-form-item class="btn-item">
                <el-button type="danger" style="padding:12px 130px;background:#ed000c;font-size:18px;" @click="submitForm('ruleForm')">立即注册</el-button>
              </el-form-item>
              <!-- 结尾----------------------- -->
            </el-form>
          </div>
        </div>
        <!-- 企业注册板块 -->
        <h3 class="ent_reg">企业用户注册</h3>
        <div class="enterprise"></div>
      </div>
    </div>
  </div>
</template>

<script>
$(function() {});
var code;
// 导入联动插件对象
// import VDistpicker from 'v-distpicker'
export default {
  components: {
    // VDistpicker,
  },
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
      isdisabled: false, //禁用点击验证码框
      checkCode: "", //随机验证码
      province: [], //所在地区省份
      city: [], //市区
      area: [], //区县
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
  mounted() {
    this.createCode(); // 页面刷新先获取一次
    this.getProvince();
  },
  methods: {
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!'); //此处代表成功通过验证，在此处请求接口
           console.log(this.ruleForm);
          var url = "/user/register";
          this.$http.post(url, this.ruleForm).then(res => {
            // console.log(res.data.errcode);
            if (res.data.errcode == 0) {
              //注册成功，跳转到登录页面
              this.$message({
                message: "恭喜您，注册成功",
                type: "success"
              });
              setTimeout(() => {
                this.$router.push({
                  path: "/login"
                });
              }, 1000);
            } else {
              this.$message({
                message: res.data.errmsg,
                type: "warning"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
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
  }
};
</script>
<style scoped>
.select_el {
  width: 90px;
  height: 40px;
}

.chackCode {
  width: 120px;
  background: #c3e9f7;
  border: #3dabef 2px solid;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 8px;
  color: #3aabef;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
}

.haofan .shabi {
  color: #fa5555;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 29%;
  right: -226px;
}

.disappear {
  display: none;
}

.province {
  height: 40px;
  width: 108px;
}

.el-select-dropdown__item {
  width: 130px;
}

.el-checkbox-group {
  line-height: 0px;
}

.btn-item {
  margin-top: 44px;
}
</style>
