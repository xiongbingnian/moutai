<template>
  <div class="maotai">
    <!-- 第一步 -->
    <div class="numberStep1" v-if="numberStep==0">
      <div class="w">
        <img src="../common/img/page1.png" alt="" draggable="false">
      </div>
      <div class="maotai-container" v-if="step1Data.length">
        <!-- 左侧图片 -->
        <div class="container-pic">
          <div class="pic-wrap">
            <img :src="step1Data[tplNameIndex].image" class="wrapImg1" draggable="false">
            <div class="m_p_img_box" style="">
            	<img class="m_p_img" :src="step1Data[tplNameIndex].models[tplImgIndex].p_image" alt="" />
            </div>
            <div class="m_h_img_box" style="">
            	<img class="m_h_img" :src="step1Data[tplNameIndex].models[tplImgIndex].h_image" alt="" />
            </div>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="container-order">
          <h2>选择酒瓶&模板</h2>
          <p>{{step1Data[tplNameIndex].p_abbr}}</p>
          <div class="tit">
            <ul>
              <li @click="istabSwitchover(1,0)" :class='{active:0===tabSwitchover1}'>
                <i class="el-icon-caret-bottom"></i>
                <span>选择产品</span>
              </li>
              <li @click="istabSwitchover(1,1)" :class='{active:1===tabSwitchover1}'>
                <i class="el-icon-caret-bottom"></i>
                <span>选择规格</span>
              </li>
              <li @click="istabSwitchover(1,2)" :class='{active:2===tabSwitchover1}'>
                <i class="el-icon-caret-bottom"></i>
                <span>选择模板</span>
              </li>
            </ul>
          </div>

          <div class="titbox">
            <div class="specific list" v-if="tabSwitchover1==0">
              <!-- 选择产品 -->
              <ul class="clearfix">
                <li :class="{active:index==ProductSwitchover}" v-for="(item,index) in step1Data" :key="index" @click="isProductSwitchover(index,item.product_id)">
                  <span>{{item.p_name}}</span>
                </li>
              </ul>
            </div>
            <div class="yanse list" v-if="tabSwitchover1==1">
              <!-- 选择规格 -->
              <ul class="clearfix">
                <li :class="{active:index==capacitySwitchover}" v-for="(item,index) in step1Data[tplNameIndex].container" @click="isCapacitySwitchover(index,item.price_id)"
                  :key="index">
                  <span>{{item.size}}</span>
                </li>
              </ul>
            </div>
            <div class="tpml list" v-if="tabSwitchover1==2">
              <!-- 选择模板 -->
              <ul>
                <li v-for="(item,index) in step1Data[tplNameIndex].models" :key="index" :class='{active:index===tplSwitchover}' @click="isTplSwitchover(index,item.id)">
                  <span>{{item.model_name}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="netx">
            <el-button type="danger" @click="nextStep">下一步(酒标定制)</el-button>
            <el-button plain disabled>返回上一步</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二步 -->
    <div class="numberStep2" v-if="numberStep==1">
      <div class="w">
        <img src="../common/img/page2.png" alt="" draggable="false">
      </div>
      <div class="maotai-container">
        <!-- 左侧图片 -->
        <div class="container-pic">
          <div class="pic-wrap" id="picWrap1">
          	<div id="p_screenshot">
          		<!-- 背景图 -->
	            <div class="bg-img">
	              <img :src="step1Data[tplNameIndex].models[tplImgIndex].p_image" id="imgWidth" />
	              <div class="remarks">
	                <span v-for="item in step2Data.content" :style="{fontSize:item.font_size+'px',left:item.coordinate_left+'px',top:item.coordinate_top+'px',width:item.width+'px',height:item.height+'px',}">{{item.remarks}}</span>
	              </div>
	            </div>
	            <!-- 拖拽插件 -->
	            <div id="dragBox" v-if="step2Data.image !==  undefined" ref="bragBox">
	              <img :src="imageUrl1" draggable="false" id="tuozhuai">
	              <div id="coor" ref="coor"></div>
	            </div>
          	</div>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="container-order">
          <h2>酒标定制</h2>
          <p>在您选择的模板基础上,可以任意选择想要保留或删除的元素，再按规定上传照片和输入需要的文字,酒标就轻松完成了!温馨提示：由于可定制的区域有限文字要尽量精简哦!</p>
          <div class="tit">
            <ul>
              <li @click="istabSwitchover(2,0)" :class='{active:0===tabSwitchover2}' v-if="step2Data.image !== undefined">背标图片
                <i class="el-icon-caret-bottom"></i>
              </li>
              <li @click="istabSwitchover(2,1)" :class='{active:1===tabSwitchover2}' v-if="step2Data.content !== undefined">背标文字
                <i class="el-icon-caret-bottom"></i>
              </li>
            </ul>
          </div>
          <div class="titbox">
            <!-- 背标图片 -->
            <div class="bbimg" v-show="tabSwitchover2==0" v-if="step2Data.image !==  undefined">
              <el-upload class="avatar-uploader" :action="imgAction" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                <i v-else class="el-icon-picture-outline"></i>
              </el-upload>
              <div class="text_right">
                <span>*点击可上传图片</span>
                <span>*可拉动编辑框放大、缩小、移动图片。</span>
              </div>
              <div class="img_require">
                <h5>图片要求</h5>
                <ul class="clearfix">
                  <li>文件大小</li>
                  <li>图片尺寸</li>
                  <li>图片格式</li>
                </ul>
                <ul class="clearfix">
                  <li>>100K;
                    <1M</li>
                      <li>1000px*1000px</li>
                      <li>JPG/TIF/PNG</li>
                </ul>
              </div>
            </div>
            <!-- 背标文字 -->
            <div class="bbtext list" v-show="tabSwitchover2==1" v-if="step2Data.content !== undefined">
              <ul class="clearfix">
                <li :class='{active:index===backTextSwitchover1}' @click="isBackTextSwitchover(1,index)" v-for="(item,index) in step2Data.content"
                  :key="index">
                  <span>{{ item.name }}</span>
                </li>
              </ul>
              <div class="textSize">
                	字号:
                <input type="number" max="20" min="12" v-model="step2Data.content[textareaIndex1].font_size" ref="fontSize1" @change="changeFotnSize(1)">
              </div>
              <textarea v-model='step2Data.content[textareaIndex1].remarks' ref="remarks1" @change="changeRemarks(1)">
              </textarea>
            </div>
          </div>
          <div class="netx">
            <el-button type="danger" @click="nextStep">下一步(酒盒定制)</el-button>
            <el-button @click="lastStep">返回上一步</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三步 -->
    <div class="numberStep3" v-if="numberStep==2">
      <div class="w">
        <img src="../common/img/page3.png" alt="" draggable="false">
      </div>
      <div class="maotai-container">
        <!-- 左侧图片 -->
        <div class="container-pic">
          <div class="pic-wrap" id="picWrap2">
          	<div id="h_screenshot">
	            <!-- 背景图 -->
	            <div class="bg-img bg-img2">
	        			<img :src="step1Data[tplNameIndex].models[tplImgIndex].h_image" />
	              <div class="remarks remarks2">
	                <span v-for="item in step3Data.content" :style="{fontSize:item.font_size+'px',left:item.coordinate_left+'px',top:item.coordinate_top+'px',width:item.width+'px',height:item.height+'px',}">{{item.remarks}}</span>
	              </div>
	            </div>
	            <!-- 拖拽插件 -->
	            <div id="dragBox" ref="dragBox" v-if="step2Data.image !==  undefined">
	              <img :src="imageUrl2" draggable="false" id="tuozhuai">
	              <div id="coor" ref="coor"></div>
	            </div> 
            </div>
          </div>
        </div>
        <div class="container-order">
          <h2>酒盒定制</h2>
          <p style="margin-bottom: 23px;">按规定输入需要的文字,酒盒就轻松完成了！
            <br>温馨提示：由于可定制的区域有限文字要尽量精简哦！
            <br>
          </p>
          <div class="tit">
            <ul>
              <li :class='{active:0===tabSwitchover3}' @click="istabSwitchover(3,0)" v-if="step3Data.image !==  undefined">酒盒图片
                <i class="el-icon-caret-bottom"></i>
              </li>
              <li :class='{active:1===tabSwitchover3}' @click="istabSwitchover(3,1)" v-if="step3Data.content !== undefined">酒盒文字
                <i class="el-icon-caret-bottom"></i>
              </li>
            </ul>
          </div>
          <div class="titbox">
            <div class="bbimg" v-show="tabSwitchover3==0" v-if="step3Data.image !==  undefined">
              <el-upload class="avatar-uploader" :action="imgAction" :show-file-list="false" :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                <i v-else class="el-icon-picture-outline"></i>
              </el-upload>
              <div class="text_right">
                <span>*点击可上传图片</span>
                <span>*可拉动编辑框放大、缩小、移动图片。</span>
              </div>
              <div class="img_require">
                <h5>图片要求</h5>
                <ul class="clearfix">
                  <li>文件大小</li>
                  <li>图片尺寸</li>
                  <li>图片格式</li>
                </ul>
                <ul class="clearfix">
                  <li>>100K;
                    <1M</li>
                      <li>1000px*1000px</li>
                      <li>JPG/TIF/PNG</li>
                </ul>
              </div>
            </div>
            <div class="bbtext list" v-show="tabSwitchover3==1" v-if="step3Data.content !== undefined">
              <ul class="clearfix">
                <li :class='{active:index===backTextSwitchover2}' @click="isBackTextSwitchover(2,index)" v-for="(item,index) in step3Data.content"
                  :key="index">
                  <span>{{ item.name }}</span>
                </li>
              </ul>
              <div class="textSize">
               	 字号:
                <input type="number" max="20" min="12" v-model="step3Data.content[textareaIndex2].font_size" ref="fontSize2" @change="changeFotnSize(2)">
              </div>
              <textarea v-model="step3Data.content[textareaIndex2].remarks" ref="remarks2" @change="changeRemarks(2)"></textarea>
            </div>
          </div>
          <div class="netx">
            <el-button type="danger" @click="nextStep">下一步(完成定制)</el-button>
            <el-button @click="lastStep">返回上一步</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四步 -->
    <div class="numberStep4" v-if="numberStep==3">
      <div class="w">
        <img src="../common/img/page4.png" alt="" draggable="false">
      </div>
      <div class="maotai-container">
        <!-- 左侧图片 -->
        <div class="container-pic">
          <div class="pic-wrap">
            <img :src="step1Data[tplNameIndex].image" class="wrapImg1" draggable="false">
            <div class="m_p_img_box" style="">
            	<img class="m_p_img" :src="ruleForm.q_image" alt="" />
            </div>
            <div class="m_h_img_box" style="">
            	<img id="m_h_img" class="m_h_img" :src="ruleForm.h_image" alt="" />
            </div>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="container-order">
          <h2>定制完成</h2>
          <p>恭喜您！您的专属茅台飞天酒已经定制成功！温馨提醒,飞天系列的起订量是1件，每件6瓶。请您再次确认定制数量！</p>
          <div style="height:68px;"></div>
          <div class="titbox">
            <div class="shopping">
              <!-- 第四步 -->
              <div class="amount">
                <div class="w40">定制数量:</div>
                <div class="w60">
                  <button @click="subtractNum">-</button>
                  <button>{{ruleForm.num}}</button>
                  <button @click="addNum">+</button>
                </div>
              </div>
              <div class="price">
                <div class="w40">商品单价:</div>
                <div class="w60">
                  <span>{{ step1Data[tplNameIndex].container[priceIndex].count_price }}(6瓶/件)</span>
                </div>
              </div>
              <div class="total_price">
                <div class="w40">商品总价:</div>
                <div class="w60">
                  <span>￥{{step1Data[tplNameIndex].container[priceIndex].count_price * ruleForm.num | totalPrice}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="netx">
            <el-button type="danger" @click="addShopping">确定并加入购物车</el-button>
            <el-button @click="lastStep">返回上一步</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="data-bg" v-if="databgisShowHide">
      <img class="loading" src="../common/img/loading.gif" />
    </div> -->
    <div class="add-bg" v-if="addbgisShowHide">
      <div class="text-center">
        正在加入购物车,请稍等
        <img src="../common/img/addloading.gif" width="20" height="20" style="margin-bottom:4px;" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getDrag
  } from "common/js/drag.js";
  import {
    html2Canvas
  } from "common/js/html2canvas.js";
  export default {
    data() {
      return {
        databgisShowHide: true,
        addbgisShowHide: false,
        imgAction: `http://cs.zsb9.cn/index/personal/imageUploadingFrom?token=${sessionStorage.getItem(
        "token"
      	)}`,
        /* 提交需要 */
        tabSwitchover1: 0, //控制tab与内容栏切换
        tabSwitchover2: 0, //控制tab与内容栏切换
        tabSwitchover3: 0, //控制tab与内容栏切换
        backTextSwitchover1: 0, //背标文字切换
        backTextSwitchover2: 0, //背标文字切换
        ProductSwitchover: 0, //产品切换
        capacitySwitchover: 0, //容量切换
        tplSwitchover: 0, //选择模板切换
        numberStep: 0, //控制四个页面的上下步显示隐藏
        tplNameIndex: 0, //模板名称索引
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
      // console.log(this.step1Data)
			this._getStep1Date();
    },
    mounted() {
    	setTimeout(() => {
        this._getStep2Date();
      	this._getStep3Date();
      }, 300);
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
      /* 加入购物车 */
      addShopping() {
        this.addbgisShowHide = true;
        Object.assign(this.returnObj, this.ruleForm);
        const url = "/cart/cart";
        console.log(this.returnObj);
        this.$http.post(url, this.returnObj).then(res => {
          if (res.data.errcode == 0) {
            this.addbgisShowHide = false;
            this.$notify({
              title: "成功加入购物车"
            });
            this.$router.push({
              path: "/cart"
            });
            return;
          }
          this.addbgisShowHide = false;
          this.$message.error(res.data.errmsg);
        });
      },
      /* 第一步数据 */
      _getStep1Date() {
        let item_id = this.$route.params.item_id;
        let url = `/personal/jiu_o?id=${item_id}&token=${sessionStorage.getItem(
        "token"
      )}`;
        this.$http.get(url).then(res => {
          setTimeout(() => {
            this.databgisShowHide = false;
          }, 2000);
          this.step1Data = res.data.data;
          //console.log(res.data.data);
          this.ruleForm.product_id = res.data.data[this.tplNameIndex].product_id; //默认返回第1个的id
          this.ruleForm.price_id =
            res.data.data[this.tplNameIndex].container[0].price_id; //默认返回第1个的id
          this.ruleForm.models_id = res.data.data[this.tplNameIndex].models[0].id;//默认返回第1个的id 6
          console.dir(this);
          console.log("请求时this.ruleForm.models_id---"+this.ruleForm.models_id)//默认的6
        });
      },
      /* 第二步数据 */
      _getStep2Date() {
//    	
      	console.dir(this);
      	console.log("第二步数据的this.ruleForm.models_id---"+this.ruleForm.models_id)//默认的1
        let url = `/personal/jiu_t?id=${this.ruleForm
        .models_id}&token=${sessionStorage.getItem("token")}`;
        this.$http.get(url).then(res => {
          this.step2Data = res.data.data;
          //console.log(res.data.data)
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
            this.tabSwitchover2 = 1;
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
      /* 产品切换-把所以状态还原 */
      isProductSwitchover(index, product_id, models_id) {
        this.ruleForm.models_id = this.step1Data[index].models[0].id;
        this.tplImgIndex=0;
        this.ProductSwitchover = index; //产品
        this.capacitySwitchover = 0; //容量
        this.tplSwitchover = 0; //模板
        this.textareaIndex1 = 0; //背标内容
        this.textareaIndex2 = 0; //背标内容
        this.backTextSwitchover1 = 0; //背标标题
        this.backTextSwitchover2 = 0; //背标标题
        this.tplNameIndex = index; //数据1的索引
        this._getStep1Date();
        this._getStep2Date();
        this._getStep3Date();
        this.returnObj = new Object();
        setTimeout(() => {
          if (this.step2Data.image === undefined) {
            this.tabSwitchover2 = 1;
          } else {
            this.tabSwitchover2 = 0;
          }
          if (this.step3Data.image === undefined) {
            this.tabSwitchover3 = 1;
          } else {
            this.tabSwitchover3 = 0;
          }
        }, 300);
      },
      /* 选择切换模板-调用第二三步的数据 */
      isTplSwitchover(index, modelId) {
        this.tplSwitchover = index; //模板切换
        this.textareaIndex1 = 0; //背标内容
        this.textareaIndex2 = 0; //背标内容
        this.backTextSwitchover1 = 0; //背标标题
        this.backTextSwitchover2 = 0; //背标标题
        this.ruleForm.models_id = modelId; //点击模板切换数据
        this.tplImgIndex=index;//模板下标
        this.returnObj = new Object();
        this._getStep2Date(); //调用
        this._getStep3Date(); //调用
        setTimeout(() => {
          if (this.step2Data.image === undefined) {
            this.tabSwitchover2 = 1;
          } else {
            this.tabSwitchover2 = 0;
          }
          if (this.step3Data.image === undefined) {
            this.tabSwitchover3 = 1;
          } else {
            this.tabSwitchover3 = 0;
          }
        }, 300);
      },
      /* 容量切换 */
      isCapacitySwitchover(index, price_id) {
        this.capacitySwitchover = index; //容量切换
        this.priceIndex = index; //价格的索引
        this.ruleForm.price_id = price_id; //价格id
      },
      /* 点击切换tab栏以及內容 */
      istabSwitchover(num, index) {
        if (num === 1) {
          this.tabSwitchover1 = index;
        } else if (num === 2) {
          this.tabSwitchover2 = index;
        } else {
          this.tabSwitchover3 = index;
        }
      },
      /* 背标文字切换 */
      isBackTextSwitchover(num, index) {
        if (num === 1) {
          this.backTextSwitchover1 = index;
          this.textareaIndex1 = index;
        } else {
          this.backTextSwitchover2 = index;
          this.textareaIndex2 = index;
        }
      },
      /* 下一步 */
      nextStep(index) {
        this.numberStep++;
        getDrag(247, 0);
        if (this.numberStep == 2) {
        	$("#dragBox").css({
	        	'border': '2px solid transparent'
	      	});
	        $("#coor").css({
	          'background-color': 'transparent'
	        });
          /* 截图插件 */
          html2Canvas("#p_screenshot", base64 => {
		        $("#dragBox").css({
	            'border': '2px solid #000'
	          });
	          $("#coor").css({
	            'background-color': '#000'
	          });
            this.ruleForm.q_image = base64;
          });
        }

        if (this.numberStep == 3) {
					$("#dragBox").css({
	        	'border': '2px solid transparent'
	      	});
	        $("#coor").css({
	          'background-color': 'transparent'
	        });
          /* 截图插件 */
          html2Canvas("#h_screenshot", base64 => {
						$("#dragBox").css({
	            'border': '2px solid #000'
	          });
	          $("#coor").css({
	            'background-color': '#000'
	          });
            this.ruleForm.h_image = base64;
            $("#m_h_img").attr("src",this.ruleForm.h_image);
          });
        }
      },
      /* 上一步 */
      lastStep(index) {
        this.numberStep--;
        getDrag(247, 0);
      },
      /* 減少購買數量 */
      subtractNum() {
        this.ruleForm.num--; //减少
        if (this.ruleForm.num < 1) {
          this.ruleForm.num = 1;
          alert("最少选择一个数量");
        }
      },
      /* 添加購買數量 */
      addNum() {
        this.ruleForm.num++; //增加
      },
      /* 上传图片1 */
      handleAvatarSuccess1(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
        setTimeout(() => {
          if (this.image1) {
            for (let i = 0; i < this.image1.length; i++) {
              this.returnObj[this.image1[i].image_key] = this.image1[i].id;
              this.returnObj[this.image1[i].image_value] = res.data;
            }
          }
        }, 300);
      },
      /* 上传图片2 */
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
        setTimeout(() => {
          if (this.image2) {
            for (let i = 0; i < this.image2.length; i++) {
              this.returnObj[this.image2[i].image_key] = this.image2[i].id;
              this.returnObj[this.image2[i].image_value] = res.data;
            }
          }
        }, 300);
      },
      /* 控制图片的大小 */
      beforeAvatarUpload(file) {
        const isLt4M = file.size / 1024 / 1024 < 4;
        if (!isLt4M) {
          this.$message.error("上传头像图片大小不能超过 4MB!");
        }
        return isLt4M;
      }
    }
  };

</script>
<style lang="less">
	#p_screenshot{
		position: absolute;
    top: 0;
    left: 500px;
	}
	#h_screenshot{
		height: 720px;
		position: absolute;
    top: 0;
    left: 500px;
	}
	.m_p_img_box{
		width: 160px;
    height: 208px;
    position: absolute;
    top: 410px;
    left: 659px;
    overflow: hidden;
    z-index: 1;
	}
	.m_p_img{
		width: 110%;
    position: absolute;
    top: -22px;
    left: -12px;
	}
	.m_h_img_box{
		width: 130px;
    height: 90px;
    position: absolute;
    top: 555px;
    left: 825px;
    overflow: hidden;
    z-index: 1;
	}
	.m_h_img{
		width: 156%;
    position: absolute;
    top: -105px;
    left: -8px;
	}
  .maotai {
    min-width: 1200px;
    .w {
      height: 170px;
    }
    .maotai-container {
      height: 700px;
      padding-right: 417px;
      position: relative;
      .container-pic {
        overflow: hidden;
        height: 100%;
        width: 100%;
        position: relative;
        .pic-wrap {
          overflow: hidden;
          background: url("../common/img/maotai_bg.jpg") no-repeat;
          width: 1503px;
          height: 100%;
          position: relative;
          left: 50%;
          text-align: center;
          transform: translateX(-50%);
          box-sizing: border-box;
          .bg-img {
            width: 500px;
            margin: 0 auto;
            position: relative;
          }
          .bg-img.bg-img2 {
            width: 674px;
          }
          .wrapImg1 {
            margin-top: 148px;
          }
        }
      }
      #dragBox.on {
        border: none;
        #coor {
          display: none;
        }
      }
      #dragBox {
        cursor: default;
        position: absolute;
        left: 24%;
        top: 25%;
        border: 2px solid #000;
        max-width: 446px;
        max-height: 550px;
        min-width: 44px;
        min-height: 44px;
        width: 280px;
        height: 280px;
        box-sizing: border-box;
        #tuozhuai {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -999;
        }
        #coor {
          width: 24px;
          height: 24px;
          overflow: hidden;
          cursor: default;
          position: absolute;
          right: -12px;
          bottom: -12px;
          background-color: #000;
        }
      }
      .container-order {
        position: absolute;
        right: 0;
        top: 0;
        border-top: 1px solid #ccc;
        width: 417px;
        height: 100%;
        box-sizing: border-box;
        background: #f7f7f7;
        h2 {
          line-height: 66px;
          padding-left: 10px;
          font-size: 28px;
        }
        p {
          padding: 0 10px;
          line-height: 23px;
          padding-bottom: 20px;
        }
        .tit {
          height: 43px;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          ul {
            li {
              margin: 0 20px;
              width: 90px;
              line-height: 43px;
              text-align: center;
              float: left;
              cursor: pointer;
              font-size: 15px;
              position: relative;
              i {
                display: none;
                position: absolute;
                font-size: 26px;
                left: 50%;
                transform: translateX(-50%);
                top: 45%;
              }
            }
            li.active {
              background: #e0e0e0;
              color: red;
              height: 43px;
              line-height: 30px;
              i {
                display: block;
              }
            }
          }
        }
        .titbox {
          height: 318px;
          border-bottom: 1px solid #ccc;
          background: #fff;
          box-sizing: border-box;
          .list {
            padding-top: 28px;
            ul {
              li {
                float: left;
                margin-left: 20px;
                font-size: 16px;
                height: 62px;
                text-align: center;
                line-height: 62px;
                border: 2px solid #aaaaaa;
                position: relative;
                /*width: 70px;*/
                overflow: hidden;
                cursor: pointer;
                margin-bottom: 10px;
                padding: 0 8px;
              }
              li.active {
                border: 2px solid #d8000b;
              }
              li.active::after {
                content: "";
                position: absolute;
                display: block;
                background: url("../common/img/g.png") no-repeat;
                width: 25px;
                height: 20px;
                background-size: 25px 20px;
                right: 0;
                bottom: 0;
              }
            }
          }
          .list.tpml {
            padding-top: 0;
            ul {
              li {
                height: 46px;
                line-height: 46px;
                /*width: 66px;*/
                font-size: 14px;
                margin-left: 12px;
                margin-top: 12px;
              }
            }
          }
          .list.bbtext {
            ul {
              li {
                width: 108px;
                height: 42px;
                line-height: 40px;
                font-size: 18px;
                box-sizing: border-box;
              }
            }
            .textSize {
              font-size: 20px;
              margin-left: 15px;
              line-height: 80px;
              input {
                border: 1px solid #000;
                width: 96px;
                height: 28px;
                text-align: center;
                font-size: 20px;
              }
            }
            textarea {
              width: 366px;
              height: 146px;
              border: 1px solid #999;
              margin-left: 15px;
              font-size: 20px;
              padding-left: 4px;
            }
          }
          .shopping {
            height: 192px;
            background: #dddddd;
            padding-left: 50px;
            .amount {
              padding-top: 20px;
            }
            div {
              height: 64px;
              font-size: 20px;
              .w40 {
                float: left;
                margin-right: 10px;
              }
              .w60 {
                float: left;
                button {
                  float: left;
                  width: 35px;
                  height: 28px;
                  border: 1px solid #686868;
                  outline: none;
                }
                button:nth-of-type(odd) {
                  background: #686868;
                  color: #fff;
                  cursor: pointer;
                  font-size: 20px;
                }
                button:nth-child(2) {
                  padding: 0 38px 0 28px;
                  font-size: 16px;
                }
                span {
                  color: #d8000b;
                }
              }
            }
          }
          .bbimg {
            position: relative;
            padding-left: 20px;
            .img_require {
              background: #f7f7f7;
              width: 358px;
              height: 76px;
              border: #cccccc solid 1px;
              margin-top: 40px;
              h5 {
                line-height: 25px;
                text-align: center;
                font-weight: 100;
                color: #707070;
                font-size: 14px;
                border-bottom: 1px #fff solid;
              }
              ul {
                li {
                  float: left;
                  text-align: center;
                  width: 33.33%;
                  line-height: 25px;
                  color: #888888;
                  border-bottom: 1px #fff solid;
                  border-right: 1px #fff solid;
                  box-sizing: border-box;
                }
              }
            }
            .avatar-uploader {
              .el-upload {
                margin-top: 40px;
                border: 1px solid #d5d5d5;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                background: #efefef;
                line-height: 102px;
                font-size: 0;
                height: 102px;
                .el-icon-picture-outline {
                  font-size: 28px;
                  color: #c5501a;
                  width: 112px;
                  height: 102px;
                  line-height: 102px;
                  text-align: center;
                }
              }
              .el-upload:hover {
                border-color: #c5501a;
              }
            }
            .avatar {
              width: 112px;
              display: inline-block;
              z-index: 999;
            }
            .text_right {
              position: absolute;
              left: 150px;
              top: 80px;
              span {
                color: #d8000b;
                display: block;
                line-height: 24px;
                font-size: 14px;
              }
            }
          }
        }
        .netx {
          button {
            display: block;
            margin: 0 auto;
            width: 298px;
            height: 48px;
            border-radius: 0;
            margin-top: 28px;
            font-size: 20px;
          }
          button:nth-child(1) {
            background: #d8000b;
          }
          button:nth-child(2) {
            color: #919090;
          }
        }
      }
    }
    .data-bg {
      min-width: 1200px;
      background: #f7f7f7;
      width: 100%;
      top: 77px;
      left: 0;
      height: 870px;
      position: absolute;
      z-index: 1;
      .loading {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .add-bg {
      min-width: 1200px;
      background: #000;
      opacity: 0.7;
      width: 100%;
      overflow: hidden;
      height: 870px;
      z-index: 99999;
      position: absolute;
      left: 0;
      top: 77px;
      .text-center {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 16px;
        color: #fff;
        transform: translate(-50%, -50%);
        font-weight: 900;
      }
    }
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

</style>
