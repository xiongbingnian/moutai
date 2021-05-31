<template>
  <div id="article">
    <div class="article custS">
      <div class="head">
        <h2>
          <p>
            <i class="custS_logo"></i>
            <b>客户服务</b>
          </p>
        </h2>
        <div class="main_contentBox clearfix">
          <div class="custS_prob clearfix">
            <h3>
              <p>
                <i class="custS_prob_logo"></i>
                <b>常见问题</b>
              </p>
            </h3>
            <div class="proList">
              <div class="problemHead">
                <div class="model fl" @click="tabCut(0)" :class="{active:tab==0}">产品介绍及业务模式</div>
                <div class="service fl" @click="tabCut(1)" :class="{active:tab==1}">业务咨询</div>
              </div>
              <ul class="modelList" v-show="tab==0">
                <li>请问你们公司定制产品是怎么定制的？</li>
                <li>您好，请问你们公司和茅台酒股份有限公司是什么关系呢？</li>
                <li>你们卖的是真茅台吗？</li>
                <li>怎么证明我所购买的定制酒是真茅台？</li>
                <li>你们这个产品和市面上普通茅台相比，为什么价格要高？</li>
                <li>你们主要做哪些范围的定制？</li>
                <li>那现目前有哪些名人在你们公司定制过酒呢？</li>
                <li>定制有什么要求吗？添加什么东西吗？</li>
              </ul>
              <ul class="modelList" v-show="tab==1">
                <li>请问添加的定制信息是由我们自己设计还是你们那边设计？</li>
                <li>那如果设计图纸符合我们的要求是不是就可以下单生产呢？</li>
                <li>那我现在定制的话需要多久时间可以到货呢？</li>
                <li>请问我们下单后就还需要做其他的吗？</li>
                <li>请问我确定下单后需要一次性付全款吗？</li>
                <li>你们是什么方式送货？</li>
                <li>收到货后发现破损怎么办？</li>
                <li>你们开发票吗？是茅台酒厂的发票还是？</li>
              </ul>

            </div>
            <div class="proDetail">
              <div class="pro3" v-show="tab==0">
                <div class="p_title">
                  <b>1.</b>
                  <p>请问你们公司定制产品是怎么定制的？</p>
                </div>
                <div class="p_answer">
                  <i class="avatar"></i>
                  <div class="p_answer_contain">
                    <p>您好，我们公司的定制酒分为标准化定制和个性化定制。标准化定制是在原有产品包装的基础上，在瓶子的背标和盒子底部白色区域添加您的定制信息（LOGO、署名、图片等）；个性化定制是按照您的要求对瓶身以及所有包装进行重新设计。您可以登录我公司官网查询具体定制内容。</p>
                  </div>
                </div>
              </div>
              <div class="pro3" v-show="tab==1">
                <div class="p_title">
                  <b>1.</b>
                  <p>请问添加的定制信息是由我们自己设计还是你们那边设计？</p>
                </div>
                <div class="p_answer">
                  <i class="avatar"></i>
                  <div class="p_answer_contain">
                    <p>您好，添加定制信息的内容可以是您那边把已经设计好的图纸发给我们，也可以是由您那边提供设计内容给我们，由我们公司设计师为您设计，待设计师设计好后将图稿发给您，再看是否达到您的要求。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="custS_cont clearfix">
            <h3>
              <p>
                <i class="custS_prob_logo"></i>
                <b>联系我们</b>
              </p>
            </h3>
            <div class="contList">
              <div class="cont_detail">
                <div class="cont_title">
                  <p>———</p>
                  <b>电话客服</b>
                  <p>———</p>
                </div>
                <div class="msg">拨打热线：
                  <b>400-861-9898</b>
                  <br>
                </div>
                <div class="msg">服务时间：
                  <b>9:00-17:00</b>
                  <br>
                </div>
              </div>
              <div class="cont_detail">
                <div class="cont_title">
                  <p>———</p>
                  <b>在线客服</b>
                  <p>———</p>
                </div>
                <div class="msg ta_center">在线解答您的咨询，高效、便捷</div>
                <div class="custS_btn ta_center">
                  <a href="javascript:;">呼叫在线客服</a>
                </div>
              </div>
              <div class="cont_detail">
                <div class="cont_title">
                  <p>———</p>
                  <b>提建议</b>
                  <p>———</p>
                </div>
                <div class="msg"></div>
                <div class="custS_btn ta_center">
                  <a href="javascript:;">我要留言</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tab:0,
      };
    },
    methods: {
      tabCut(index){
        this.tab = index;
      }
    }
  };

</script>
<style scoped>


</style>
