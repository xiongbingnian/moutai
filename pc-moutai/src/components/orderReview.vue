<template>
  <div class="cart_bg">
    <div class="cart">
      <div class="title">
        <h2>
          <p>订单审核</p>
        </h2>
      </div>
      <div class="pt50 mb50" style="box-shadow: 3px 3px 3px #eee">
        <div class="bg-white" style="padding-top: 70px;">
          <div class="pb100">
            <div class="dui"></div>
            <div class="text-center text-red f20 p5">您的订单已提交，</div>
            <div class="text-center text-red f20 p5 pb20">我们将在10-15个工作日之内审核。</div>
            <div class="text-center text-gray f14" style="line-height: 200%">如若通过审核，我们将通知您付款，</div>
            <div class="text-center text-gray f14" style="line-height: 200%">具体付款方式和相关协议在审核通过后，将与您具体沟通，</div>
            <div class="text-center text-gray f14" style="line-height: 200%">请耐心等待，谢谢！</div>
          </div>
          <div class="pb20">
            <div class="p10 ps-r ml10 mr10" style="border-bottom: 1px dashed #ccc">
              <div class="ps-a text-gray f14 bg-white" style="bottom: -7px; left: 45%;font-size:16px;">或搜索其他设计</div>
            </div>
          </div>
          <div class="clearfix">
            <div class="col-xs-12">
              <div class="col-xs-4 p40" @click="active(1)">
                <router-link to="/standardPage1">
                  <dl class="series active" role="button">
                  <dd style="overflow: hidden">
                    <img src="../common/img/feitian-icon.png" alt="">
                  </dd>
                  <dt class="text-center p7 f14">飞天系列</dt>
                </dl>
                </router-link>
              </div>
              <div class="col-xs-4 p40" @click="active(2)">
                <router-link to="/standardPage2">
                  <dl class="series" role="button">
                  <dd style="overflow: hidden">
                    <img src="../common/img/jiangxiang-icon.png" alt="">
                  </dd>
                  <dt class="text-center p7 f14">酱香系列</dt>
                </dl>
                </router-link>
              </div>
              <div class="col-xs-4 p40" @click="active(3)">
                <router-link to="/standardPage3">
                  <dl class="series" role="button">
                  <dd style="overflow: hidden">
                    <img src="../common/img/tanzi-icon.png" alt="">
                  </dd>
                  <dt class="text-center p7 f14">坛子酒系列</dt>
                </dl>
                </router-link>
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
    return {};
  },
  methods: {
    active(index) {
      localStorage.setItem("tab", index);
      var index = localStorage.getItem("tab");
      this.$store.dispatch("chageMyactive", index);
    }
  }
};
</script>
<style scoped>

</style>
