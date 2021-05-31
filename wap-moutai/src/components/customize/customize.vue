<template>
  <div class="address">
    <b-header :title="title"></b-header>
	  <div class="address-container">
    	<textarea class="customize-text" v-model="ruleForm.remark" placeholder="请您填写个性化需求..."></textarea>
      <mt-field label="姓名 :" v-model="ruleForm.name">*</mt-field>
			<mt-field label="联系电话 :" v-model="ruleForm.phone">*</mt-field>
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
      <mt-field v-model="ruleForm.expect_date" label="期望完成时间 :" type="date" value-format="yyyy-MM-dd" >*</mt-field>
      <mt-field label="期望定制数量(瓶) :" v-model="ruleForm.expect_quantity">*</mt-field>
      <mt-field class="code" label="验证码 :" v-model="ruleForm.code"><img class="img_code" src="./getImgCode.png" alt="" /></mt-field>
      <div class="submitBtn">
		    <button type="button" id="submitBtn" @click="customSubmit">马上提交</button>
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
export default {
  data() {
    return {
      isContainer: false,
      title: "定制填写信息",
      inStatus: 1,
      modalzIndex: -1,
      modalTitle: "",
      modalContent: "",
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
  components: {
    BHeader,
    Modal,
    MoutaiLoading
  },
  methods: {
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
    /* 个性定制提交 */
    customSubmit() {
      // console.log(this.ruleForm)
      let url = "/customized/index";
      this.$http.post(url, this.ruleForm).then(res => {
        if (res.data.errcode == 0) {
          this.modalIsShow("提示",res.data.errmsg);
          return;
        } else this.modalIsShow("提示",res.data.errmsg);
      });
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
<style lang="stylus">
.address-container {
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
.img_code{
	position: absolute;
	top: -0.4rem;
	width: 1.6rem;
}
.mint-cell-text {
    vertical-align: middle;
    font-size: 0.25rem;
}
</style>
