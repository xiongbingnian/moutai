<template>
  <div class="tab_container">
  	<b-header :title="title"></b-header>
    <div id="tab3" class="tab_content" style="display: block; ">
      <div class="order" style="display:block">
        <div class="customize_li">
          <ul class="tab">
            <li class="tab-item">
              <router-link to="/standardOrder">
              	<span>标准定制</span>
              </router-link>
            </li>
            <li class="tab-item active">
              <router-link to="/personOrder">
              	<span>个性定制</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
	        <p class="no_customization" v-if="OrderData.length<=0">暂时没有个性定制订单</p>
	        <div class="list">
	          <ul >
	            <li v-for="(item,index) in OrderData" :key="index" v-if="OrderData.length>0">
	              <h2 class="order-num">订单号：<span v-text="item.order_member"></span></h2>
	              <div class="main">
	              	<ul>
	              		<li>
	              			<div class="c-3">
	              				<p class="l-title">订单信息</p>
	              			</div>
	              			<div class="c-7">
	              				<p><span>姓名：</span>{{item.user_name}}</p>
				                <p><span>联系电话：</span>{{item.phone}}</p>
				                <p><span>地区：</span>{{item.province}}{{item.city}}{{item.area}}</p>
				                <p><span>完成时间：</span>{{item.expect_date | timeFilter}}</p>
				                <p><span>定制数量：</span>{{item.expect_quantity}}瓶</p>
	              			</div>
	              		</li>
	              		<li>
	              			<div class="c-3">
	              				<p class="l-title">个性化需求</p>
	              			</div>
	              			<div class="c-7">
	              				<p v-text="item.remark"></p>
	              			</div>
	              		</li>
	              		<li>
	              			<div class="c-3">
	              				<p class="l-title">下单时间</p>
	              			</div>
	              			<div class="c-7">
	              				<p>{{ item.create_time | timeFilter }}</p>
	              			</div>
	              		</li>
	              		<li>
	              			<div class="c-3">
	              				<p class="l-title">订单状态</p>
	              			</div>
	              			<div class="c-7">
	              				<p class="red" v-text="item.status"></p>
	              			</div>
	              		</li>
	              	</ul>
	              </div>
	        		</li>
	          </ul>
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
      	title:"我的订单",
        OrderData: [],
        currentPage: 1,
        count_num: 0,
      };
    },
    mounted() {
      this.getOrderData();
    },
    components: {
		  BHeader,
		},
    methods: {
      currentChange(page) {
        this.currentPage = page;
        this.getOrderData();
      },
      getOrderData() {
        let token = sessionStorage.getItem('token');
        let url = '/personal/personOrder?token=' + token + '&page='+ this.currentPage +'';
        this.$http.get(url)
          .then(res => {
            console.log(res.data.data)
            if (res.data.errcode == 0) {
              this.OrderData = res.data.data.data;
              this.count_num = res.data.data.count_num;
            }
          })
      },
    }
  };

</script>
<style scoped>
  .tab {
    display: flex;
    border-bottom: .04rem solid #e7e7e7;
    padding: 0 6%;
    margin-bottom: 10px;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
    line-height: .78rem;
    padding: 0 6%;
    color: #4f4f4f;
  }

  .tab .tab-item.active span {
    border-bottom: .04rem solid #d60018;
    display: block;
    color: #000;
  }
	.no_customization{
		text-align: center;
		margin: 0.4rem;
		color: #4f4f4f;
	}
	.order-num{
  	background-color: #e7e7e7;
    font-size: .24rem;
    line-height: .5rem;
    height: .5rem;
    padding: 0 .2rem;
  }
  .list>ul>li{
  	border-bottom: 1px solid #E0E0E0;
  	margin-bottom: 0.4rem;
  }
  .main{
  	padding: 0.2rem;
  }
  
  .main li{
  	overflow: hidden;
  	margin-bottom: 0.2rem;
  }
  .main li>div{
  	float: left;
  	box-sizing: border-box;
  }
  .c-3{
  	width: 25%;
  	padding: 0.1rem;
  }
  .c-7{
  	width: 75%;
  	padding: 0.1rem;
  }
  .l-title{
  	background-color: #e8e8e8;
    font-weight: 400;
    height: .54rem;
    width: 100%;
    text-align: center;
    color: #000;
    font-size: .28rem;
    line-height: .54rem;
  }
  .c-7>p{
  	line-height: .54rem;
    font-size: .3rem;
  }
  .c-7>p>span{
  	color: #666;
  	font-size: .24rem;
  }
  .red{
  	color: red;
  }
</style>
