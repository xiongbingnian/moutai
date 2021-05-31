<template>
  <div id="information">
    <b-header :title="title"></b-header>
    <div class="information_cont" v-html="deatilData.content" v-if="deatilData">
    	<!--<h1 class="title">国酒茅台定制公司学习传达集团公司五届三次职工代表大会精神</h1>
    	<p class="time">
    		<span>2018-02-10</span>
    		<span>[公司新闻]</span>
    	</p>
    	<div class="main">
    		<p>
    			2018年2月5日至6日，茅台集团第五届第三次职工代表大会在茅台会议中心举行。公司董事长蔡在鹏、党支部副书记兼副总经理钟丽、副总经理宋敏代表定制酒公司参加了会议。 
    		</p>
    		<p>
    			2018年2月5日至6日，茅台集团第五届第三次职工代表大会在茅台会议中心举行。公司董事长蔡在鹏、党支部副书记兼副总经理钟丽、副总经理宋敏代表定制酒公司参加了会议。 
    		</p>
    		<img src="../customMade/company_1.jpg" alt="" />
    		<p>
    			2018年2月5日至6日，茅台集团第五届第三次职工代表大会在茅台会议中心举行。公司董事长蔡在鹏、党支部副书记兼副总经理钟丽、副总经理宋敏代表定制酒公司参加了会议。 
    		</p>-->
    	</div>
    </div>
  </div>
</template>
<script>
	import BHeader from "base/b-header/b-header";
  export default {
    data() {
      return {
        title: "资讯天地",
        deatilData: {}
      };
    },
    components: {
	    BHeader,
	  },
	  created() {
	    this.getDeatilPage();
	  },
	  watch: {
	    // 当url的参数的发生改变的时候，会触发这个watch的重新执行
	    $route: function() {
	      // 当触发了这个方法就重新获取到最新的数据
	      this.getDeatilPage();
	    }
	  },
	  methods: {
	    getDeatilPage() {
//	      let deatilId = this.$route.params.deatilId;
	      let deatilId =this.$route.query.id;
	      let url = "/article/details?id=" + deatilId + "";
	      this.$http.get(url).then(res => {
	        this.deatilData = res.data.data;
	      });
	    }
	  }
  };
</script>
<style>
	.information_cont{
		padding: 0.4rem 0.2rem;
	}
  .information_cont h2{
  	color: #dc1721;
    font-size: .36rem;
    line-height: 1.5;
    text-align: center;
  }
  .information_cont img{
		width: 100%;
    height: auto;
		margin: 10px 0;
	}
	.information_cont .time{
		border-bottom: 1px solid #ddd;
		text-align: center;
		margin: 20px 0;
	}
	.information_cont .time>span{
		margin: 0 5px;
		color: #7B7B7B;
	}
	.information_cont .cont p{
		margin-top: 0px;
    margin-bottom: 0px;
    text-align: justify;
    text-indent: 32px;
    font-stretch: normal;
    font-size: 0.32rem;
    line-height: 0.5rem;
    -webkit-text-stroke-width: initial;
    -webkit-text-stroke-color: rgb(0, 0, 0);
	}
	
</style>
