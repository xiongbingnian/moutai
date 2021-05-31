<template>
  <div class="my-setting">
    <b-header :title="title"></b-header>
    <div class="content">
      <ul class="tab">
        <li class="tab-item" :class="{active:tabActive==0}" @click="_btnTab(0)">
          <router-link to="/my/setting">
          	<span>基本信息</span>	
          </router-link>
        </li>
        <li class="tab-item" :class="{active:tabActive==1}" @click="_btnTab(1)">
        	<router-link to="/my/more">
          	<span>更多个人信息</span>
          </router-link>
        </li>
        <li class="tab-item" :class="{active:tabActive==2}" @click="_btnTab(2)">
        	<router-link to="/my/showaddr">
          	<span>常用收货地址</span>
          </router-link>
        </li>
      </ul>
      <div class="customize_main">
      	<div>
      		<label>婚姻状况：</label>
      		<button type="button" 
  				class="gender"
	        	v-for='(item,index) in marriage' 
	        	@click="change(index)" 
	        	:class='{active:index===number}'
	        	>{{item.status}}
      		</button> 
      	</div>
      	<div>
      		<label>月收入：</label>
      		<select class="salary" v-model="ruleForm.income">
      			<option value="0">请选择</option>
      			<option value="1">5000以下</option>
      			<option value="2">5000-1万</option>
      			<option value="3">1万-2万</option>
      			<option value="4">2万以上</option>
      		</select>
      	</div>
      	<div>
      		<label>身份证号：</label>
      		<input type="text" v-model="ruleForm.idNum"/>
      	</div>
      	<div>
      		<label>教育程度：</label>
      		<select class="edu" v-model="ruleForm.education">
      			<option value="0">请选择</option>
      			<option value="高中">高中</option>
      			<option value="中专">中专</option>
      			<option value="大专">大专</option>
      			<option value="本科">本科</option>
      			<option value="硕士">硕士</option>
      			<option value="博士">博士</option>
      			<option value="其他">其他</option>
      		</select>
      	</div>
      	<div>
      		<label>所在行业：</label>
      		<select class="job" v-model="ruleForm.industry">
      			<option value="0">请选择</option>
      			<option value="1">计算机硬件及网络设备</option>
      			<option value="2">计算机软件</option>
      			<option value="3">IT服务</option>
      			<option value="4">互联网/电子商务</option>
      			<option value="5">网络游戏</option>
      			<option value="6">通讯</option>
      			<option value="7">仪器仪表及工业自动化</option>
      			<option value="8">金融/银行/投资/基金/证券</option>
      			<option value="9">保险</option>
      			<option value="10">房地产/建筑/建材/工程</option>
      			<option value="11">家居/室内设计/装饰装潢</option>
      		</select>
      	</div>
      	<button class="save" @click="saveUserMessage">保存</button>
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
  import BHeader from 'base/b-header/b-header';
  import Modal from "base/modal/modal";
  export default {
    data() {
      return {
        title: '信息设置',
        tabActive: 1,
        inStatus: 1,
	    modalzIndex: -1,
	    modalTitle: "",
	    modalContent: "",
	    number:0,
        marriage:[
	      {
	         status: "未婚",
	      },
		  {
	         status: "已婚",
	      },
	      {
	         status: "保密",
	      }
	    ],
        /* 基本信息 */
        ruleForm: {
          marriage:"",
          income:"",
          idNum:"",
          education:"",
          industry:""
        }
      }
    },
    components: {
      BHeader,
      Modal
    },
    mounted() {
      this.getUserInfo();
     
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
	change:function(index){
		this.number= index; 
	},
    _btnTab(index) {
        this.tabActive = index;
    },
      /* 保存更多个人信息 */
      saveUserMessage() {
      	this.ruleForm.marriage=this.marriage[this.number].status;
      	console.log(this.ruleForm);
      	this.modalIsShow("提示", "保存成功");
//      let url = '/personal/updUserInfo';
//      this.$http.post(url, this.ruleForm)
//        .then(res => {
//          if (res.data.errcode == 1) {
//          	this.modalIsShow("提示", res.data.errmsg);
//            console.log(res.data.errmsg);
//          } else {
//          	this.modalIsShow("提示",res.data.errmsg);
//          	console.log(res.data.errmsg);
//          }
//        })
      },
      /* 获取更多个人信息 */
      getUserInfo() {
//      let url = '/personal/getUserInfo?token=' + this.ruleForm.token + '';
//      this.$http.get(url)
//        .then(res => {
//          if (res.data.errcode == 0) {
//            this.userInfoData = res.data.data;
//    				this.number=this.userInfoData.sex-1;
//    				console.log("this.number----"+this.number);
//            return;
//          } else {
//          	console.log(res.data.errmsg);
//          }
//        })
      },
    }
  };

</script>

<style scoped>
  .tab {
    display: flex;
    border-bottom: .04rem solid #e7e7e7;
    background:#be9457;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
    line-height: .78rem;
    color: #fff;
    font-size: .28rem;
  }
  .tab .tab-item span{
  	color: #fff;
  }

  .tab .tab-item.active span {
    background: #fff;
    color: red;
    padding: .1rem;
    border-radius: .1rem;
  }
  .customize_main{
  	padding: .3rem .3rem .77rem;
  }
  .customize_main>div{
  	margin-bottom: 20px;
  }
  .name b{
  	color: #d8000b;
    font-size: .44rem;
  }
	.customize_main label{
		display: block;
    margin: 0;
    line-height: .6rem;
    font-size: .3rem;
    font-weight: 400;
	}
	.customize_main>div>input,.customize_main>div>select{
		width: 100%;
		padding: .2rem;
    border: 1px solid #a6a6a6;
    height: .88rem;
    background-color: #fff;
    border-radius: 0;
	}
	.save{
    line-height: 0.88rem;
    background-color: #d8000b;
    color: #fff;
    border-radius: 0;
    border: none;
    width: 100%;
    font-size: 0.44rem;
    font-weight: 400;
	}
	.gender{
	width: 1.4rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    border: 1px solid #b1b1b1;
    margin-right: 0.4rem;
    font-size: 0.3rem;
    background: #fff;
	}
	.gender.active{
	background-color: #d8000b;
    border-color: #d8000b;
    color: #fff;
	}
</style>
