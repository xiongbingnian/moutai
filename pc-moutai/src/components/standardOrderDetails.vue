<template>
  <div class="tab_container">
    <div id="tab3" class="tab_content" style="display: block; ">
      <div class="order" style="display:block;">
        <div class="headTitle">我的中心 ＞ 我的订单 ＞ 标准定制 ＞ 订单：{{standardDetailsData.order_number}}</div>
        <div class="bodyCon">
          <div class="body_left">
            <div class="body_head" style="font-weight:400;color:#666;background:none;padding-top:20px;">订单号: {{standardDetailsData.order_number}}</div>
            <div class="completeCon">
              <div class="completeText">已提交</div>
              <div class="completePic"></div>
            </div>
            <div class="body_body" style="text-align:center" v-for="(item,index) in standardDetailsData.list" :key="index">
              <img :src="item.image" alt="" style="width:50%;">
            </div>
            <div class="downCon">在线合同：
              <span style="color:#D3A066;">在线定制合同.dox</span>
              <a href="javascript:window.open('http://moutaivip.com/cache/import/定制酒合同.doc');" class="downBtn">下载</a>
            </div>
          </div>
          <div class="body_right">
            <div class="body_head" style="text-align:left;font-weight:400;color:#D3A066;background:none;padding-top:20px;padding-left:80px;">订单已处理，请耐心等待。感谢您对茅台定制商城的支持，祝您生活愉快。</div>
            <div class="body_body clearfix">
              <div class="check_con" style="position: relative;" id="0">
                <div class="frontLine" style="bottom: 50%; height: 62px;"></div>
                <div class="frontPoint"></div>
                <div class="frontLine btm" style="top: 45%; height: 62px;"></div>
                <div class="check_text">已提交</div>
                <div class="check_remarks"></div>
              </div>
            </div>
            <div class="body_bottom" style="padding:30px;display:block; height:20px;"></div>
          </div>
          <div style="clear:both"></div>
        </div>
        <div class="footerMsg_con">
          <ul class="clearfix">
            <li>
              <h2>收货人信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>收货人：</span>
                  <!-- <span>{{standardDetailsData}}</span> -->
                </div>
                <div class="list-item">
                  <span>地址：</span>
                  <span>{{standardDetailsData.province}}{{standardDetailsData.city}}{{standardDetailsData.area}}{{standardDetailsData.address}}</span>
                </div>
                <div class="list-item">
                  <span>手机号码：</span>
                  <span>{{standardDetailsData.phone}}</span>
                </div>
              </div>
            </li>
            <li>
              <h2>配送信息</h2>
              <div class="list">
             <div class="list-item">
                  <span>暂无配送信息</span>
                </div>
              </div>
            </li>
            <li>
              <h2>付款信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>付款方式：</span>
                  <span>123313178</span>
                </div>
                <div class="list-item">
                  <span>付款时间：</span>
                  <span>{{standardDetailsData.create_time}}</span>
                </div>
                <div class="list-item">
                  <span>商品总额：</span>
                  <span>￥{{standardDetailsData.count_money}}</span>
                </div>
                <div class="list-item">
                  <span>应支付金额：</span>
                  <span>￥{{standardDetailsData.count_money}}</span>
                </div>
                <div class="list-item">
                  <span>运费金额：</span>
                  <span>￥{{standardDetailsData.express_number}}</span>
                </div>
              </div>
            </li>
            <li>
              <h2>发票信息</h2>
              <div class="list">
                <div class="list-item">
                  <span>{{standardDetailsData.invoice_type}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      standardDetailsData: []
    };
  },
  created() {
    this._getstandardDetails();
  },
  watch: {
    $route: function() {
      // 当触发了这个方法就重新获取到最新的数据
      window.location.reload();
    }
  },
  methods: {
    _getstandardDetails() {
      let id = this.$route.params.id;
      let url = `/personal/standardOrderDetails?id=${id}&token=${sessionStorage.getItem("token")}`;
      this.$http.get(url).then(res => {
        this.standardDetailsData = res.data.data;
        console.log(res.data.data);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.tab_container {
  min-width: 1200px;
  .order {
    padding: 60px 40px;
  }
  .headTitle {
    width: 100%;
    font-size: 14px;
  }
  .bodyCon {
    width: 100%;
    margin-top: 20px;
    .body_left {
      height: auto;
      border: 1px solid #e0e0e0;
      margin-right: -1px;
      width: 25%;
      float: left;
      .body_head {
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
      }
      .completeCon {
        width: 50%;
        padding: 20px;
        padding-bottom: 0px;
        margin: 0 auto;
        text-align: center;
        .completeText {
          height: 38px;
          line-height: 38px;
          display: inline-block;
          font-weight: 800;
          font-size: 18px;
        }
        .completePic {
          width: 39px;
          height: 38px;
          background-size: 250px 250px;
          display: inline-block;
          vertical-align: top;
        }
      }
      .body_body {
        img {
          margin: 20px auto 15px;
        }
      }
      .downCon {
        width: 100%;
        text-align: center;
        .downBtn {
          display: inline-block;
          color: #fff;
          width: 50px;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
          background: #3c3c3c;
          margin: 20px auto;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .body_right {
      width: 74%;
      float: left;
      border: 1px solid #e0e0e0;
      border-top: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      .body_head {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
      .check_con {
        width: 80%;
        padding: 20px;
        border: 1px solid #d9d9d9;
        margin-left: 80px;
        margin-top: 20px;
      }
      .check_con:first-child .frontLine:first-child {
        background: transparent;
        border: none;
      }
      .frontLine {
        width: 5px;
        left: -55px;
        max-height: 200px;
        margin-left: 19px;
        position: absolute;
        z-index: 2;
      }
      .check_text {
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px dashed #ebebeb;
      }
      .check_remarks {
        padding-top: 10px;
        font-size: 14px;
        color: #7e7e7e;
      }
      .body_bottom {
        width: 100%;
      }
    }
  }
  .footerMsg_con {
    padding-top: 40px;
    ul {
      li {
        box-sizing: border-box;
        padding-left: 30px;
        width: 24.3%;
        background: #f6f6f6;
        height: 338px;
        float: left;
        margin-right: 10px;
        h2 {
          font-size: 14px;
          line-height: 60px;
          font-weight: bold;
        }
        .list-item {
          font-size: 12px;
          line-height: 40px;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
