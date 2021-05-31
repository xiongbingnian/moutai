<template>
  <div class="tab_container">
  	<b-header :title="title"></b-header>
    <div id="tab3" class="tab_content" style="display: block; ">
      <div class="order" style="display:block;">
        <div class="bodyCon">
          <div class="body_left">
            <div class="body_head">
            	订单号: {{standardDetailsData.order_number}}
            	<span class="completeText">已提交</span>
            </div>
            <div class="clearfix" v-for="(item,index) in standardDetailsData.list" :key="index">
              <div class="img">
                <img :src="item.image">
              </div>
              <div class="text">
                <h2>{{item.p_name}}</h2>
                <p>{{item.nickname}}</p>
              </div>
              <div class="total"></div>
            </div>
          </div>
        </div>
        <div class="footerMsg_con">
          <ul class="info_list">
            <li>
              <h2>收货人信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>收货人：</span>
                   <span>{{standardDetailsData.address}}</span> 
                </div>
                <div class="list-item">
                  <span>地址：</span>
                  <span>{{standardDetailsData.province}}{{standardDetailsData.city}}{{standardDetailsData.area}}{{standardDetailsData.address}}</span>
                </div>
                <div class="list-item">
                  <span>手机号码：</span>
                  <span>{{standardDetailsData.phone}}</span>
                </div>
              </div>
            </li>
            <li>
              <h2>配送信息</h2>
              <div class="list">
             <div class="list-item">
                  <span>暂无配送信息</span>
                </div>
              </div>
            </li>
            <li>
              <h2>付款信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>付款方式：</span>
                  <span>123313178</span>
                </div>
                <div class="list-item">
                  <span>付款时间：</span>
                  <span>{{standardDetailsData.create_time}}</span>
                </div>
                <div class="list-item">
                  <span>商品总额：</span>
                  <span>￥{{standardDetailsData.count_money}}</span>
                </div>
                <div class="list-item">
                  <span>应支付金额：</span>
                  <span>￥{{standardDetailsData.count_money}}</span>
                </div>
                <div class="list-item">
                  <span>运费金额：</span>
                  <span>￥{{standardDetailsData.express_number}}</span>
                </div>
              </div>
            </li>
            <li>
              <h2>发票信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>{{standardDetailsData.invoice_type}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BHeader from "base/b-header/b-header";
export default {
  data() {
    return {
    	title:"我的订单",
      standardDetailsData: []
    };
  },
  created() {
    this._getstandardDetails();
  },
  components: {
	  BHeader,
	},
  watch: {
    $route: function() {
      // 当触发了这个方法就重新获取到最新的数据
      window.location.reload();
    }
  },
  methods: {
    _getstandardDetails() {
      let id = this.$route.query.id;//this.$route.params.id;
      let url = `/personal/standardOrderDetails?id=${id}&token=${sessionStorage.getItem("token")}`;
      this.$http.get(url).then(res => {
        this.standardDetailsData = res.data.data;
        console.log(res.data.data);
      });
    }
  }
};
</script>
<style scoped>
.body_head{
	  background-color: #e7e7e7;
    font-size: .24rem;
    line-height: .5rem;
    height: .5rem;
    padding: 0 .2rem;
    color: #333;
}
.completeText{
	float: right;
}
.clearfix{
  	padding: 0.3rem 0.2rem;
  	box-sizing: border-box;
  }
  .clearfix>div{
  	display: inline-block;
  }
  .clearfix .img{
  	width: 25%;
  }
  .clearfix .text{
  	width: 50%;
  	vertical-align: top;
  	padding: 0 0.2rem;
  	box-sizing: border-box;
  }
  .clearfix .total{
  	width: 22%;
  	vertical-align: top;
  	line-height: 0.7rem;
  	font-size: 0.2rem;
  	box-sizing: border-box;
  	text-align: right;
  	float: right;
  }
  .img img{
  	width: 100%;
  }
  .info_list li{
  	margin-bottom: 0.5rem;
  }
  .info_list h2{
  	border-bottom: .02rem solid #d5d5d5;
    color: #333;
    font-size: .24rem;
    line-height: .64rem;
    padding: 0 .2rem;
  }
  .list-item{
  	color: #333;
    font-size: .24rem;
    font-weight: 400;
    line-height: 0.4rem;
    padding: 0 0.2rem;
  }
  
</style>
