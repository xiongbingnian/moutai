<template>
  <div class="article custS">
    <div class="head">
      <h2>
        <p>
          <i class="custS_logo"></i>
          <b>客户服务 </b>
        </p>
      </h2>
      <div class="ls_contentBox">
        <div class="custS_lmsg">
          <h3>
            <p>
              <i class="custS_lmsg_logo"></i>
              <b>在线留言</b>
            </p>
          </h3>

          <div class="comm_pro">
            <div class="msgBox">
              <textarea v-model="ruleForm.content" id="l_msg" placeholder="请描述您遇到的问题或您宝贵的建议"></textarea>
            </div>
            <div class="contactBox">
              <p>联系方式：</p>
              <input type="text" v-model="ruleForm.phone" class="cWay" placeholder="请输入手机号码/邮箱/QQ">
            </div>
          </div>
          <div class="submitBtn">
            <button type="submit" id="l_submit" @click="onlineMessage">提交</button>
            <div style="margin: 20px auto;font-size: 14px;">
              》
              <a href="javascript:;">常见问题</a>《
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          content: '',
          phone: '',
          token: sessionStorage.getItem('token'),
        }
      };
    },
    methods: {
      onlineMessage() {
        let url = '/messages/add';
        this.$http.post(url, this.ruleForm)
          .then(res => {
            if (res.data.errcode == 0) {
              this.$message.success(res.data.errmsg);
              setTimeout(_ => {
                this.$router.push({
                  path: '/home'
                })
              }, 1000)
              return;
            }
            this.$message.error(res.data.errmsg)
          })
      },
    }
  };

</script>
<style scoped>


</style>
