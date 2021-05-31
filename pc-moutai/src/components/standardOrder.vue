<template>
  <div class="tab_container">
    <div class="tab_content" style="display: block; ">
      <div class="order" style="display:block">
        <div class="customize_li">
          <ul>
            <li class="active">
              <router-link to="/standardOrder">标准定制</router-link>
            </li>
            <li>
              <router-link to="/personOrder">个性定制</router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
          <div class="content order_tabs" style="display: block">
            <div class="title">
              <ul>
                <li class="w5">订单详情</li>
                <li class="w1">收货人</li>
                <li class="w1">订单金额</li>
                <li class="w1">创建时间</li>
                <li class="w1">订单状态</li>
                <li class="w1">操作</li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li class="p50 text-center text-gray f16" v-if="standardData.length<=0">暂时没有标准定制订单</li>
                <li v-for="(item,index) in standardData" :key="index" v-if="standardData.length>0">
                  <h2>订单号：
                    <i>{{item.order_number}}</i>
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
                            <p>{{list.nickname}}/</p>
                          </div>
                          <div class="pull-right  text-gray">x {{list.num}}</div>
                        </div>
                      </li>
                      <li class="w1 user_ico">
                        <span class="name">{{item.consignee}}</span>
                        <span class=" user_ico"></span>
                      </li>
                      <li class="w1">
                        <div class="total">总额 ¥{{item.count_money}}.00</div>
                        <div class="pay_mode"></div>
                      </li>
                      <li class="w1">
                        <div class="date">{{item.create_time | timeFilter}}</div>
                      </li>
                      <li class="w1">
                        <div class="complete red">已提交</div>
                        <router-link v-bind="{to:'/standardOrderDetails/'+item.id}" class="detail" style="cursor:pointer">订单详情</router-link>
                      </li>
                      <li class="w1">
                        <button @click="cancelOrder(item.id)">取消订单</button>
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
export default {
  data() {
    return {
      standardData: []
    };
  },
  created() {
    this._getstandardOrder();
  },
  methods: {
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

</style>
