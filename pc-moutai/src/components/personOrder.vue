<template>
  <div class="tab_container">
    <div id="tab3" class="tab_content" style="display: block; ">
      <div class="order" style="display:block">
        <div class="customize_li">
          <ul>
            <li>
              <router-link to="/standardOrder">标准定制</router-link>
            </li>
            <li class="active">
              <router-link to="/personOrder">个性定制</router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
          <div class="content order_tabs" style="display: block">
            <div class="title">
              <ul>
                <li class="col-xs-3">订单号</li>
                <li class="col-xs-3 text-left">订单信息</li>
                <li class="col-xs-3">个性化需求</li>
                <li class="col-xs-2">下单时间</li>
                <li class="col-xs-1">订单状态</li>
              </ul>
            </div>
            <div class="list" v-if="false">
              <ul>
                <li class="p50 text-center text-gray f16">暂时没有个性定制订单</li>
              </ul>
            </div>
            <div class="list">
              <ul v-for="(item,index) in OrderData" :key="index">
                <li class="personal_list">
                  <ul>
                    <li class="col-xs-3 mb15">
                      <span v-text="item.order_member"></span>
                    </li>
                    <li class="col-xs-3 mb15 text-left">
                      <div>
                        <div>
                          <span class="text-gray" style="padding-left: 24px;">姓名：</span>{{item.user_name}}</div>
                        <div>
                          <span class="text-gray">联系电话：</span>{{item.phone}}</div>
                        <div>
                          <span class="text-gray" style="padding-left: 24px;">地区：</span>{{item.province}}{{item.city}}{{item.area}}</div>
                        <div>
                          <span class="text-gray">完成时间：</span>{{item.expect_date | timeFilter}}</div>
                        <div>
                          <span class="text-gray">定制数量：</span>{{item.expect_quantity}}瓶</div>
                      </div>
                    </li>
                    <li class="col-xs-3 mb15">
                      <span class="line-3" v-text="item.remark"></span>
                    </li>
                    <li class="col-xs-2 mb15">
                      <span>{{ item.create_time | timeFilter }}</span>
                    </li>
                    <li class="col-xs-1 mb15">
                      <div class="text-red" style="color:#666;" v-text="item.status"></div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- 分页 -->
            <div class="page_box">
              <div class="page">
                <el-pagination background layout="prev, pager, next" :total="count_num" @current-change="currentChange">
                </el-pagination>
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
        OrderData: [],
        currentPage: 1,
        count_num: 0,
      };
    },
    mounted() {
      this.getOrderData();
    },
    methods: {
      currentChange(page) {
        this.currentPage = page;
        this.getOrderData();
      },
      getOrderData() {
        let token = sessionStorage.getItem('token');
        let url = '/personal/personOrder?token=' + token + '&page='+ this.currentPage +'';
        this.$http.get(url)
          .then(res => {
            console.log(res.data.data)
            if (res.data.errcode == 0) {
              this.OrderData = res.data.data.data;
              this.count_num = res.data.data.count_num;
            }
          })
      },
    }
  };

</script>
<style scoped>
  .page_box {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-bottom: 50px;
  }

  .page_box .page {
    width: 1920px;
    position: relative;
    left: 50%;
    /* margin-left: -960px; */
    transform: translateX(-50%);
    text-align: center;
  }

</style>
