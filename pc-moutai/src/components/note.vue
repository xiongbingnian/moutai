<template>
  <div class="tab_container">
    <div id="tab4" class="tab_content" style="display: block; ">
      <div class="message">
        <ul v-if="leaveMsgData.length < 0">
          <div class="noInfoCon">
            <div class="icon"></div>
            <div class="iconText">暂时没有留言信息</div>
          </div>
        </ul>
        <ul>
          <li v-for="(item,index) in leaveMsgData" :key="index">
            <div class="solid"><span>{{ item.create_time | timeFilter }}</span></div>
            <div class="massage_kh">
              <div class="left message_k_ioc"><span></span></div>
              <div class="left message_text">
                <div class="message_m">
                  <div class="left message_t" v-text="item.content"></div>
                </div>
              </div>
            </div>
            <div class="massage_kf"></div>
          </li>
        </ul>
      </div>
      <!-- 分页 -->
      <div class="page_box">
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leaveMsgData: [],
        currentPage:1,
        total: 0,
      };
    },
    methods: {
      currentChange(page){
        this.currentPage = page;
        this.getleaveMsg();
      },
      getleaveMsg() {
        let token = sessionStorage.getItem('token');
        let url = '/personal/note?token=' + token + '&limit=10&page='+ this.currentPage +'';
        this.$http.get(url)
          .then(res => {
            this.leaveMsgData = res.data.data;
            this.total = res.data.count_limit;
          })

      },
    },
    mounted() {
      this.getleaveMsg()
      console.log(this.leaveMsgData)
    },
  }

</script>
<style scoped>
  .page_box {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-bottom: 50px;
  }

  .page_box .page {
    width: 1920px;
    position: relative;
    left: 50%;
    /* margin-left: -960px; */
    transform: translateX(-50%);
    text-align: center;
  }

</style>
