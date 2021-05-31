<template>
  <div id="standard">
    <div class="personality_auto">
      <div class="img-wrap">
        <img src="../common/img/standard.jpg" alt="">
      </div>
    </div>
    <div class="personality_content standard_content  ">
      <h4>—— 定制内容 ——</h4>
      固定区域由您定
    </div>
    <div class="standard">
      <div class="head  personality">
        <div class="personality_sj">
          <img src="../common/img/sj.png">
        </div>
        <div class="personality_a">
          <div class="title">
            <b>a</b>

            <h2>从选择一款您喜欢的系列开始</h2>
          </div>

          <div class="content">
            <ul>
              <li>
                <h2>经典飞天系列</h2>
              </li>

              <li>
                <h2>坛子酒系列</h2>
              </li>

              <!--<li>-->
              <!--<h2>国之四礼系列</h2>-->
              <!--</li>-->
              <li>
                <h2>大曲酱香系列</h2>
              </li>
            </ul>
          </div>

        </div>
        <div class="personality_b">
          <div class="title">
            <b>b</b>

            <h2>选择您喜欢的产品颜色和规格</h2>
          </div>

          <div class="content">
            <ul>
              <li class="color">

              </li>
              <li class="specification">

              </li>
            </ul>
          </div>

        </div>
        <div class="personality_c">
          <div class="title">
            <b>c</b>

            <h2>定制范围：输入您想要的专属信息、上传照片</h2>
          </div>
          <div class="content">
          </div>
        </div>
        <div class="personality_e">
          <div class="title">
            <b>d</b>

            <h2>起订量</h2>
          </div>
          <div class="content">
            <ul>
              <li>
                <h2>标准化定制＋经典飞天</h2>
                <div class="standard_text">
                  <span>1件起定</span>
                  <p>每件6瓶</p>
                </div>
              </li>
              <li>
                <h2>标准化定制＋坛子酒</h2>
                <div class="standard_text">
                  <span>1件起定</span>
                  <p>每件1瓶</p>
                </div>
              </li>
              <li>
                <h2>标准化定制＋大曲酱香</h2>
                <div class="standard_text">
                  <span>1件起定</span>
                  <p>每件6瓶</p>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="personality_d">
          <div class="title">
            <b>e</b>

            <h2>定制周期</h2>
          </div>
          <div class="content">
            <h3>标准化定制的产品周期</h3>

            <h2>大约为40-55个工作日</h2>

            <p>（特殊情况除外）</p>
          </div>
        </div>
      </div>
    </div>
    <div class="personality_content">
      专业规范化的定制流程
    </div>
    <div class="personality_bg">
      <div class="personality_sj">
        <img src="../common/img/sj.png">
      </div>
      <div class="personality_bg_content"></div>
      <div class="process">
        <ul>
          <li class="process_1">
            <div class="title">
              <b>1</b>
              <h2>设计确认</h2>
            </div>
            <p>
              您可以在线上快速实现标准化产品的定制，客服人员收到您的订单后会在3个工作日内进行审核，并及时给您反馈。
            </p>
          </li>

          <li class="process_4">
            <div class="title">
              <b>2</b>
              <h2>支付项款</h2>
            </div>
            <p>
              设计通过审核后，支付产品全款后进入生产阶段。
            </p>

          </li>

          <li class="process_3">
            <div class="title">
              <b>3</b>
              <h2>产品生产</h2>
            </div>
            <p>
              从包装打样到确认，再到生产、包装和出库，大约需要30-45个工作日完成您的标准化产品生产。
            </p>
          </li>
          <div class="line"></div>

          <li class="process_5">

            <div class="title">
              <b>4</b>
              <h2>物流配送</h2>
            </div>
            <p>空运和陆运两种物流方式供您选择，保证快速安全便捷。</p>
          </li>
          <li class="process_6">
            <div class="title">
              <b>5</b>
              <h2>确认收货</h2>
            </div>
            <p>收到产品确认无任何问题后签收即可，后续客服人员会根据您的需求开具发票并快递，您的个性化产品定制之旅正式完成，接下来就请尽情享受您的专属茅台酒！</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="process_case">
    </div>
    <div class="standard_per_title">
      <div class="head">
        <h2>
          <img src="../common/img/standard_per_title.jpg">
        </h2>
        <div class="content text-center">
          <ul>
            <li @click="active(1)">
              <router-link to="/standardPage1">
                <img src="../common/img/feitian-icon.png">
              </router-link>
            </li>
            <li @click="active(2)">
              <router-link to="/standardPage2">
                <img src="../common/img/jiangxiang-icon.png">
              </router-link>
            </li>
            <li @click="active(3)">
              <router-link to="/standardPage3">
                <img src="../common/img/tanzi-icon.png">
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
      return {}
    },
    methods: {
      active(index) {
        localStorage.setItem('tab', index)
        var index = localStorage.getItem('tab')
        this.$store.dispatch('chageMyactive', index);
      }
    }
  }

</script>
<style scoped>

  .personality_c .content{
    background: url('../common/img/standard_qm.jpg') center no-repeat;
  }
  .personality_bg{
    background: url('../common/img/personality_bg.png') center no-repeat;
  }
</style>
