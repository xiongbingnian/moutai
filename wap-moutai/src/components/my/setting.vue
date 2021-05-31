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
      	<div class="name">
      		<label>用户名：</label>
      		<b v-text="userInfoData.name"></b>
      	</div>
      	<div>
      		<label>昵称：</label>
      		<input type="text" v-model="ruleForm.nickname"/>
      	</div>
      	<div>
      		<label>性别：</label>
      		<button type="button" 
      				class="gender"
		        	v-for='(item,index) in gender' 
		        	@click="genderChange(index)" 
		        	:class='{active:index===number}'
		        	>{{item.sex}}</button> 
      	</div>
      	<div>
      		<label>生日：</label>
      		<input type="date"/>
      	</div>
      	<div>
      		<label>邮箱：</label>
      		<input type="text" v-model="ruleForm.email"/>
      	</div>
      	<div>
      		<label>真实姓名：</label>
      		<input type="text" v-model="ruleForm.real_name"/>
      	</div>
      	<div>
      		<label class="d_i">登录密码 :</label>
      		<router-link to="/my/changePassword">
      			<span class="change-password">修改</span>
      		</router-link>
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
        tabActive: 0,
        userInfoData: [],
        inStatus: 1,
	      modalzIndex: -1,
	      modalTitle: "",
	      modalContent: "",
        gender:[
		      {
		         sex: "男",
		      },
						{
		         sex: "女",
		      }
	      ],
	      number:"",
        /* 基本信息 */
        ruleForm: {
          sex: '',
          nickname: '',
          email: '',
          real_name: '',
          token: sessionStorage.getItem('token'),
          rules: {}
        },
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
    	genderChange:function(index){
    		this.number= index; 
    		this.ruleForm.sex= index+1;  
    	},
      _btnTab(index) {
        this.tabActive = index;
      },
      /* 保存用户信息 */
      saveUserMessage() {
      	console.log(this.ruleForm);
        let url = '/personal/updUserInfo';
        this.$http.post(url, this.ruleForm)
          .then(res => {
            if (res.data.errcode == 1) {
            	this.modalIsShow("提示", res.data.errmsg);
              console.log(res.data.errmsg);
            } else {
            	this.modalIsShow("提示",res.data.errmsg);
            	console.log(res.data.errmsg);
            }
          })
      },
      /* 获取用户基本信息 */
      getUserInfo() {
        let url = '/personal/getUserInfo?token=' + this.ruleForm.token + '';
        this.$http.get(url)
          .then(res => {
            if (res.data.errcode == 0) {
              this.userInfoData = res.data.data;
      				this.number=this.userInfoData.sex-1;
      				console.log("this.number----"+this.number);
              return;
            } else {
            	console.log(res.data.errmsg);
            }
          })
      },
    }
  };

</script>

<style lang="stylus" scoped>
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
	.customize_main .name label,.customize_main .d_i{
		display: inline-block;
	}
	.customize_main>div>input{
		width: 100%;
		padding: .2rem;
    border: 1px solid #a6a6a6;
    height: .88rem;
    background-color: #fff;
    border-radius: 0;
	}
	.change-password{
		color: #d8000b;
		font-size: 0.3rem;
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
