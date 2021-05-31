<template>
  <div class="page-orderReview">
    <div class="inner-container">
      <h2 class="title">
        <span>订单审核</span>
      </h2>
      <div class="inner-main">
      	<div class="inner-top">
      		<div class="success-icon">
      			<!--<img src="../standard-page/detail-2-type-1.png">-->
      		</div>
      		<p class="success-word">您的订单已提交，<br>我们将在10-15个工作日之内审核</p>
      		<p>如若通过审核，我们将通知您付款，<br>具体付款方式和相关协议在审核通过后，将与您具体沟通，<br>请耐心等待，谢谢！</p>
      	</div>
      	<div class="inner-bottom">
      		<p class="other-title">
      			<span>或搜索其他设计</span>
      		</p>
      		<ul class="standard_list">
						<li>
							<router-link to="/standard/1">
								<span>
									<img src="../standard/standard-product-1.png">
								</span>
								<p class="binding">飞天系列</p>
							</router-link>
						</li>
						<li>
							<router-link to="/standard/2">
								<span>
									<img src="../standard/standard-product-2.png">
								</span>
								<p class="binding">酱香系列</p>
							</router-link>
						</li>
						<li>
							<router-link to="/standard/3">
								<span>
									<img src="../standard/standard-product-3.png">
								</span>
								<p class="binding">坛子酒系列</p>
							</router-link>
						</li>
      		</ul>
      	</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style lang="stylus" scoped>
.page-orderReview{
	padding: 0 0.25rem 1.28rem;
}
.inner-container .title {
  font-size: 0.35rem;
  border-bottom: 2px solid #e1e1e1;
  color: #1b1b1b;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
}

.title span {
	border-bottom: 3px solid #1b1b1b;
	display: inline-block;
	padding: 0 0.15rem;
	margin-bottom: -2px;
	padding-bottom: 4px;
}

.title span:before {
	content: '';
	background: url('./order_icon.png') 50% no-repeat;
	background-size: 100%;
	width: 0.35rem;
	height: 0.35rem;
	display: inline-block;
	vertical-align: top;
	margin-right: 0.1rem;
}
.inner-main{
	text-align: center;
	color: rgba(29,21,18,.7);
	font-size: .25rem;
	box-shadow: 0 3px 5px rgba(0,0,0,.2);
	background-color: #fff;
	margin: .3rem 0;
	padding: .2rem .1rem;
}
.success-icon img{
    margin: .5rem auto;
}
.success-word {
    color: #d8000b;
    font-size: .35rem;
    margin-bottom: .2rem;
}
.inner-top p {
    line-height: 1.6;
}
.other-title {
    border-bottom: 1px dashed #d6d6d6;
    height: .17rem;
    margin: 1.5rem .1rem .3rem;
}
.other-title span {
    background: #fff;
    padding: 0 10px;
}
.standard_list {
    overflow: hidden;
    text-align: left;
}
.standard_list li{
	float: left;
	width: 40%;
	margin: 2% 5%;
	border: 1px solid #cbcbcb;
}
.standard_list li img{
	width: 100%;
}
.binding {
    background-color: #efefef;
    padding: .1rem 0;
    border-top: 1px solid #cbcbcb;
    text-align: center;
}
</style>

