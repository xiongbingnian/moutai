<template>
  <div id="personality">
    <div class="personality_auto">
      <div class="img-wrap">
        <img src="../common/img/personality_auto_bg.jpg" alt="">
      </div>
    </div>
    <div class="personality_content">
      <h2> 灵活自由的定制内容</h2>
    </div>
    <div class="head  personality">
      <div class="personality_sj">
        <img src="../common/img/sj.png">
      </div>
      <div class="personality_a">
        <div class="title">
          <b>a</b>

          <h2>从选择一款您喜欢的酒质开始</h2>
        </div>

        <div class="content">
          <ul>
            <li>
              <h2>贵州茅台酒</h2>
              <ul style="width: 55%">
                <li>飞天</li>
                <li>五星</li>
                <li>精品</li>
              </ul>
            </li>

            <li>
              <h2>贵州茅台年份酒</h2>
              <ul style="width: 75%">
                <li>15年</li>
                <li>30年</li>
                <li>50年</li>
                <li>80年</li>
              </ul>
            </li>

            <li>
              <h2>大曲酱香系列酒</h2>
              <ul style="width: 65%;">
                <li style="width: 33.333%;padding: 0">仁酒</li>
                <li style="width: 33.333%;padding: 0"> 汉酱</li>
                <li style="width: 33.333%;padding: 0"> 珍品王子</li>
                <li style="width: 33.333%;padding: 0"> 酱门经典</li>
                <li style="width: 33.333%;padding: 0">王子酒</li>
                <li style="width: 33.333%;padding: 0">迎宾酒</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
      <div class="personality_b">
        <div class="title">
          <b>b</b>
          <h2>定制范围</h2>
        </div>

        <div class="content">
          <ul class="clearfix">
            <li class="personality_pg">
              <h2>瓶盖</h2>
            </li>
            <li class="personality_jb">
              <h2>酒标</h2>
            </li>
            <li class="personality_jp">
              <h2>酒瓶</h2>
            </li>
            <li class="personality_jj">
              <h2>酒质</h2>
            </li>
            <li class="personality_bz">
              <h2>包装</h2>
            </li>

          </ul>
        </div>

      </div>
      <div class="personality_c">
        <div class="title">
          <b>c</b>
          <h2>起定量</h2>
        </div>
        <div class="content">
          <ul>
            <li>
              <h3>个性化定制＋贵州茅台酒</h3>
              <h4>1吨起定</h4>
            </li>
            <li>
              <h3>个性化定制＋贵州茅台年份酒</h3>
              <h4>600瓶起定</h4>
            </li>
            <li>
              <h3>个性化定制＋大曲酱香系列酒</h3>
              <h4>50吨起定</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="personality_d">
        <div class="title">
          <b>d</b>
          <h2>定制周期</h2>
        </div>
        <div class="content">
          <h3>个性化定制的产品周期</h3>
          <h2>大约为90-110个工作日</h2>
          <p>（特殊情况除外）</p>
        </div>
      </div>
    </div>
    <div class="personality_content">
      <h2>专业规范化的定制流程</h2>
    </div>
    <div class="personality_bg">
      <div class="personality_sj">
        <img src="../common/img/sj.png">
      </div>
      <div class="personality_bg_content"></div>
      <div class="process">
        <ul>
          <li class="process_1">
            <div class="title">
              <b>1</b>
              <h2>产品设计确认</h2>
            </div>
            <p>
              根据您的需求和喜好，专业设计师会在5-7个工作日内提供专业的设计支持。您只需提供产品定制内容所涉及的素材授权书、商标注册证复印件等具体相关材料即可。
            </p>
          </li>
          <li class="process_2">
            <div class="title">
              <b>2</b>
              <h2>签约并付预付款</h2>
            </div>
            <p>
              合同签订，需要您按照双方确认的预付款金额先行支付。
            </p>
          </li>
          <li class="process_3">
            <div class="title">
              <b>3</b>
              <h2>产品生产</h2>
            </div>
            <p>
              完成预付款的支付，您的茅台酒进入生产阶段。从包装打样到确认，再到生产、包装和出库，整个生产过程至少80-100个工作日。
            </p>
          </li>
          <div class="line"></div>
          <li class="process_4">
            <div class="title">
              <b>4</b>
              <h2>尾款支付</h2>
            </div>
            <p>
              产品生产完成，您支付尾款后即可安排物流配送。
            </p>

          </li>
          <li class="process_5">

            <div class="title">
              <b>5</b>
              <h2>物流配送</h2>
            </div>
            <p>空运和陆运两种物流方式供您选择，保证快速安全便捷。</p>
          </li>
          <li class="process_6">
            <div class="title">
              <b>6</b>
              <h2>确认收货</h2>
            </div>
            <p>收到产品确认无任何问题后签收，客服人员会根据您的需求开具发票并快递，您的个性化产品定制之旅正式完成，接下来就请尽情享受您的专属茅台酒！</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 展示区 -->

    <div class="process_bottom">
      <div class="process_but_content">
        <button type="button" id="cusMadeBtn" class="btn-gray" @click="cusMadeBtn">立即定制
          <i class="el-icon-d-arrow-right"></i>
        </button>
      </div>
      <div class="container head" v-if="isContainer">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <div class="form-head">
            请您填写个性化需求，专业客户经理将会第一时间跟您联系：
          </div>
          <div class="clearfix">
            <div class="col-xs-7 left">
              <textarea class="form-control desc-msg" v-model="ruleForm.remark" placeholder="请您填写个性化需求..." style="margin-left:0;"></textarea>
            </div>
            <div class="col-xs-5 right">
              <el-form-item label="姓名 :" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话 :" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <!-- 所在地区 -->
              <el-form-item label="所在地区 :">
                <el-col :span="8">
                  <el-form-item prop="province_id">
                    <el-select v-model="ruleForm.province_id" placeholder="请选择省" @change="getCity" class="province">
                      <el-option v-for="(item,index) in province" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="city_id">
                    <el-select v-model="ruleForm.city_id" placeholder="请选择市" @change="getArea" class="province">
                      <el-option v-for="(item,index) in city" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="area_id">
                    <el-select v-model="ruleForm.area_id" placeholder="请选择区" class="province">
                      <el-option v-for="(item,index) in area" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="期望完成时间 :" prop="expect_date">
                <div class="block">
                  <el-date-picker v-model="ruleForm.expect_date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-col :span="22">
                <el-form-item label="期望定制数量 :" prop="expect_quantity">
                  <el-input v-model="ruleForm.expect_quantity"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <span style="line-height:40px;padding-left:15px;">瓶</span>
              </el-col>
              <el-col :span="16">
                <el-form-item label="验证码 :" prop="code">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
              </el-col>
            </div>
          </div>
          <div class="submitBtn">
            <button type="button" id="submitBtn" @click="customSubmit">马上提交</button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isContainer: false,
      province: [], //所在地区省份
      city: [], //市区
      area: [], //区县
      ruleForm: {
        remark: "", // 个性需求
        name: "", // 名称
        phone: "", // 手机号
        province_id: "", //选择之后的省id
        city_id: "", //选择之后的市id
        area_id: "", //选择之后的区id
        expect_date: "", //期望完成日期
        expect_quantity: "", // 期望数量
        token: sessionStorage.getItem("token")
      },
      rules: {}
    };
  },
  methods: {
    /* 个性定制提交 */
    customSubmit() {
      // console.log(this.ruleForm)
      let url = "/customized/index";
      this.$http.post(url, this.ruleForm).then(res => {
        if (res.data.errcode == 0) {
          this.$message.success(res.data.errmsg);
          return;
        } else this.$message.error(res.data.errmsg);
      });
    },
    /* 点击立即定制显示隐藏 */
    cusMadeBtn() {
      let token = sessionStorage.getItem("token");
      if (token) {
        this.isContainer = !this.isContainer;
        $(".btn-gray").toggleClass("active");
      } else {
        this.$message.error("未登录，请你先登录");
        localStorage.setItem("currentRoutePath", "/personality");
        this.$router.push({
          path: "/login"
        });
      }
    },
    // 点击获取区县
    getArea(id) {
      let url = "/province/getzonelist?id=" + id + "&zoneType=3";
      this.$http.get(url).then(res => {
        this.area = res.data.data.dataList;
      });
    },
    // 点击获取市区
    getCity(id) {
      let url = "/province/getzonelist?id=" + id + "&zoneType=2";
      this.$http.get(url).then(res => {
        this.city = res.data.data.dataList;
      });
    },
    // 自动获取省份
    getProvince() {
      let url = "/province/getzonelist";
      this.$http.get(url).then(res => {
        this.province = res.data.data.dataList;
      });
    }
  },
  mounted() {
    this.getProvince();
    let token = sessionStorage.getItem("token");
    if (token) {
      this.isContainer = !this.isContainer;
      $(".btn-gray").toggleClass("active");
    }
  }
};
</script>
<style scoped>
.personality_bg {
  background: url("../common/img/personality_bg.png") center no-repeat;
}
</style>
