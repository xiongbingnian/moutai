<template>
  <div class="my-setting">
    <b-header :title="title"></b-header>
    <div class="content">
      <div class="customize_main">
      	<div>
      		<label>新的登录密码：</label>
      		<input type="password" v-model="password0"/>
      	</div>
      	<div>
      		<label>请再输入一次密码：</label>
      		<input type="password" v-model="ruleFormPwd.password"/>
      	</div>
      	<button class="save" @click="passwordStepC">提交</button>
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
        title: '修改密码',
        inStatus: 1,
		    modalzIndex: -1,
		    modalTitle: "",
		    modalContent: "",
		    password0:"",
		    /* 修改密码 */
        ruleFormPwd: {
          password: '',
          token: sessionStorage.getItem('token'),
        },
      }
    },
    components: {
      BHeader,
      Modal
    },
    mounted() {
     
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
	    /* 修改密码提交接口 */
      passwordStepC() {
      	if(this.password0==this.ruleFormPwd.password){
      	  var url = '/personal/modifyPassword';
          this.$http.post(url, this.ruleFormPwd)
          .then(res => {
            if (res.data.errcode == 0) {
              this.modalIsShow("提示", res.data.errmsg);
              return;
            }
            this.modalIsShow("提示", res.data.errmsg);
          })
      	}else{
      		this.modalIsShow("提示", "2次密码输入的不一致");
      	}
      }
    }
  };

</script>

<style scoped>
  .customize_main{
  	padding: .3rem .3rem .77rem;
  }
  .customize_main>div{
  	margin-bottom: 20px;
  }
	.customize_main label{
	display: block;
	margin: 0;
	line-height: .6rem;
	font-size: .3rem;
	font-weight: 400;
	}
	.customize_main>div>input{
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
</style>