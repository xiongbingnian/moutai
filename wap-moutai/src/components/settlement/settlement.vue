<template>
  <div class="settlement">
    <div class="inner-container">
      <h2 class="title">
        <span>结算页</span>
      </h2>
      <div class="cart-item">
        <div class="cart-item-title">
          <span>收件人信息</span>
          <span>
            <button type="button" @click="addAddress" class="add">+ 新增收货地址</button>
          </span>
        </div>
        <div class="address-container">
          <div class="address-item" v-for="(item,index) in addressList" :key="index">
            <label class="select-icon" :class="{'selected':checkedIndex==index}" @click="selectAddress(item,index)">
              <i class="icon_select"></i>
              <span>{{item.name}} {{item.province}}{{item.city}}{{item.area}}{{item.address}} {{item.phone}}</span>
            </label>
            <div class="btn-box">
              <router-link v-bind="{to:'/address/'+item.id}">
                <button class="small-btn" type="button">编辑</button>
              </router-link>
              <button class="small-btn" type="button" @click="delAddress(item.id)">删除</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-item invoice-box">
        <div class="cart-item-title">
          <span>发票信息</span>
          <span>个人用户只能开普通发票，只有企业才能开增值税专票</span>
        </div>
        <div class="cart-item-content">
          <div class="invoice-name">
          	<span>{{ruleForm1.invoice_title}}</span>
          	<span>个人 </span>
          	<span>{{ruleForm1.invoice_type}}</span>
          </div>
          <button class="small-btn" type="button" @click="showInvoice">修改</button>
        </div>
      </div>
      <div class="cart-item delivery-list">
        <div class="cart-item-title">
          <span>送货清单</span>
          <span></span>
        </div>
        <div class="delivery-content">
          <div class="distribution">
            <span>配送方式</span>
            <span>茅台定制选择的物流</span>
          </div>
          <div class="goods-list">
            <h4>商品清单</h4>
            <div class="inner-content" v-for="(item,index) in settlementData" :key="index">
              <div class="cart-item-img">
                <img :src="item.image" >
              </div>
              <div class="cart-item-detail">
                <div class="cart-item-total">
                  <span>{{item.name}}</span>
                  <span>x {{item.num}}</span>
                  <span>￥{{item.count_price * item.num | countPriceNumToF}}</span>
                </div>
                <p>商品规格：{{item.nickname}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-item order-remarks">
        <div class="cart-item-title">
          <span>添加订单备注</span>
          <span></span>
        </div>
        <div class="cart-item-content">
          <textarea></textarea>
          <p><span>提示：</span>请勿填写有关支付、收货、发票方面的信息</p>
        </div>
      </div>
      <div class="download-line">
        <p>在线合同：<span>在线定制合同.docx</span></p>
        <button type="button" onclick="window.open('http://moutaivip.com/cache/import/定制酒合同.doc')">下载</button>
      </div>
      <div class="cart-item info-resure">
        <p><span>{{totalNum}}</span> 件定制商品：<span>￥{{totalAmout | totalAmoutToF}}</span></p>
        <p>运费：<span>￥{{freight | freightToF}}</span></p>
        <hr>
        <p>总价：<span>￥{{totalAmout + freight | totalAmoutFreightToF}}</span></p>
        <p>寄送至：{{send}}</p>
        <p>收货人：{{consignee}}</p>
      </div>
    </div>
    <button class="btn" type="button" @click="subOrder">提交订单</button>
    <!-- 提示框 -->
    <modal :modalContent="modalContent" :inStatus="inStatus"
      :modalzIndex="modalzIndex" 
      @selectConfirmCancel="isConfirmCancel"
      :modalTitle="modalTitle"
    >
    </modal>
    <!--发票提示框-->
    <div id="modal" v-show="invoice">
	    <div class="modal" >
	      <div class="modal-dialog">
	        <div class="modal-content">
	          <div class="modal-header">
	            <h3 class="modal-title">温馨提示</h3>
	            <i></i>
	          </div>
	          <div class="modal-body">
	          	请根据您的需求选择开具的发票信息
	          	<router-link v-bind="{to:'/invoice'}">
                <button class="invoice-btn" type="button">普通发票</button>
              </router-link>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div class="modal-backdrop fade in" @click="closeInvoice"></div>
	  </div>
  </div>
</template>
<script>
const ERR_OK = 0;
import Modal from "base/modal/modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
    	invoice: false,
      checkedIndex: null,
      inStatus: 1,
      modalzIndex: -1,
      modalTitle: "",
      modalContent: "",
      settlementData: [],
      ruleForm1: {
        token: sessionStorage.getItem("token"),
        cart_arr: [], //订单id
        cart_num_arr: [], //订单数量
        address_id: "", //地址id
        invoice_title: "发票抬头未设定", //发票名称
        invoice_type: "明细" //发票类型
      },
      addressList: [], //地址数据列表
      isnewAddress: false,
      rules: {},
      send: "",
      consignee: "",
      sendConsignee: true,
      totalAmout: 0,
      freight: 0,
      totalNum: 0
    };
  },
  created() {
		let detail =this.$route.query.detail;
		let invoiceTitle=this.$route.query.invoiceTitle;
		if(detail!=undefined||invoiceTitle!=undefined){
			this.ruleForm1.invoice_title=invoiceTitle;
			this.ruleForm1.invoice_type=detail;
		}
    this._getsettlementData();
  },
  mounted() {
    this._getAddress();
  },
  filters: {
	  countPriceNumToF: function (value) {
	    value=Number(value);
	    return value.toFixed(2);
	  },
	  totalAmoutToF: function (value) {
	    value=Number(value);
	    return value.toFixed(2);
	  },
	  freightToF: function (value) {
	    value=Number(value);
	    return value.toFixed(2);
	  },
	  totalAmoutFreightToF: function (value) {
	    value=Number(value);
	    return value.toFixed(2);
	  },
	},
  methods: {
  	showInvoice(){
  		this.invoice = true;
  	},
  	closeInvoice() {
      this.invoice = false;
    },
  	_getsettlementData() {
      this.settlementData = JSON.parse(localStorage.getItem("settlementData"));
      for (let i = 0; i < this.settlementData.length; i++) {
        this.ruleForm1.cart_arr.push(this.settlementData[i].id);
        this.ruleForm1.cart_num_arr.push(this.settlementData[i].num);
        this.totalAmout += Number(this.settlementData[i].count_price).toFixed(2) * Number(this.settlementData[i].num).toFixed(2);
        this.totalNum += parseInt(this.settlementData[i].num);
      }
    },
    /* 获取地址信息 */
    _getAddress() {
      let token = sessionStorage.getItem("token");
      let url = "/personal/address?token=" + token + "";
      this.$http.get(url).then(res => {
        if (res.data.length > 0) {
          this.addressList = res.data;
          console.log(this.addressList);
        } else {
        }
      });
    },
    addAddress() {
      this.$router.push({
        path: "/address/newly"
      });
    },
    /* 删除地址 */
    delAddress(id) {
      this.modalIsShow("提示", "确认删除该地址吗？");
      this.delFlag = true;
      this.addressId = id;
    },
    isConfirmCancel(status) {
      if (status === 0) {
        /* 确认 */
        if (this.delFlag) {
          this.delFlag = false;
          this.modelIsHide();
          let url = `/personal/deleteAddress?id=${this
            .addressId}&token=${sessionStorage.getItem("token")}`;
          this.$http
            .get(url)
            .then(res => {
              this._getAddress();
            })
            .catch(_ => {});
        } else {
          this.modelIsHide();
        }
      } else {
        /* 取消 */
        this.modelIsHide();
      }
    },
    /* 结算 */
    subOrder() {
      if (this.checkedIndex === null) {
        this.modalIsShow("温馨提示", "至少选择一个收货地址");
      } else {
        /* 正常提交 */
        console.log("正常提交");
        let url = "/personal/addstandardOrder";
        this.$http.post(url, this.ruleForm1).then(res => {
        	console.log(this.ruleForm1);
          if (res.data.errcode === ERR_OK) {
            localStorage.removeItem("settlementData");
            setTimeout(() => {
              this.$router.push({ path: "/orderReview" });//测试跳转
            }, 1000);
          } else {
            console.log("缺少参数");
          }
        });
      }
    },
    /* 提示框显示 */
    modalIsShow(modalTitle, modalContent) {
      this.inStatus = 0;
      this.BackdropzIndex = 1040;
      this.modalzIndex = 1050;
      this.modalTitle = modalTitle;
      this.modalContent = modalContent;
    },
    /* 隐藏提示框 */
    modelIsHide() {
      this.inStatus = 1;
      /* 动画的事件是300毫秒，所以要用300毫秒的延时来执行隐藏，不然没有动画效果 */
      setTimeout(() => {
        this.modalzIndex = -1;
      }, 300);
    },
    selectAddress(item,index) {
      this.checkedIndex = index;
      this.ruleForm1.address_id = item.id;
      this.send = item.province + " " + item.area + " " + item.city;
      this.consignee = item.name + " " + item.phone;
      this.sendConsignee = false;
    },
    test() {
      if (this.checkedIndex === null) {
        console.log(this.checkedIndex);
      } else {
        console.log(this.checkedIndex);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.settlement {
  padding: 0 0.25rem 0.88rem;

  .cart-item-content {
    padding: 0.2rem;
  }

  .inner-container {
    .title {
      font-size: 0.35rem;
      border-bottom: 2px solid #e1e1e1;
      color: #1b1b1b;
      margin-top: 20px;
      margin-bottom: 10px;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;

      span {
        border-bottom: 3px solid #1b1b1b;
        display: inline-block;
        padding: 0 0.15rem;
        margin-bottom: -2px;
        padding-bottom: 4px;
      }

      span:before {
        content: '';
        background: url('./settlement_icon.png') 50% no-repeat;
        background-size: 100%;
        width: 0.35rem;
        height: 0.35rem;
        display: inline-block;
        vertical-align: top;
        margin-right: 0.1rem;
      }
    }
  }

  .cart-item {
    margin-top: 0.3rem;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    .cart-item-title {
      background: #e8e8e8;
      padding: 0.2rem;
      position: relative;

      span {
        color: #525252;
        font-size: 0.25rem;
        display: inline-block;
        vertical-align: middle;

        button {
          background-color: #fff;
          vertical-align: middle;
          border: 0;
        }
      }

      span:first-child {
        color: #000;
        font-weight: 700;
        font-size: 0.32rem;
        margin-right: 0.1rem;
      }

      span:last-child {
        color: #d8000b;
        float: right;

        button {
          color: #d8000b;
          line-height: 0.35rem;
        }

        .add {
          position: absolute;
          right: 0.2rem;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.05rem 0.1rem;
        }
      }
    }
  }

  .address-container {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 0 0.2rem;
    color: #000;
    font-size: 0.28rem;

    .address-item:last-child {
      border: none;
    }

    .address-item {
      border-bottom: 1px dashed #d6d6d6;
      padding: 0.15rem 0;

      .select-icon.selected {
        .icon_select {
          background: url('../../common/images/on.png');
          background-size: 0.4rem;
        }
      }

      .select-icon {
        display: block;
        position: relative;

        .icon_select {
          position: absolute;
          width: 0.4rem;
          height: 0.4rem;
          content: '';
          display: block;
          background: url('../../common/images/off.png');
          background-size: 0.4rem;
          left: 10px;
          top: 50%;
          transform: translate(0, -50%);
        }

        span {
          padding-left: 0.72rem;
          display: inline-block;
          width: 100%;
          line-height: 0.4rem;
        }
      }
    }

    .btn-box {
      text-align: right;

      .small-btn {
        background-color: #f7f7f7;
        color: #b08a5e;
        border: 1px solid #d8d8d8;
        font-size: 0.25rem;
        padding: 0.05rem 0.2rem;
        margin: 0.05rem 0;
      }
    }
  }

  .invoice-box {
    .cart-item-title {
      span:last-child {
        float: none;
        margin-top: 0.15rem;
      }
    }

    .cart-item-content {
      position: relative;

      div {
        display: inline-block;
        vertical-align: middle;
      }

      .small-btn {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        background-color: #f7f7f7;
        color: #b08a5e;
        border: 1px solid #d8d8d8;
        font-size: 0.25rem;
        padding: 0.05rem 0.2rem;
      }
    }
  }

  .delivery-content {
    padding: 0.3rem 0.2rem 0;

    .distribution {
      display: flex;

      span {
        flex: 1;
        text-align: center;
        padding: 0.05rem;
      }

      span:first-child {
        background-color: #b08a5e;
        color: #fff;
        margin-right: 5px;
      }

      span:last-child {
        background: url('../customizable/g.png') 100% 100% no-repeat;
        background-size: 10%;
        border: 1px solid #d8000b;
        color: #000;
      }
    }
  }

  .goods-list {
    text-align: center;
    padding: 0.1rem 0;
    border-top: 1px dashed #d6d6d6;
    margin-top: 0.3rem;

    h4 {
      font-size: 0.3rem;
      background-color: #b08a5e;
      color: #fff;
      padding: 0.1rem;
    }

    .inner-content {
      display: flex;
      border: 1px solid #d8d8d8;
      margin: 0.2rem 0;

      .cart-item-img {
        padding: 0.1rem;
        flex: 1;
        height: 2.3334rem;
        border-right: 1px solid #d8d8d8;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .cart-item-detail {
        font-size: 0.25rem;
        flex: 2;

        .cart-item-total {
          display: flex;
          border-bottom: 1px solid #d8d8d8;
          height: 0.4rem;
          line-height: 0.4rem;

          span {
            padding: 0.05rem 0;
            flex: 2;
          }

          span:nth-child(2) {
            flex: 1;
            border-left: 1px solid #d8d8d8;
            border-right: 1px solid #d8d8d8;
          }

          span:last-child {
            color: #d8000b;
          }
        }

        p {
          text-align: left;
          padding: 0.1rem;
          color: rgba(0, 0, 0, 0.7);
          line-height: 0.3rem;
        }
      }
    }
  }

  .order-remarks {
    textarea {
      width: 100%;
      height: 0.8rem;
    }

    .cart-item-content {
      display: block;
    }

    p {
      font-size: 0.25rem;
      text-align: right;
      padding-top: 0.2rem;

      span {
        color: #d8000b;
      }
    }
  }

  .download-line {
    text-align: right;
    padding-top: 0.3rem;

    p {
      display: inline-block;
    }

    span {
      color: #b46f1e;
    }

    button {
      background-color: #323232;
      color: #fff;
      border-radius: 0;
      padding: 0.05rem 0.3rem;
      border: none;
    }
  }

  .info-resure {
    text-align: right;
    padding: 0.2rem;
    font-size: 0.25rem;

    span {
      color: #d8000b;
      font-size: 0.35rem;
    }

    p {
      margin: 0 0 10px;
      color: #555;
    }
  }

  .btn {
    padding: 0;
    line-height: 0.88rem;
    background-color: #d8000b;
    color: #fff;
    border-radius: 0;
    border: none;
    display: block;
    width: 75%;
    font-size: 0.45rem;
    margin: 0.3rem auto;
  }
}
/*发票提示框*/
.modal {
  position: fixed;
  top: 30%;
  right: 0;
  left: 0;
  outline: 0;
  z-index: 100;

  .modal-dialog {
    position: absolute;
    margin: auto;
    width: 90%;
    top: 30%;
    left: 5%;
    transition: transform 0.3s ease-out;

    .modal-content {
      position: relative;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
      background-clip: padding-box;
      outline: 0;
    }

    .modal-content {
      border-radius: 0;
    }

    .modal-header {
      background-color: #1b1b1b;
      border-bottom: none;
      color: #fff;
      height: 0.8rem;
      padding: 0;
      position: relative;

      .modal-title {
        font-size: 0.3rem;
        line-height: 0.8rem;
        padding-left: 0.3rem;
        text-align: left !important;
      }
    }
  }
}

.modal.in {
  .modal-dialog {
    transform: translateY(-50%) !important;
  }
}

.fade {
  opacity: 0;
  transition: opacity 0.15s linear;
}

.fade.in {
  opacity: 1;
}

.modal-body {
  position: relative;
  padding: 15px;
  font-size: 0.32rem;
  text-align: center;
}
.invoice-btn{
	width: 80%;
	height: 0.7rem;
	line-height: 0.7rem;
	background: #1b1b1b;
	color: #fff;
	text-align: center;
	border: none;
	font-size: 0.35rem;
	margin: 0.4rem auto;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
}

.modal-backdrop.fade.in {
  opacity: 0.5;
}
</style>
