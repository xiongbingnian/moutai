<template>
  <div class="online-letter">
    <div class="online-letter-title">
      <p class="title-text">在线留言</p>
      <hr class="title-line">
    </div>
    <div class="online-letter-content">
      <textarea v-model="ruleForm.content" name="text" placeholder="请描述您遇到的问题或您宝贵的建议"></textarea>
      <div class="contact-box">
        <span>联系方式：</span>
        <input v-model="ruleForm.phone" type="text" placeholder="请输入手机号码/邮箱/QQ">
      </div>
    </div>
    <button class="btn" @click="onlineLetter"> 
      <span class="shown" v-if="!loadingShow">提交</span>
      <moutai-loading v-if="loadingShow"></moutai-loading>
    </button>
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
import MoutaiLoading from "base/moutai-loading/moutai-loading";
export default {
  data() {
    return {
      loadingShow: false,
      inStatus: 1,
      modalzIndex: -1,
      modalTitle: "",
      modalContent: "",
      ruleForm: {
	      content: '',
	      phone: '',
	      token: sessionStorage.getItem('token'),
	    }
    };
  },
  components: {
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
    onlineLetter() {
    	let url = '/messages/add';
        this.$http.post(url, this.ruleForm)
          .then(res => {
            if (res.data.errcode == 0) {
              this.modalIsShow("提示",res.data.errmsg);
              setTimeout(_ => {
                this.$router.push({
                  path: '/home'
                })
              }, 1000)
              return;
            }
            this.modalIsShow("提示",res.data.errmsg)
          })
//    this.loadingShow = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
.online-letter {
  height: 100%;
  text-align: center;
  margin: 0.5rem 20px 0;

  .title-text {
    color: #d8000b;
    font-size: 0.34rem;
    border-left: 4px solid #dc1721;
    text-align: left;
    padding-left: 13px;
    line-height: 0.5rem;
  }

  .title-line {
    border: 0;
    height: 3px;
    width: 100%;
    background: #e1e1e1;
    margin-top: 0;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 5.9rem;
    padding: 0.2rem;
    border: 1px solid #d1d1d1;
    border-radius: 0;
    display: block;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 0.26rem;
  }

  textarea:focus {
    border: 1px solid #d8000b;
    box-shadow: 0 0 4px rgba(216, 0, 16, 0.2);
  }

  .contact-box {
    background: #efefef;
    width: 100%;
    padding: 0.3rem;
    display: flex;

    span {
      flex: 3;
      font-size: 0.3rem;
      line-height: 0.72rem;
    }

    input {
      flex: 7;
      padding: 0.2rem;
      font-size: 0.24rem;
      border-radius: 0;
      border: 1px solid #b1b1b1;
      font-size: 0.26rem;
    }

    input:focus {
      border: 1px solid #d8000b;
      box-shadow: 0 0 4px rgba(216, 0, 16, 0.2);
    }
  }

  button {
    border: 0;
    font-size: 0.44rem;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0;
    line-height: 0.88rem;
    height: 0.88rem;
    background-color: #d8000b;
    color: #fff;
    border-radius: 0;
  }

  .btn .shown {
    display: inherit;
  }
}
</style>

