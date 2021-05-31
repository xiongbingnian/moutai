<template>
	<div class="standard">
		<fullpage>
			<div class="page-1 page">
				<header class="header-nav">
					<a href="javascript:;" :class="{active:currentPageIndex==0}">
						<span>飞天系列</span>
					</a>
					<a href="javascript:;" :class="{active:currentPageIndex==1}">
						<span>酱香系列</span>
					</a>
					<a href="javascript:;" :class="{active:currentPageIndex==2}">
						<span>坛子酒系列</span>
					</a>
				</header>
				<div class="swiper-box">
					<slider @selectIndex="selectIndex">
						<div>
							<img src="./standard-product-1.png">
						</div>
						<div>
							<img src="./standard-product-2.png">
						</div>
						<div>
							<img src="./standard-product-3.png">
						</div>
					</slider>
					<router-link v-bind="{to:'/standard/'+(currentPageIndex+1)}" class="btn">
						<span>立即定制</span>
					</router-link>
					<a href="#" class="pointer-how">如何定制</a>
					<img class="standard-dropdowm" src="../personality/standard-dropdowm.png" alt="" />
				</div>
			</div>
			<div class="page-2 page">
				<div class="inner-box">
					<div class="bg">
						<img src="../personality/standard-title-bg.jpg" />
					</div>
					<div class="ver-middle">
						<div class="title-icon">
							<img src="./standard-title-icon.png">
						</div>
						<p class="text">在固定位置植入个性化元素，<br>以经典成就只属于您的尊贵独特</p>
						<p class="line-text-line">
							<span></span>
							<span>根据您的场景需求，基于经典的贵州茅台酒<br>及大曲酱香系列酒</span>
							<span></span>
						</p>
					</div>
					<!--<img class="standard-dropdowm" src="../personality/standard-dropdowm.png" alt="" />-->
				</div>
			</div>
			<div class="page-3 page">
				<div class="standard-content">
					<div class="content-title">
						<p class="line-text-line">
							<span></span>
							<span>定制内容</span>
							<span></span>
						</p>
						<p>固定区域由您定</p>
					</div>
					<div class="arrow-single"></div>
					<div class="content-list">
						<h1 class="list-title"><span>a</span>从选择一款您喜欢的系列开始</h1>
						<ul class="list-series">
							<li>经典飞天系列</li>
							<li>坛子酒系列</li>
							<li>国之四礼系列</li>
							<li>大曲酱香系列</li>
						</ul>
						<h1 class="list-title"><span>b</span>选择您喜欢的产品颜色和规格</h1>
						<div class="list-color-size"><span><img src="./standard-chioce-color.png"></span><span><img src="./standard-chioce-size.png"></span></div>
						<h1 class="list-title"><span>c</span>定制范围：酒瓶背标、<br><br>酒盒添加您想要的专属信息、上传照片</h1>
						<div class="list-standard-rang"><img src="./standard-2.png"></div>
					</div>
				</div>
			</div>
			<div class="page-4 page">
				<div class="standard-content">
					<h1 class="list-title"><span>d</span>起定量</h1>
					<ul>
						<li>
							<p>标准化定制＋经典飞天</p>
							<p><span>1件起定</span><span>每件6瓶</span></p>
						</li>
						<li>
							<p>标准化定制＋坛子酒</p>
							<p><span>1件起定</span><span>每件1瓶</span></p>
						</li>
						<li>
							<p>标准化定制＋国之四礼</p>
							<p><span>100件起定</span><span>每件4瓶</span></p>
						</li>
						<li>
							<p>标准化定制＋大曲酱香</p>
							<p><span>1件起定</span><span>每件6瓶</span></p>
						</li>
					</ul>
					<h1 class="list-title"><span>e</span>定制周期</h1><br>
					<p>标准化定制的产品周期</p><b class="color_a87e41 font_48">大约为40-55个工作日</b>
					<p class="color_a87e41 font_24">（特殊情况除外）</p>
				</div>
			</div>
			<div class="page-5 page">
				<div class="standard-content standard-process">
					<div class="content-title">专业规范化的定制流程</div>
					<div class="process-container">
						<div class="arrow-single"></div>
						<div class="process-list">
							<div class="process-icon"><img src="./standard-process-1.png"></div>
							<p class="list-title"><span>1</span>设计确认</p>
							<hr>
							<p>您可以在线上快速实现标准化产品的定制，客服人员收到您的订单后会在3个工作日内进行审核，并及时给您反馈。</p>
						</div>
						<div class="process-list">
							<div class="process-icon"><img src="./standard-process-2.png"></div>
							<p class="list-title"><span>2</span>支付款项</p>
							<hr>
							<p>设计通过审核后，支付产品全款后进入生产阶段。</p>
						</div>
						<div class="process-list">
							<div class="process-icon"><img src="./standard-process-3.png"></div>
							<p class="list-title"><span>3</span>产品生产</p>
							<hr>
							<p>从包装打样到确认，再到生产、包装和出库，大约需要30-45个工作日完成您的标准化产品生产。</p>
						</div>
						<div class="process-list speical-box">
							<div class="process-icon"><img src="./standard-process-4.png"></div>
							<p class="list-title"><span>4</span>物流配送</p>
							<hr>
							<p>空运和陆运两种物流方式供您选择，保证快速安全便捷。</p>
						</div>
						<div class="process-list">
							<div class="process-icon"><img src="./standard-process-5.png"></div>
							<p class="list-title"><span>5</span>确认收货</p>
							<hr>
							<p>收到产品确认无任何问题后签收，客服人员会根据您的需求开具发票并快递，您的个性化产品定制之旅正式完成，接下来就请尽情享受您的专属茅台酒！</p>
						</div>
					</div>
				</div>
			</div>
		</fullpage>
	</div>
