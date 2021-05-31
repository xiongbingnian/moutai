<template>
  <div class="standard-page">
    <b-header :title="title"></b-header>
    <section class="standard-detail-wrap" v-if="standardPageData.length">
      <div class="content-wrap">
        <div class="banner">
          <img v-bind:src="standardPageData[descboxIndex].image" />
        </div>
        <div class="series-info">
          <h3 class="title">{{standardPageData[descboxIndex].item_name}}</h3>
          <p class="describe">{{standardPageData[descboxIndex].item_abbr}}</p>
        </div>
        <div class="type-info">
          <div class="type-item">
            <h3 class="title">{{standardPageData[descboxIndex].p_nickname}}</h3>
            <p class="describe">{{standardPageData[descboxIndex].p_abbr}}</p>
            <div class="price">
              <div class="price-label">参考定制价格：</div>
              <div class="price-value">
                <div class="value-item" v-for="(price,index) in standardPageData[descboxIndex].price" :key="index"> 
                  <span class="num">{{price.price}}</span>
                  <span class="unit">/{{ price.name }}</span>
                </div>
              </div>
            </div>
            <div class="price-tips">（报价仅供参考，价格根据市场动态调整，以签订合同价格为准）</div>
          </div>
        </div>
        <div class="type-selector">
          <div class="section-body">
            <div class="selector-item" 
            	:class="{nav_banner_active:index==nav_banner_status}"
            	@click="navBanner(index)" 
            	v-for="(item,index) in standardPageData"
            	v-if="standardPageData.length!=1" :key="index"
            	>
              <img src="./detail-2-type-1.png" >
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          	<button class="btn" @click="goCustomizable">立即定制</button>
        </div>
        <div class="other-series">
          <h3 class="divider-title">
            <span>其他系列</span>
          </h3>
          <ul class="standard_list">
						<li class="other-item">
							<router-link to="/standard/1">
								<img src="../standard/standard-product-1.png">
							</router-link>
						</li>
						<li class="other-item">
							<router-link to="/standard/2">
								<img src="../standard/standard-product-2.png">
							</router-link>
						</li>
						<li class="other-item">
							<router-link to="/standard/3">
								<img src="../standard/standard-product-3.png">
							</router-link>
						</li>
      		</ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BHeader from "base/b-header/b-header";
export default {
  data() {
    return {
      title: localStorage.getItem('title'),
      standardPageData: [],
      nav_banner_status: 0, //控制右侧导航状态
      descboxIndex: 0,
      standardData: []
    };
  },
  created() {
    this.getstandardPageData();
  },
//watch: {
//  // 当url的参数的发生改变的时候，会触发这个watch的重新执行
//  $route: function() {
//    // 当触发了这个方法就重新获取到最新的数据
//    this.getstandardPageData();
//  }
//},
  components: {
    BHeader
  },
  methods: {
  	/* 点击右侧导航触发，触发之后的值会改变，所以当重新选择其他数据的时候，要还原 */
    navBanner(index) {
      this.nav_banner_status = index;
      this.descboxIndex = index;
    },
    goCustomizable() {
    	this.$router.push({ path: '/customizable?id=' + this.standardPageData[this.descboxIndex].item_id });
    },
    getstandardPageData() {
      let id = this.$route.params.id;
      let url = "/index/standard_list&id=" + id + "";
      this.$http.get(url).then(res => {
        if (res.data.errcode == 0) {
          this.standardPageData = res.data.data;
          this.title=this.standardPageData[this.descboxIndex].item_name;
        	//console.log(res.data.data);
//        alert(this.standardPageData[this.descboxIndex].item_id);
        }
        
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.standard-detail-wrap {
  .banner {
    height: 77.33333333vw;
    width: 100%;
    position: relative;

    img {
      height: 77.33333333vw;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .series-info {
    padding: 0 0.42rem;

    .title {
      color: #000;
      font-size: 0.3rem;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .describe {
      color: #000;
      font-size: 0.24rem;
      line-height: 0.34rem;
    }
  }

  .type-info {
    padding: 0 0.42rem;

    .title {
      color: #a87e41;
      font-size: 0.3rem;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .describe {
      color: #000;
      font-size: 0.24rem;
      line-height: 0.34rem;
    }

    .price-tips {
      color: #aaa;
      font-size: 0.2rem;
      line-height: 0.34rem;
    }

    .price {
      .price-label {
        color: #000;
        font-size: 0.2rem;
        float: left;
        line-height: 0.56rem;
        vertical-align: bottom;
      }

      .price-value {
        .num {
          color: #d8000b;
          font-size: 0.36rem;
          font-weight: 400;
          line-height: 0.56rem;
          vertical-align: bottom;
        }

        .unit {
          line-height: 0.56rem;
          vertical-align: bottom;
        }
      }
    }
  }

  .type-selector {
    border-top: 0.02rem solid #d5d5d5;
    margin-top: 0.4rem;
    padding: 0 0.42rem;

    .selector-item {
      border: 0.02rem solid #d5d5d5;
      float: left;
      width: 38%;
      margin: 0.24rem 6%;

      img {
        width: 100%;
      }
    }
  }

  .btn-wrap {
    margin-top: 0.24rem;
    padding: 0 0.42rem;

    .btn {
      font-size: 0.44rem;
      height: 0.88rem;
      width: 100%;
      padding: 0;
      line-height: 0.88rem;
      background-color: #d8000b;
      color: #fff;
      border-radius: 0;
      border: none;
    }
  }

  .other-series {
    background-color: #e9e9e9;
    margin-top: 0.24rem;
    padding: 0.24rem 0.42rem;

    .divider-title {
      font-size: 0.28rem;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .other-item {
      display: block;
      margin: 0.24rem auto;

      img {
        width: 100%;
      }
    }
  }
}
.price-value{
	margin-left: 2rem;
}
.nav_banner_active{
	border-color: #d60018!important;
}
.other-item{
	background: #fff;
  padding: 0.2rem;
  height: 4rem;
  overflow: hidden;
}
.other-item img{
	width: 60%!important;
  margin: auto;
}
</style>
