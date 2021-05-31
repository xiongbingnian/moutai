<template>
  <div class="tab_container">
  	<b-header :title="title"></b-header>
    <div class="tab_content" style="display: block; ">
      <div class="order" style="display:block">
        <div class="customize_li">
          <ul class="tab">
            <li class="tab-item active">
              <router-link to="/standardOrder">
              	<span>标准定制</span>
              </router-link>
            </li>
            <li class="tab-item">
              <router-link to="/personOrder">
              	<span>个性定制</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
          <div class="content order_tabs" style="display: block">
            <div class="list">
              <ul>
                <li class="no_customization" v-if="standardData.length<=0">暂时没有标准定制订单</li>
                <li v-for="(item,index) in standardData" :key="index" v-if="standardData.length>0">
                  <h2 class="order-num">订单号：
                    <i>{{item.order_number}}</i>
                    <span class="complete">已提交</span>
                  </h2>
                  <div class="contents">
                    <ul>
                      <li class="w5">
                        <div class="gd-item-in clearfix" v-for="(list,index) in item.list" :key="index">
                          <div class="img">
                            <img :src="list.image">
                          </div>
                          <div class="text">
                            <h2>{{list.p_name}}</h2>
                            <p>{{list.nickname}}</p>
                          </div>
                          <div class="total">¥{{item.count_money}}</div>
                        </div>
                      </li>
                      <li class="w1 detail_box">
                        <button @click="goStandardOrderDetails(index)" class="detail" style="cursor:pointer">订单详情</button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div id="page"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const ERR_OK = 0;
import BHeader from "base/b-header/b-header";
export default {
  data() {
    return {
    	title:"我的订单",
      standardData: []
    };
  },
  created() {
    this._getstandardOrder();
  },
  components: {
	  BHeader,
	},
  methods: {
  	goStandardOrderDetails(index) {
    	this.$router.push({ path: '/standardOrderDetails?id=' + this.standardData[index].id });
    },
    /* 取消订单 */
    cancelOrder(id) {
      if (confirm("您确定要取消订单吗？")) {
        let url = `/personal/delstandardOrder?id=${id}&token=${sessionStorage.getItem(
          "token"
        )}`;
        this.$http.post(url).then(res => {
          if (res.data.errcode === 0) {
            this._getstandardOrder();
          }
        });
      }
    },
    _getstandardOrder() {
      let url = `/personal/standardOrder?token=${sessionStorage.getItem(
        "token"
      )}`;
      this.$http.get(url).then(res => {
        if (res.data.errcode == ERR_OK) {
          this.standardData = res.data.data;
        } else {
          this.standardData = [];
        }
      });
    }
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

	.complete{
		float: right;
	}
  .message-none {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .order-num{
  	background-color: #e7e7e7;
    font-size: .24rem;
    line-height: .5rem;
    height: .5rem;
    padding: 0 .2rem;
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
  .text h2{
  	font-size: 0.3rem;
    line-height: 0.7rem;
  }
  .text p{
  	font-size: 0.2rem;
  	line-height: 0.3rem;
  }
  .detail_box{
  	border-top: .02rem solid #e0e0e0;
    padding: .2rem .2rem .4rem;
    text-align: right;
  }
  .detail{
  	display: inline-block;
  	width: 2rem;
  	background-color: #f2f2f2;
    border: .02rem solid #d8d8d8;
    color: #000;
    font-size: .24rem;
    line-height: .54rem;
    height: .54rem;
    text-align: center;
  }
  .no_customization{
		text-align: center;
		margin: 0.4rem;
		color: #4f4f4f;
	}
</style>