</template>
<script>
	import Fullpage from "base/fullpage/fullpage";
	import Slider from "base/slider/slider";
	export default {
		data() {
			return {
				currentPageIndex: 0
			};
		},
		components: {
			Fullpage,
			Slider
		},
		created() {
  		},
		mounted() {},
		
		methods: {
			selectIndex(index) {
				this.currentPageIndex = index - 1;
				if(index == 1) {
					localStorage.setItem('title', '飞天系列')
				}
				if(index == 2) {
					localStorage.setItem('title', '酱香系列')
				}
				if(index == 3) {
					localStorage.setItem('title', '坛子酒系列')
				}
			}
		}
	};
</script>
<style lang="stylus" scoped>
.standard{
	position: absolute;
		left: 0;
		top: 0.88rem;
		width: 100%;
		height: 100%;
}
	.standard {
		
		.header-nav {
			height: 0.8rem;
			border-bottom: 3px solid #e7e7e7;
			text-align: center;
			a {
				color: #040404;
				opacity: 1;
				text-decoration: none;
				display: inline-block;
				margin: 3px 1.5% 0;
				height: 100%;
				position: relative;
				span {
					display: block;
					text-align: center;
					height: 100%;
					line-height: 2.7;
					opacity: 0.7;
				}
			}
			a.active span {
				border-bottom: 3px solid #d8000b;
				opacity: 1;
			}
		}
		.swiper-box {
			padding-top: 0.7rem;
			padding-bottom: 0.4rem;
			text-align: center;
			img {
				margin: 0 auto;
				width: 83%;
			}
			a.btn {
				padding: 0;
				line-height: 0.88rem;
				background-color: #d8000b;
				color: #fff;
				border-radius: 0;
				border: none;
				width: 2.8rem;
				font-size: 0.44rem;
				display: inline-block;
			}
			.pointer-how {
				display: block;
				margin-top: 0.3rem;
				color: #999;
			}
		}
	}
	.slider-item>img{
		width: 83%!important;
	}
	.standard .standard-dropdowm {
		width: 2%!important;
		margin: 0.2rem auto!important;
	}
	
	.inner-box {
		position: relative;
	}
	
	.bg {
		width: 100%;
	}
	
	.bg img {
		width: 100%;
	}
	
	.ver-middle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		text-align: center;
	}
	
	.title-icon {
		width: 1.45rem;
		margin: 0 auto;
	}
	
	.title-icon img {
		width: 100%;
	}
	
	.ver-middle>p {
		line-height: 2;
		margin-top: 30px;
		color: #fff;
		text-align: center;
		font-size: .44rem;
	}
	
	.ver-middle .line-text-line {
		margin-top: 0;
	}
	
	.line-text-line span:first-child,
	.line-text-line span:last-child {
		width: 9%;
		background: #a87e41;
		height: 1px;
	}
	
	.page .line-text-line span {
		display: inline-block;
		vertical-align: middle;
		margin: 0 5px;
		font-size: .24rem;
		line-height: 1.5;
		color: #a87e41;
	}
	
	.standard-content {
		position: relative;
		text-align: center;
		font-size: .3rem;
		padding-bottom: .8rem;
		color: rgba(0, 0, 0, .7);
	}
	
	.content-title {
		color: #fff;
		font-size: .36rem;
		background: #a87e41;
		padding: 5px 0;
	}
	
	.content-title>p {
		margin: 0 0 2px;
	}
	
	.content-title .line-text-line span:first-child,
	.content-title .line-text-line span:last-child {
		background: #fff;
	}
	
	.content-title .line-text-line span {
		color: #fff;
	}
	
	.arrow-single {
		border: .1rem solid transparent;
		border-top: .1rem solid #a87e41;
		width: 0;
		height: 0;
		margin: 0 auto;
		text-align: center;
		font-size: .3rem;
		color: rgba(0, 0, 0, .7);
	}
	
	.page h1 {
		font-weight: 500;
		line-height: 1.1;
		color: inherit;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	
	.list-title {
		border-bottom: 1px solid #e5e5e5;
		padding: .3rem 0;
		font-size: .3rem;
	}
	
	.list-title span {
		display: inline-block;
		width: .18rem;
		height: .18rem;
		line-height: .18rem;
		font-size: .18rem;
		background: #9e9e9e;
		color: #fff;
		border-radius: 50%;
		margin-right: .15rem;
	}
	
	.standard-content li {
		color: #a87e41;
		margin: .25rem 1.2%;
		display: inline-block;
		text-align: center;
	}
	
	.list-color-size {
		margin-top: .5rem;
	}
	
	.list-color-size span {
		display: inline-block;
		width: 49%;
	}
	
	.list-color-size span:first-child {
		border-right: 1px solid #e5e5e5;
	}
	
	.list-color-size span img {
		width: 50%;
		vertical-align: middle;
		margin: auto;
	}
	
	.list-standard-rang {
		width: 5.24rem;
		margin: .5rem auto;
	}
	
	.list-standard-rang>img {
		width: 100%;
	}
	
	.standard-content li p:first-child {
		border-bottom: 1px solid #e5e5e5;
		padding: .25rem 0;
	}
	
	.standard-content li p:last-child {
		color: rgba(0, 0, 0, .7);
	}
	
	.standard-content li p span {
		display: inline-block;
		font-size: .48rem;
		line-height: 1.42857143;
	}
	
	.standard-content li p span:last-child {
		font-size: .24rem;
		margin-left: .1rem;
	}
	
	.standard-content .font_48 {
		display: inline-block;
		font-weight: 400;
		border-top: 1px solid #e5e5e5;
		padding-top: 10px;
		margin: 0.1rem 0;
	}
	
	.color_a87e41 {
		color: #a87e41;
	}
	
	.font_48 {
		font-size: .48rem;
	}
	
	.font_24 {
		font-size: .24rem;
	}
	.standard-process{
		background: #000000;
		color: #fff;
	}
	.standard-process .content-title{
		line-height: 1rem;
	}
	.standard-process .process-list {
	    display: inline-block;
	    width: 43%;
	    margin: 4% 3% 0;
	    vertical-align: top;
	    text-align: center;
	}
	.standard-process .process-icon {
	    margin-bottom: .1rem;
	}
	.standard-process .process-icon img {
	    width: auto;
	    height: 1.17rem;
	    margin: auto;
	}
	.standard-process .list-title {
	    border: 0;
	    padding: 0;
	}
	.standard-process .process-list hr {
	    margin: .18rem 0;
	    border-color: hsla(0,0%,93%,.6);
	}
	.standard-process .process-list p:last-child {
	    opacity: .7;
	    text-align: justify;
	    font-size: .24rem;
	    line-height: 1.42857143;
	}
	.standard-process .speical-box .process-icon img {
	    height: .74rem;
	}
	.standard-process .process-container{
		text-align: left;
		padding-bottom: 30px;
	}
	.page{
		overflow: auto;
	}
	/*.fullpage-container{
		overflow: auto;
	}*/
</style>