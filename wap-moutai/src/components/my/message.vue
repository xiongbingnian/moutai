<template>
  <div class="my-msg">
    <b-header :title="title"></b-header>
    <div class="content">
    	<p class="no_customization" v-if="leaveMsgData.length<=0">暂时没有个性定制订单</p>
      <div class="list" v-for="(item,index) in leaveMsgData" :key="index">
        <div class="list-item">
          <p>
            <span></span>
            {{ item.create_time | timeFilter }}
            <span></span>
          </p>
          <div class="item-letters">
            <div class="letters-icon">
              <img src="./myLetters-custom-icon.png" />
            </div>
            <div class="letters-text">
              <span>{{item.content}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BHeader from "base/b-header/b-header";
  export default {
    data() {
      return {
        title: "我的留言",
        leaveMsgData: [],
        currentPage:1,
        total: 0
      };
    },
    components: {
      BHeader,
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
      //console.log(this.leaveMsgData)
    },
  };

</script>

<style lang="stylus" scoped>
  .item-letters {
    padding: 2% 5%;
  }

  .item-letters .letters-icon,
  .item-letters .letters-text {
    display: inline-block;
  }

  .item-letters .letters-icon img {
    width: .56rem;
    margin-right: 8px;
  }

  .item-letters .letters-text {
  	width: 80%;
    vertical-align: top;
  }

  .list .list-item p {
    margin-top: 20px;
    text-align: center;
    color: rgba(27, 27, 27, .5);
  }

  .list .list-item p span {
    width: 21%;
    display: inline-block;
    background: #e0e0e0;
    height: 1px;
    vertical-align: middle;
    margin: 0 10px;
  }
	.no_customization{
			text-align: center;
			margin: 0.4rem;
			color: #4f4f4f;
		}
</style>
