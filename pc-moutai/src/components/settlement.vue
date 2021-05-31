<template>
  <div class="cart_bg">
    <div class="cart">
      <div class="title">
        <h2>
          <p>
            <i class="ionic  set_ion"></i> 结算页</p>
        </h2>
      </div>

      <div class="cart_title">
        <h2>填写并核对订单信息</h2>
      </div>
      <div>
        <div class="receiver">
          <h2 class="title">收货人信息
            <span class="right red receiver-add" @click='editAddress("newid")'>新增收货地址</span>
          </h2>
          <div class="addres_item" v-for="(item,index) in addressList" :key="index" v-if="addressList.length>0">
            <a href="javascript:;">
              <el-radio v-model="ruleForm1.address_id" :label="item.id" @change="ischeckBox(item)">{{ item.name }} {{item.province}} {{item.city}} {{item.area}} {{item.address}} {{item.phone}}</el-radio>
            </a>
            <i class="right receiver-edit" @click="editAddress(item.id)">编辑</i>
            <i class="right receiver-delete" @click="delAddress(item.id)">删除</i>
          </div>
        </div>
        <div class="receiver">
          <h2 class="title">发票信息
            <span class="red" style="display:inline-block;padding-left: 5px;">个人用户只能开普通发票，只有企业才能开增值税专票</span>
          </h2>
          <div class="addres_item black ">
          	<span>普通发票</span>
          	<span>{{ruleForm1.invoice_title}}</span>
          	<span>个人</span>
          	<span>{{ruleForm1.invoice_type}}</span>
            <i class="right invoice-edit" @click="modification">修改</i>
          </div>
        </div>
        <div class="receiver">
          <h2 class="title">送货清单</h2>
          <div class="shop_item ">
            <div class="left Distribution">
              <h3>配送方式</h3>
              <span>茅台定制选择的物流</span>
            </div>
            <div class="right">
              <h3>商品清单</h3>
              <div class="shop_list clearfix" v-for="(item,index) in settlementData" :key="index">
                <div class="col-xs-12 clearfix" style="border-bottom:1px solid #ddd">
                  <div class="left img">
                    <img :src="item.image" style="width:150px;height:150px">
                  </div>
                  <div class="right">
                    <div class="shop_list_title">
                      <div class="w5 left">{{item.name}}</div>
                      <div class="w25 left">x{{item.num}}</div>
                      <div class="w25 red  left">￥{{item.count_price * item.num}}</div>
                    </div>
                    <div class="shop_content gray">商品规格： {{item.nickname}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="receiver">
          <h2 class="title">添加订单备注</h2>
          <div class="textarea_item  textarea">
            <textarea class="box"></textarea>
            <span>
              <b class="red">提示：</b>请勿填写有关支付、收货、发票方面的信息</span>
          </div>
        </div>
        <div class="contract">在线合同：
          <span>在线定制合同.docx</span>
          <a href="javascript:window.open('http://moutaivip.com/cache/import/定制酒合同.doc');">下载</a>
        </div>
        <div class="total_list">
          <i class="red">{{totalNum}}</i>件定制商品:
          <span class="red">￥{{totalAmout}}</span>
          <div class="total_Freight">运费：
            <span class="red">￥{{freight}}</span>
          </div>
          <div class="totals">总价：
            <span class="red">￥{{totalAmout + freight}}</span>
          </div>
          <p>寄送至：{{send}} &nbsp;&nbsp; 收货人：{{consignee}} </p>
          <p class="text-red" v-if="sendConsignee">您还没有确认收货地址，请先确认您的收货地址</p>
        </div>
        <div class="Orders">
          <span @click="subOrder">提交订单</span>
        </div>
      </div>

    </div>
    <div class="popups_bg" v-show="popupsBg" @click="btnClose"></div>
    <div class="modal" v-show="isnewAddress" style="position: absolute;width:800px;">
      <div class="title">
        <h2>编辑收货地址信息</h2>
        <div class="btn" @click="btnClose">X</div>
      </div>
      <div class="center">
        <el-row>
          <el-col :span="12" :offset="5">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <!-- 收货人 -->
              <el-form-item label="收货人 :" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <!-- 身份证号码 -->
              <el-form-item label="身份证号码 :" prop="idcard">
                <el-input v-model="ruleForm.idcard"></el-input>
                <p class="hint">因货物贵重，为了包装您的产品和财产安全，请输入身份证号并以此作为收货凭证，谢谢。</p>
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
              <!-- 详细地址 -->
              <el-form-item label="详细地址 :" prop="full_address">
                <el-input v-model="ruleForm.full_address"></el-input>
              </el-form-item>
              <!-- 手机号码 -->
              <el-form-item label="手机号码 :" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <!-- 邮编 -->
              <el-form-item label="邮编 :" prop="postcode">
                <el-input v-model="ruleForm.postcode"></el-input>
              </el-form-item>
              <!-- 保存 -->
              <el-form-item>
                <el-button class="btnsave" @click="submitForm('ruleForm')">保存收货人信息</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="invoice" v-show="invoice">
      <div class="title">
        <h2>发票信息<span @click="closeInvoice">X</span></h2>
      </div>
      <div class="conter">
        <div class="tit">
          <h3><span>普通发票</span></h3>
        </div>
        <div class="con">
          <label>
            <span>发票抬头：</span>
            <input type="text" v-model="invoiceTitle">
          </label>
          <label>
            <span>发票内容：</span>
            <button type="button" 
		        	v-for='(item,index) in details' 
		        	@click="change(index)" 
		        	:class='{active:index===number}'
		        	>{{item.name}}</button>  
          </label>
          <button type="button" class="save" @click="saveInvoice(invoiceTitle)">保存</button>
          <button type="button" class="esc" @click="closeInvoice">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const ERR_OK = 0;
export default {
  data() {
    return {
      popupsBg: false,
      invoice: false,
      settlementData: [],
      invoiceTitle:"",
      ruleForm: {
        name: "", //收货人
        province_id: "", //选择之后的省id
        city_id: "", //选择之后的市id
        area_id: "", //选择之后的区id
        idcard: "", // 身份证
        postcode: "", //邮编
        phone: "", //手机号
        full_address: "", //详细地址
        id: "",
        token: sessionStorage.getItem("token")
      },
      ruleForm1: {
        token: sessionStorage.getItem("token"),
        cart_arr: [], //订单id
        cart_num_arr: [], //订单数量
        address_id: "", //地址id
        invoice_title: "发票抬头未设定", //发票名称
        invoice_type: "明细" //发票类型
      },
      province: [], //所在地区省份
      city: [], //市区
      area: [], //区县
      addressList: [], //地址数据列表
      isnewAddress: false,
      rules: {},
      send: "",
      consignee: "",
      sendConsignee: true,
      totalAmout: 0,
      freight: 0,
      totalNum: 0,
      number:0,
      details:[
	      {
	         name: "明细",
	      },
					{
	         name: "耗材",
	      }
      ]
    };
  },
  created() {
    this._getsettlementData();
  },
  mounted() {
    this._getAddress();
    this._getProvince();
  },
  computed: {},
  methods: {
  	change: function(index) {  
	    this.number= index;          
	  },
	  saveInvoice(invoiceTitle){
	  	if(invoiceTitle!=""){
	  		this.invoice = false;
	      this.popupsBg = false;
	      this.ruleForm1.invoice_title=invoiceTitle;
	      this.ruleForm1.invoice_type=this.details[this.number].name;
	  	}else{
	  		this.$message({
          message: "请填写发票抬头",
          type: "error"
        });
	  	}
	  },
    closeInvoice() {
      this.invoice = false;
      this.popupsBg = false;
    },
    modification() {
      this.invoice = true;
      this.popupsBg = true;
    },
    _getsettlementData() {
      this.settlementData = JSON.parse(localStorage.getItem("settlementData"));
      for (let i = 0; i < this.settlementData.length; i++) {
        this.ruleForm1.cart_arr.push(this.settlementData[i].id);
        this.ruleForm1.cart_num_arr.push(this.settlementData[i].num);
        this.totalAmout += parseInt(
          this.settlementData[i].count_price * this.settlementData[i].num
        );
        this.totalNum += parseInt(this.settlementData[i].num);
      }
    },
    /* 提交订单 */
    subOrder() {
      if (this.ruleForm1.address_id === "") {
        this.$message({
          message: "至少选择一个收货地址",
          type: "error"
        });
      } else {
        let url = "/personal/addstandardOrder";
        this.$http.post(url, this.ruleForm1).then(res => {
          if (res.data.errcode === ERR_OK) {
            localStorage.removeItem("settlementData");
            setTimeout(() => {
              this.$notify({
                title: "您的订单已提交"
              });
              this.$router.push({ path: "/orderReview" });
            }, 1000);
          } else {
            this.$message({
              message: res.data.errmsg,
              type: "error"
            });
          }
        });
      }
    },
    /* 地址新增提交保存 */
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          // alert('submit!'); //此处代表成功通过验证，在此处请求接口
          let url = "/personal/addresssave";
          this.$http.post(url, this.ruleForm).then(res => {
            if (res.data.errcode == 0) {
              /* 新增成功 */
              this.$message({
                message: res.data.errmsg,
                type: "success"
              });
              // 隐藏新增框
              this.isnewAddress = false;
              this.popupsBg = false;
              this._getAddress(); //重新获取数据
              // 清空搜索框
              this.$refs["ruleForm"].resetFields();
            } else {
              /* 失败 */
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
    /* 地址点击新增与编辑的时候用id判断当前是新增还是编辑 */
    editAddress(id) {
      this.isnewAddress = true;
      this.popupsBg = true;
      $(".modal").addClass("bounceInDown");
      if (id !== "newid") {
        let url =
          "/personal/getaddressdetail?id=" +
          id +
          "&token=" +
          sessionStorage.getItem("token") +
          "";
        this.$http.get(url).then(res => {
          this.ruleForm.id = res.data.data.itemDetail[0].id; //点击编辑设置一个id，编辑的时候需要用
          this.province = res.data.data.province; //重新返回的省份数据
          this.city = res.data.data.city; //重新返回的市区数据
          this.area = res.data.data.area; //重新返回地区数据
          this.ruleForm.name = res.data.data.itemDetail[0].name;
          this.ruleForm.idcard = res.data.data.itemDetail[0].idcard;
          this.ruleForm.postcode = res.data.data.itemDetail[0].postcode;
          this.ruleForm.phone = res.data.data.itemDetail[0].phone;
          this.ruleForm.full_address = res.data.data.itemDetail[0].full_address;
          this.ruleForm.province_id = res.data.data.itemDetail[0].province_id;
          this.ruleForm.city_id = res.data.data.itemDetail[0].city_id;
          this.ruleForm.area_id = res.data.data.itemDetail[0].area_id;
        });
      }
    },
    ischeckBox(item) {
      this.ruleForm1.address_id = item.id;
      this.send = item.province + " " + item.area + " " + item.city;
      this.consignee = item.name + " " + item.phone;
      this.sendConsignee = false;
    },
    /* 删除地址 */
    delAddress(id) {
      if (confirm("确认将该地址删除吗？")) {
        let url =
          "/personal/deleteAddress?id=" +
          id +
          "&token=" +
          sessionStorage.getItem("token") +
          "";
        this.$http.get(url).then(res => {
          // 重新调用一下数据
          this._getAddress();
        });
      }
    },
    /* 获取地址信息 */
    _getAddress() {
      var url =
        "/personal/address?token=" + sessionStorage.getItem("token") + "";
      this.$http.get(url).then(res => {
        this.addressList = res.data;
      });
    },
    /* 关闭 */
    btnClose() {
      this.invoice = false;
      this.popupsBg = false;
      this.isnewAddress = false;
      $(".modal").removeClass("bounceInDown");
      this.$refs["ruleForm"].resetFields();
      this.ruleForm.id = null;
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
    _getProvince() {
      var url = "/province/getzonelist";
      this.$http.get(url).then(res => {
        this.province = res.data.data.dataList;
      });
    }
  }
};
</script>
<style scoped lang="less">
.hint {
  line-height: 18px;
  font-size: 12px;
  color: red;
  overflow: hidden;
}

.btnsave {
  background: #d7000a;
  font-size: 18px;
  color: #fff;
  width: 314px;
  margin-left: -30px;
}

.btnsave:hover {
  background: #ec000b;
}

.province {
  width: 90px;
}
.invoice {
  z-index: 1999;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
  position: absolute;
  width: 600px;
  height: 410px;
  .title {
    height: 42px;
    background: #1b1b1b;
    h2 {
      padding-left: 10px;
      font-size: 16px;
      color: #fff;
      font-weight: 100;
      line-height: 42px;
      position: relative;
      span {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 22px;
        width: 42px;
        text-align: center;
        height: 42;
        background: #323232;
        color: #666;
        cursor: pointer;
      }
    }
  }
  .conter {
    padding: 0 30px;
    background: #fff;
    height: 368px;
    .tit {
      padding-top: 30px;
      h3 {
        padding-left: 50px;
        line-height: 30px;
        font-weight: 500;
        font-size: 14px;
        span {
          text-align: center;
          display: inline-block;
          width: 218px;
          border-bottom: 2px solid #000;
          cursor: pointer;
        }
      }
    }
    .con {
      height: 250px;
      border: #ccc 1px solid;
      padding-top: 40px;
      padding-left: 30px;
      label {
        margin-left: 30px;
        display: block;
        margin-bottom: 15px;
        input {
          width: 328px;
          height: 34px;
          border: #a9a9a9 solid 1px;
          padding-left: 5px;
        }
        button {
          width: 160px;
          height: 38px;
          background: #fff;
          border: #666 solid 1px;
          cursor: pointer;
        }
        button.active {
          border: #dc1721 solid 1px;
          color: #dc1721;
        }
        button:nth-child(2) {
          margin-right: 8px;
        }
      }
      .save,
      .esc {
        margin-top: 10px;
        width: 228px;
        height: 34px;
        color: #fff;
        cursor: pointer;
      }
      .save {
        margin-right: 20px;
        background: #dc1721;
      }
      .esc {
        background: #000;
      }
    }
  }
}
.cart_bg{
  min-width: 1200px;
}
</style>
