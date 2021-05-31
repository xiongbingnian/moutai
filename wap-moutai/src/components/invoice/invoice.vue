<template>
  <div class="address">
    <b-header :title="title"></b-header>
    <div class="con">
      <label>
        <span class="invoice-title">发票抬头：</span>
        <input type="text" v-model="invoiceTitle">
      </label>
      <label>
        <span class="invoice-title mt">发票内容：</span>
        <button type="button" 
        	class="invoice-details"
        	v-for='(item,index) in details' 
        	@click="change(index)" 
        	:class='{active:index===number}'
        	>{{item.name}}</button>  
      </label>
      <button type="button" class="save" @click="save(invoiceTitle)">确定</button>
      <button type="button" class="esc" @click="esc">取消</button>
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
import Modal from "base/modal/modal";
import BHeader from "base/b-header/b-header";
export default {
  data() {
    return {
      title: "普通发票",
      invoiceTitle:"",
      number:0,
      inStatus: 1,
      modalzIndex: -1,
      modalTitle: "",
      modalContent: "",
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
  components: {
    BHeader,
    Modal
  },
  created() {
  },
  methods: {
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
    isConfirmCancel(status) {
      if (status === 0) {
        /* 确认 */
        this.modelIsHide();
      } else {
        /* 取消 */
        this.modelIsHide();
      }
    },
	  change: function(index) {  
	    this.number= index;          
	  },
	  save:function(invoiceTitle){
//	  	alert(this.details[this.number].name);
//	  	window.history.go(-1);
			if(invoiceTitle!=""){
				this.$router.push({ path: '/settlement?detail=' + this.details[this.number].name +'&invoiceTitle='+ invoiceTitle});
	  	}else{
	  		this.modalIsShow("提示", "请填写发票抬头");
	  	}
	  },
	  esc:function(){
	  	window.history.go(-1);
	  }
  }
};
</script>
<style lang="stylus">
.con {
  padding: 0.4rem 0.2rem;
}
.invoice-title{
  line-height: 0.8rem;
	font-weight: 400;
	display: block;
	font-size: 0.33rem;
}
.mt{
	margin-top: 0.2rem;
}
.con input{
	width: 100%;
	border: 1px #a6a6a6 solid;
	height: 0.88rem;
	background: #fff;
	padding-left: 0.1rem;
}
.invoice-details{
  width: 47%;
	height: 0.9rem;
	line-height: 0.9rem;
	text-align: center;
	background: #fff;
	border: #A6A6A6 solid 1px;
	font-size: 0.32rem;
	cursor: pointer;
	margin-bottom: 0.8rem;
}
.con label button:nth-child(2){
	margin-right: 4%;
}
.con .active{
	border: #dc1721 solid 1px;
  color: #dc1721;
}
.save,.esc{
	width: 100%;
	height: 0.9rem;
	line-height: 0.9rem;
	border: none;
	margin-bottom: 0.5rem;
	color: #fff;
	font-size: 0.35rem;
}
.save{
	background: #D8000B;
}
.esc{
	background: #323232;
}
</style>
