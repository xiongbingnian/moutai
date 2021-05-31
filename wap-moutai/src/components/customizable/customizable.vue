<template>
  <div class="customizable" v-if="step1Data.length">
    <!-- 第一步 -->
    <div class="customizable-wrap1" :class="{'on':currentPage==0}">
      <div class="customizable-title">
        <img src="./page01.jpg" >
      </div>
      <div class="customizable-wrap">
        <div class="wrap-head">
          <h2 class="title">选择酒瓶&模板</h2>
          <p class="content">{{step1Data[currentPage0.cuttentItemIndex0].p_abbr}}</p>
        </div>
        <div class="wrap-img">
          <img v-bind:src="step1Data[currentPage0.cuttentItemIndex0].image" class="cust_bg">
          <div class="m_p_img_box" style="">
	        	<img class="m_p_img" :src="step1Data[currentPage0.cuttentItemIndex0].models[tplImgIndex].p_image" alt="" />
	        </div>
	        <div class="m_h_img_box" style="">
	        	<img class="m_h_img" :src="step1Data[currentPage0.cuttentItemIndex0].models[tplImgIndex].h_image" alt="" />
	        </div>
          <!--<img src="../login/login-logo@2X.png" class="img2">-->
        </div>
        <div class="wrap-option">
          <div class="option-title">
            <div class="tab" :class="{'active-bg':currentTabIndex0==0}" @click="_currentTabIndex(0)">
              <span>选择产品</span>
            </div>
            <div class="tab" :class="{'active-bg':currentTabIndex0==1}" @click="_currentTabIndex(1)">
              <span>选择规格</span>
            </div>
            <div class="tab" :class="{'active-bg':currentTabIndex0==2}" @click="_currentTabIndex(2)">
              <span>选择模板</span>
            </div>
          </div>
          <div class="option-select">
            <!-- 产品 -->
             <ul class="list product" v-if="currentTabIndex0==0">
              <li class="list-item" :class="{'active-red':currentPage0.cuttentItemIndex0==index}" 
                @click="_itemCurrentIndex(0,index)"
                v-for="(item,index) in step1Data" :key="index"
              >
                <span class="item-text">{{item.p_name}}</span>
              </li>
            </ul>
            <!-- 规格 -->
            <ul class="list standard" v-if="currentTabIndex0==1">
              <li class="list-item" :class="{'active-red':currentPage0.cuttentItemIndex1==index}" 
                @click="_itemCurrentIndex(0,index)"
                v-for="(item,index) in step1Data[currentPage0.cuttentItemIndex0].container"
              >
                <span class="item-text">{{item.size}}</span>
              </li>
            </ul>
            <!-- 模板 -->
            <ul class="list template" v-if="currentTabIndex0==2">
              <li class="list-item" :class="{'active-red':currentPage0.cuttentItemIndex2==index}" 
                @click="_itemCurrentIndex(0,index)"
                v-for="(item,index) in step1Data[currentPage0.cuttentItemIndex0].models"
                :key="index"
              >
                <span class="item-text">{{item.model_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrap-step" :class="{'move-head':headStatus}">
          <button class="btn" disabled>返回上一步</button>
          <button class="btn" @click="_nextStep">下一步(酒标定制)</button>
        </div>
      </div>
    </div>  
    <!-- 第二步 -->
    <div class="customizable-wrap2" :class="{'on':currentPage==1}">
      <div class="customizable-title">
        <img src="./page02.jpg" >
      </div>
      <div class="customizable-wrap">
        <div class="wrap-head">
          <h2 class="title">酒标定制</h2>
          <p class="content">在选择的模板上，可以任意选择想要保留或删除的元素，再按照规定上传照片和输入文字，酒标就轻松完成了！温馨提示：可定制的区域有限，文字尽量精简！</p>
        </div>
        <div class="wrap-img">
	    	<div id="p_screenshot">
	    	  <img :src="step1Data[currentPage0.cuttentItemIndex0].models[tplImgIndex].p_image" class="imgWidth" />
	          <img :src="userImg" class="page2_img" v-if="userImg">
	      	  <div class="remarks">
	            <span v-for="item in step2Data.content" :style="{fontSize:item.font_size*0.01+'rem',left:item.coordinate_left*0.015+'rem',top:item.coordinate_top*0.0109+'rem',width:item.width*0.015+'rem',height:item.height*0.016+'rem',}">{{item.remarks}}</span>
	          </div>
	    	</div>
        </div>
        <div class="wrap-option">
          <div class="option-title">
            <div class="tab" :class="{'active-bg':currentTabIndex1==0}" @click="_currentTabIndex(0)" v-if="step2Data.image !== undefined">
              <span>背标图片</span>
            </div>
            <div class="tab" :class="{'active-bg':currentTabIndex1==1}" @click="_currentTabIndex(1)" v-if="step2Data.content !== undefined">
              <span>背标文字</span>
            </div>
          </div>
          <div class="option-select">
            <!-- 背标图片 -->
             <form v-show="currentTabIndex1==0" name="UploadForm" class="select-upload" v-if="currentTabIndex1==0">
              <section class="select-wrap">
                <div class="select-form">
                  <label for="select-img" class="select-img" @click="btnChangeImg">
                    <img :src="userImg" v-if="userImg">
                    <span class="icon icon-camera"></span>
                  </label>
                  <input type="file" class="input-upload" @change="change" accept="image/*" ref="inputUpload">
                  <div class="select-text">
                    <p>* 点击可上传图片</p>
                    <p>* 可拉动编辑框放大、缩小、移动图片。</p>
                  </div>
                </div>
              </section>
              <div class="require">
                <div class="require-title">图片要求</div>
                <p class="p1">
                  <span>文件大小</span>
                  <span>图片尺寸</span>
                  <span>图片格式</span>
                </p>
                <p class="p2">
                  <span>>100K;<1M</span>
                  <span>>1000px;<1000px</span>
                  <span>>JPG/TIF/PNG</span>
                </p>
              </div>
            </form>
            <!-- 背标文字 -->
            <div v-show="currentTabIndex1==1" v-if="currentTabIndex1==1">
              <ul class="list standard">
                <li class="list-item" :class="{'active-red':currentPage1.cuttentItemIndex==index}" 
                  @click="_itemCurrentIndex(1,index)"
                  v-for="(item,index) in step2Data.content"
                  :key="index">
                  <span class="item-text">{{ item.name }}</span>
                </li>
              </ul>
              <div class="font-set">
                <b class="set-text">字号：</b>
                <input type="number" class="set-num" max="10" v-model="step2Data.content[textareaIndex1].font_size" ref="fontSize1" @change="changeFotnSize(1)">
                <!--<span class="set-at">对齐方式</span>-->
                <textarea v-model='step2Data.content[textareaIndex1].remarks' ref="remarks1" @change="changeRemarks(1)">
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap-step" :class="{'move-head':headStatus}">
          <button class="btn" @click="_lastStep">返回上一步</button>
          <button class="btn" @click="_nextStep">下一步(酒盒定制)</button>
        </div>
      </div>
    </div>  
    <!-- 第三步 -->
    <div class="customizable-wrap3" :class="{'on':currentPage==2}">
      <div class="customizable-title">
        <img src="./page03.jpg" >
      </div>
      <div class="customizable-wrap">
        <div class="wrap-head">
          <h2 class="title">酒盒定制</h2>
          <p class="content">按规定输入需要的文字，酒盒就轻松完成了！<br>温馨提示：由于可定制的区域有限，文字要尽量精简喔！</p>
        </div>
        <div class="wrap-img" id="h_screenshot">
          <div>
          	<img :src="step1Data[currentPage0.cuttentItemIndex0].models[tplImgIndex].h_image" class="imgWidth"/>
	        <img :src="userImg2" class="page2_img" v-if="userImg">
	        <div class="remarks remarks2">
	          <span v-for="item in step3Data.content" :style="{fontSize:item.font_size*0.012+'rem',left:item.coordinate_left*0.011+'rem',top:item.coordinate_top*0.00701+'rem',width:item.width*0.011+'rem',height:item.height*0.02+'rem',}">
	            {{item.remarks}}
	          </span>
	        </div>
	      </div>
        </div>
        <div class="wrap-option">
          <div class="option-title">
            <div class="tab" :class="{'active-bg':currentTabIndex2==0}" @click="_currentTabIndex(0)" v-if="step3Data.image !==  undefined">
              <span>酒盒图片</span>
            </div>
            <div class="tab" :class="{'active-bg':currentTabIndex2==1}" @click="_currentTabIndex(1)" v-if="step3Data.content !== undefined">
              <span>酒盒文字</span>
            </div>
          </div>
          <div class="option-select">
            <!-- 背标图片 -->
            <form name="UploadForm" v-show="currentTabIndex2==0" class="select-upload" v-if="currentTabIndex2==0">
              <section class="select-wrap">
                <div class="select-form">
                  <label for="select-img" class="select-img" @click="btnChangeImg">
                    <img :src="userImg2" v-if="userImg2">
                    <span class="icon icon-camera"></span>
                  </label>
                  <input type="file" class="input-upload" @change="change" accept="image/*" ref="inputUpload">
                  <div class="select-text">
                    <p>* 点击可上传图片</p>
                    <p>* 可拉动编辑框放大、缩小、移动图片。</p>
                  </div>
                </div>
              </section>
              <div class="require">
                <div class="require-title">图片要求</div>
                <p class="p1">
                  <span>文件大小</span>
                  <span>图片尺寸</span>
                  <span>图片格式</span>
                </p>
                <p class="p2">
                  <span>>100K;<1M</span>
                  <span>>1000px;<1000px</span>
                  <span>>JPG/TIF/PNG</span>
                </p>
              </div>
            </form>
            <!-- 背标文字 -->
            <div v-show="currentTabIndex2==1" v-if="currentTabIndex2==1">
              <ul class="list standard">
                <li class="list-item" :class="{'active-red':currentPage2.cuttentItemIndex==index}" 
                  @click="_itemCurrentIndex(2,index)"
                  v-for="(item,index) in step3Data.content"
                  :key="index"
                >
                  <span class="item-text">{{ item.name }}</span>
                </li>
              </ul>
              <div class="font-set">
                <b class="set-text">字号：</b>
                <input type="number" class="set-num" max="10" v-model="step3Data.content[textareaIndex2].font_size" ref="fontSize2" @change="changeFotnSize(2)">
                <!--<span class="set-at">对齐方式</span>-->
                <textarea v-model='step3Data.content[textareaIndex2].remarks' ref="remarks2" @change="changeRemarks(2)">
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap-step" :class="{'move-head':headStatus}">
          <button class="btn" @click="_lastStep">返回上一步</button>
          <button class="btn" @click="_nextStep">下一步(完成定制)</button>
        </div>
      </div>
    </div>  
    <!-- 第四步 -->
    <div class="customizable-wrap4" :class="{'on':currentPage==3}">
      <div class="customizable-title">
        <img src="./page04.jpg" >
      </div>
      <div class="customizable-wrap">
        <div class="wrap-head">
          <h2 class="title">完成定制</h2>
          <p class="content">恭喜您！您的专属茅台飞天酒已经定制成功！温馨提醒，飞天系统的起订量是1件，每件6瓶。请您再次确认定制数量！</p>
        </div>
        <div class="wrap-img">
          <img v-bind:src="step1Data[currentPage0.cuttentItemIndex0].image" class="cust_bg">
        	<div class="m_p_img_box" style="">
	        	<img class="m_p_img" :src="ruleForm.q_image" alt="" />
	        </div>
	        <div class="m_h_img_box" style="">
	        	<img id="m_h_img" class="m_h_img" :src="ruleForm.h_image" alt="" />
	        </div>
        </div>
        <div class="wrap-option">
          <div class="option-count">
            <ul class="list">
              <li class="list-item">
                <span>定制数量：</span>
                <p>
                  <button type="button" @click="subtract">-</button>
                  <button type="button">{{ruleForm.num}}</button>
                  <button type="button" @click="increase">+</button>
                </p>
              </li>
              <li class="list-item">
                <span>商品单价：</span>
                <span class="price">￥{{ step1Data[currentPage0.cuttentItemIndex0].container[priceIndex].count_price }}(6瓶/件)</span>
              </li>
              <li class="list-item">
                <span>商品总价：</span>
                <span class="total">￥{{step1Data[currentPage0.cuttentItemIndex0].container[priceIndex].count_price * ruleForm.num | totalPrice}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrap-step" :class="{'move-head':headStatus}">
          <button class="btn" @click="_lastStep">返回上一步</button>
          <button class="btn" @click="_goShopping">确认并加入购物车</button>
        </div>
      </div>
    </div>  
    <cropper ref="cropper" @postImg="postImg"></cropper>
    <!-- loading -->
    <div class="center-loading" v-if="loadingShow">
      <moutai-loading></moutai-loading>
    </div>
  </div>
</template>
<script>
import MoutaiLoading from "base/moutai-loading/moutai-loading";
import Cropper from "base/cropper/cropper";
import { vm } from "common/js/vm";
import {
    html2Canvas
  } from "common/js/html2canvas.js";
export default {
  components: {
    MoutaiLoading,
    Cropper
  },
  data() {
    return {
      //控制当前页面切换
      currentPage: 0,
      currentTabIndex0: 0, //控制页面1tab
      currentTabIndex1: 0, //控制页面2tab
      currentTabIndex2: 0, //控制页面3tab
      //控制页面1item
      currentPage0: {
        cuttentItemIndex0: 0,
        cuttentItemIndex1: 0,
        cuttentItemIndex2: 0
      },
      //控制页面2item
      currentPage1: {
        cuttentItemIndex: 0
      },
      //控制页面3item
      currentPage2: {
        cuttentItemIndex: 0
      },
      loadingShow: true,
      headStatus: false,
      userImg: "",
      userImg2: "",
      price: 2214,
      total: 2214,
      backTextSwitchover1: 0, //背标文字切换
      backTextSwitchover2: 0, //背标文字切换
      tplImgIndex: 0, //模板图片索引
      textareaIndex1: 0, //背标内容
	    textareaIndex2: 0, //背标内容
	    priceIndex: 0, //价格索引
	    imageUrl1: "", //图片url
	    imageUrl2: "", //图片url
	    content1:[],
      image1:"",
      content2:[],
      image2:"",
	    step1Data: [],
	    step2Data: [],
	    step3Data: [],
	    returnObj: {}, //后台返回的用户填写数据值
      ruleForm: {
          product_id: "", //产品id
          price_id: "", //价格id
          models_id: "1", //模型id
          num: "1", //数量
          token: sessionStorage.getItem("token")
        }
    };
  },
  created() {
      this._getStep1Date();
   },
  mounted() {
    vm.$on("select", toggle => {
      if (toggle == "on") {
        this.headStatus = true;
      } else {
        this.headStatus = false;
      }
    });
    setTimeout(() => {
      this.loadingShow = false;
    }, 500);
    this._getStep2Date();
    this._getStep3Date();
  },
  filters: {
		totalPrice: function (value) {
			value=Number(value);
			return value.toFixed(2);	
		}
  },
  methods: {
  	changeFotnSize(id) {
	    if (id == 1) {
	      let key = this.content1[this.textareaIndex1].content_size;
	      let val = this.$refs.fontSize1.value;
	      this.returnObj[key] = val;
	    } else {
	      let key = this.content2[this.textareaIndex2].content_size;
	      let val = this.$refs.fontSize2.value;
	      this.returnObj[key] = val;
	    }
	  },
	  changeRemarks(id) {
	    if (id == 1) {
	      let key = this.content1[this.textareaIndex1].content_value;
	      let val = this.$refs.remarks1.value;
	      this.returnObj[key] = val;
	    } else {
	      let key = this.content2[this.textareaIndex2].content_value;
	      let val = this.$refs.remarks2.value;
	      this.returnObj[key] = val;
	    }
	  },
  	/* 第一步数据 */
	  _getStep1Date() {
	    let item_id =this.$route.query.id;//this.$route.params.id;
	    let url = `/personal/jiu_o?id=${item_id}&token=${sessionStorage.getItem(
	    "token"
	  	)}`;
	    this.$http.get(url).then(res => {
	      setTimeout(() => {
	        this.databgisShowHide = false;
	      }, 2000);
	      this.step1Data = res.data.data;
	      //console.log(res.data.data);
	      this.ruleForm.product_id = res.data.data[this.currentPage0.cuttentItemIndex0].product_id; //默认返回第1个的id
	      this.ruleForm.price_id = res.data.data[this.currentPage0.cuttentItemIndex0].container[0].price_id; //默认返回第1个的id
	      this.ruleForm.models_id = res.data.data[this.currentPage0.cuttentItemIndex0].models[0].id; //默认返回第1个的id
	    });
	  },
	  /* 第二步数据 */
	  _getStep2Date() {
	    let url = `/personal/jiu_t?id=${this.ruleForm
	    .models_id}&token=${sessionStorage.getItem("token")}`;
	    this.$http.get(url).then(res => {
	      this.step2Data = res.data.data;
	      //console.log(this.step2Data);
	      this.content1 = res.data.data.content;
	      this.image1 = res.data.data.image;
	      if (this.content1) {
	        for (let i = 0; i < this.content1.length; i++) {
	          this.returnObj[this.content1[i].content_key] = this.content1[i].id;
	          this.returnObj[this.content1[i].content_size] = this.content1[
	            i
	          ].font_size;
	          this.returnObj[this.content1[i].content_value] = this.content1[
	            i
	          ].remarks;
	        }
	      }
	      if (this.image1 === undefined) {
	        this.currentTabIndex2 = 1;
	      }
	    });
	  },
	  /* 第三步数据 */
	  _getStep3Date() {
	    let url = `/personal/jiu_s?id=${this.ruleForm
	    .models_id}&token=${sessionStorage.getItem("token")}`;
	    this.$http.get(url).then(res => {
	      this.step3Data = res.data.data;
	      //console.log(res.data.data);
	      this.content2 = res.data.data.content;
	      this.image2 = res.data.data.image;
	      if (this.content2) {
	        for (let i = 0; i < this.content2.length; i++) {
	          this.returnObj[this.content2[i].content_key] = this.content2[i].id;
	          this.returnObj[this.content2[i].content_size] = this.content2[
	            i
	          ].font_size;
	          this.returnObj[this.content2[i].content_value] = this.content2[
	            i
	          ].remarks;
	        }
	      }
	      if (this.image2 === undefined) {
	        this.tabSwitchover3 = 1;
	      }
	    });
	  },
    /* 减少 */
    subtract() {
      this.ruleForm.num--; //减少
	  if (this.ruleForm.num < 1) {
	    this.ruleForm.num = 1;
	    alert("最少选择一个数量");
	  }
    },
    /* 增加 */
    increase() {
      this.ruleForm.num++; //增加
    },
    btnChangeImg() {
      this.$refs.inputUpload.click();
    },
    change(e) {
      this.$refs.cropper.$emit("chageImg", e);
    },
    postImg(base64) {
      this.userImg = base64;
      this.userImg2 = base64;
    },
    /* 下一步 */
    _nextStep() {
      this.currentPage++;
	    if (this.currentPage == 2) {
	      /* 截图插件 */
	      html2Canvas("#p_screenshot", base64 => {
	        this.ruleForm.q_image = base64;
	      });
	    }
	    if (this.currentPage == 3) {
	      /* 截图插件 */
	      html2Canvas("#h_screenshot", base64 => {
	        this.ruleForm.h_image = base64;
	        $("#m_h_img").attr("src",this.ruleForm.h_image);
	      });
	      $(".m_p_img_box img").css({
        	'top': '10px',
        	'left': '-0.26rem'
      	});
      	$(".m_h_img_box img").css({
        	'top': '-2.5em',
        	'left': '0'
      	});
	    }
    },
    /* 上一步 */
    _lastStep() {
      this.currentPage--;
    },
    /* 加入购物车 */
    _goShopping() {
      	this.loadingShow = true;
      	Object.assign(this.returnObj, this.ruleForm);
	    const url = "/cart/cart";
	    console.log(this.returnObj);
	    this.$http.post(url, this.returnObj).then(res => {
	      if (res.data.errcode == 0) {
	        this.loadingShow = false;
//	        this.$notify({
//	          title: "成功加入购物车"
//	        });
	        this.$router.push({
	          path: "/cart"
	        });
	        return;
	      }
	      this.loadingShow = false;
//	      this.$message.error(res.data.errmsg);
	    });
    },
    /* 点击tab栏切换 */
    _currentTabIndex(tabIndex) {
      /* 页面1 */
      if (this.currentPage == 0) {
        this.currentTabIndex0 = tabIndex;
      }
      /* 页面2 */
      if (this.currentPage == 1) {
        this.currentTabIndex1 = tabIndex;
      }
      /* 页面3 */
      if (this.currentPage == 2) {
        this.currentTabIndex2 = tabIndex;
      }
    },
    /* 点击item切换 */
    _itemCurrentIndex(currentPage, itemIndex) {
      /* 页面1 */
      if (currentPage == 0) {
      	//切换产品
        if (this.currentTabIndex0 == 0) {
        	this.ruleForm.models_id = this.step1Data[itemIndex].models[0].id;
        	this.tplImgIndex=0;
          this.currentPage0.cuttentItemIndex0 = itemIndex;
          console.log(itemIndex);
          this.textareaIndex1 = 0; //背标内容
	        this.textareaIndex2 = 0; //背标内容
	        this.backTextSwitchover1 = 0; //背标标题
	        this.backTextSwitchover2 = 0; //背标标题
          // 点击产品的时候把容量跟模板还原
          this.currentPage0.cuttentItemIndex1 = 0;
          this.currentPage0.cuttentItemIndex2 = 0;
          this._getStep1Date();
	        this._getStep2Date();
	        this._getStep3Date();
//	        this.returnObj = new Object();
					console.log(this.step2Data.image);
	        setTimeout(() => {
	          if (this.step2Data.image === undefined) {
	            this.currentTabIndex1 = 1;
	          } else {
	            this.currentTabIndex1 = 0;
	          }
	          if (this.step3Data.image === undefined) {
	            this.currentTabIndex2 = 1;
	          } else {
	            this.currentTabIndex2 = 0;
	          }
	        }, 300);
        }
        //切换容量
        if (this.currentTabIndex0 == 1) {
          this.currentPage0.cuttentItemIndex1 = itemIndex;
          this.priceIndex = itemIndex; //价格的索引
       		this.ruleForm.price_id = this.step1Data[this.currentPage0.cuttentItemIndex0].container[itemIndex].price_id; //价格id
        }
        //切换模板
        if (this.currentTabIndex0 == 2) {
          this.currentPage0.cuttentItemIndex2 = itemIndex;
          this.tplImgIndex=itemIndex;//模板下标
          this.textareaIndex1 = 0; //背标内容
	        this.textareaIndex2 = 0; //背标内容
	        this.backTextSwitchover1 = 0; //背标标题
	        this.backTextSwitchover2 = 0; //背标标题
	        this.ruleForm.models_id = this.step1Data[this.currentPage0.cuttentItemIndex0].models[itemIndex].id; //点击模板切换数据
          this._getStep2Date(); //调用
        	this._getStep3Date(); //调用
//      	this.returnObj = new Object();
					
        	setTimeout(() => {
	          if (this.step2Data.image === undefined) {
	            this.currentTabIndex1 = 1;
	          } else {
	            this.currentTabIndex1 = 0;
	          }
	          if (this.step3Data.image === undefined) {
	            this.currentTabIndex2 = 1;
	          } else {
	            this.currentTabIndex2 = 0;
	          }
	        }, 300);
        }
       
      }
      /* 页面2 */
      if (currentPage == 1) {
        if (this.currentTabIndex1 == 1) {
          this.currentPage1.cuttentItemIndex = itemIndex;
          this.backTextSwitchover1 = itemIndex;
        	this.textareaIndex1 = itemIndex;
        }
        
      }
      /* 页面3 */
      if (currentPage == 2) {
        if (this.currentTabIndex2 == 1) {
          this.currentPage2.cuttentItemIndex = itemIndex;
          this.backTextSwitchover2 = itemIndex;
          this.textareaIndex2 = itemIndex;
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
	.customizable .customizable-wrap .wrap-img .page2_img {
	    width: 4.32rem;
	    height: 4.32rem;
	    position: absolute;
	    left: 1.8rem;
	    top: 0.5rem;
	    z-index: -1;
	}
	.m_p_img_box{
		width: 2rem;
    	height: 2.8rem;
		position: absolute;
    	top: 3.45rem;
    	left: 2.6rem;
    	z-index: 1;
    	overflow: hidden;
	}
	.m_p_img_box img{
		position: absolute;
		width: 100%;
	}
	.m_h_img_box{
		width: 2rem;
	    height: 1.2rem;
	    position: absolute;
	    top: 5.45rem;
	    left: 4.6rem;
	    z-index: 1;
	    overflow: hidden;
	}
	.m_h_img_box img{
		width: 135%;
	    position: absolute;
	    top: -1.5rem;
	    left: 0;
	}
	.imgWidth{
		width: 100%;
		margin: auto;
		position: relative;
		top: -2rem;
	}
  .remarks>span:nth-child(1) {
	    /* width: 166px; */
	    /* height: 22px; */
	    position: absolute;
	    /* left: 173px; */
	    /* top: 498px; */
	    text-align: center;
	    color: #e21a0f;
	    line-height: 22px;
	    overflow: hidden;
	    white-space: nowrap;
  }
  .remarks>span:nth-child(2) {
	    /* width: 166px; */
	    /* height: 20px; */
	    position: absolute;
	    /* left: 50.5%; */
	    /* transform: translateX(-50%); */
	    /* top: 524px; */
	    overflow: hidden;
	    text-align: center;
	    color: #eec161;
	    line-height: 20px;
  }
  .remarks1>span:nth-child(1) {
	    width: 176px;
	    height: 20px;
	    position: absolute;
	    left: 40%;
	    transform: translateX(-50%);
	    top: 490px;
	    overflow: hidden;
	    text-align: center;
	    color: #e60012;
	    line-height: 20px;
  }
  .remarks1>span:nth-child(2) {
	    width: 138px;
	    height: 20px;
	    position: absolute;
	    left: 40%;
	    transform: translateX(-50%);
	    top: 516px;
	    overflow: hidden;
	    text-align: center;
	    color: #eec263;
	    line-height: 20px;
  }
  .remarks2>span:nth-child(1) {
    	color: #fff;
  }
  .remarks2>span:nth-child(2) {
    	color: #000;
  }
  .select-form{
  	position: relative;
  }
	.input-upload{
		display: inline-block!important;
		height: 1.06rem;
    width: 1.06rem;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
	}
</style>
