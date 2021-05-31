<template>
  <div class="cart">
    <div class="cart_box">
      <div class="title">
        <h2>购物车</h2>
      </div>
      <div id="catListShow">
        <div class="cart_title">
          <h2>
          	您的购物车（
            <i>{{cartData.length}}</i>）
          </h2>
        </div>
        <div class="cart_empty" v-show="cartData.length<=0">购物车内暂时没有商品</div>
        <!-- 表格标题 -->
        <div class="cart_select_title" v-show="cartData.length>0">
          <div class="w28 left select">
            <a href="javascript:;" class="my-checkbox f14 text-black all-check" style="padding-top:11px;">
              <el-checkbox v-model="isselectall" @change="allunAll" >全选</el-checkbox>
            </a>
          </div>
          <div class="w20 left">商品名称</div>
          <div class="w10 left">单价</div>
          <div class="w10 left">数量</div>
          <div class="w10 left">总价</div>
          <div class="w10 left">创建时间</div>
          <div class="w10 left">定制状态</div>
        </div>
        <!-- 表格内容 -->
        <div class="cart-item-contain" v-show="cartData.length>0">
          <div class="cart_item" v-for="(item,index) in cartData" :key="index">
            <div class="w35 left">
              <div class="left w27  select  text-center pl0">
                <a href="javascript:;" class="check-cart-goods my-checkbox f14 text-black" style="padding-top:11px;">
                   <el-checkbox v-model="checked[index]" @change="onallunAll" >选择</el-checkbox>
                </a>
              </div>
              <div class="left w7 img text-center" style="width: 72%">
                <a href="javascript:;">
                  <img :src="item.image" width="180" height="180" style="display:inline-block">
                </a>
              </div>
            </div>
            <div class="left  cart_list_right">
              <div class="title_line">
                <div class="w28 left good-name" v-text="item.nickname"></div>
                <div class="w15 left fwb" style="border-right: 1px solid #d8d8d8;">￥{{item.count_price}}</div>
                <div class="w15 left num" style="border-left: none;">
                  <!--  -->
                  <my-input-number @update="update" :options="{gid:item.id,num:item.num,index:index}"></my-input-number>
                </div>
                <div class="w15 left text-red fwb itemPrice" style="border-right: 1px solid #d8d8d8;">￥ {{ item.num * item.count_price | tableTotalPrice}}</div>
                <div class="w15 left date" style="border-left: none;">{{item.add_time | timeFilter}}</div>
                <div class="w15 left text-red">酒盒定制</div>
              </div>
              <div class="cart_format text-gray">商品规格：{{item.name}}
                <span class="delete-btn" @click="delCommodity(item.id)">删除</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 去结算 -->
        <div class="cart_total" v-show="cartData.length>0">
          <div class="left">已选择
            <i class="red fwb">{{selectCount}}</i> 件定制商品</div>
          <div class="right">总价：
            <span class="red">￥{{selletmentAmount}}</span>
            <button type="button" @click="goAccount">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ERR_OK = 0;
/* vm */
import { vm } from "common/js/vm.js";
import MyInputNumber from "base/myinputNumber";
export default {
  components: {
    MyInputNumber
  },
  data() {
    return {
      cartData: [],
      isselectall: false,
      checked: [],
      selectCount: 0 //选择件数
    };
  },
  created() {
    this._getCartData();
  },
  filters: {
		  tableTotalPrice: function (value) {
		    value=Number(value);
		    return value.toFixed(2);
		  }
		},
  computed: {
    /* 计算总件数 */
    selletmentAmount() {
      let trueArr = this.checked.filter(item => {
        return item;
      });
      this.selectCount = trueArr.length;
      let totalAmout = 0;
      this.checked.forEach((item, index) => {
        if (item) {
          let goodsInfo = this.cartData[index];
          totalAmout += goodsInfo.num * goodsInfo.count_price;
        }
      });
      return Number(totalAmout).toFixed(2);
    }
  },
  methods: {
    update(obj) {
      // 修改this.list中当前的obj.gid这个商品的 buycount为obj.count
      this.checked[obj.index] = true;
      this.onallunAll();
      this.checked.push(false);
      this.checked.pop();
      this.cartData.forEach((item, index) => {
        if (item.id == obj.gid) {
          item.num = obj.num;
          if (item.num < 1) {
            item.num = 1;
            alert("最少选择一个数量");
          }
        }
      });
      // 由于通过js代码修改的计算属性selletmentAmount方法中依赖的list中的某个属性的值是不会触发计算属性方法的重新执行的
      this.cartData.push("");
      this.cartData.pop();
    },
    goAccount() {
      let cartDataArr = [];
      if (this.checked.indexOf(true) > -1) {
        this.checked.forEach((item, index) => {
          if (item) {
            cartDataArr.push(this.cartData[index]);
          }
        });
        localStorage.setItem("settlementData", JSON.stringify(cartDataArr));
        setTimeout(() => {
          this.$router.push({ path: "/settlement" });
        }, 1000);
      } else {
        this.$message.error("请选择要购买的商品");
      }
    },
    /* 子项全选反选 */
    onallunAll() {
      for (let i = 0; i < this.checked.length; i++) {
        if (this.checked[i] === false) {
          this.isselectall = false;
          return;
        } else this.isselectall = true;
      }
    },
    /* 全选反选功能 */
    allunAll() {
      for (let i = 0; i < this.checked.length; i++) {
        this.checked[i] = this.isselectall;
      }
      this.checked.push(false);
      this.checked.pop();
    },
    /* 获取购物车的数据 */
    _getCartData() {
      let url = `/Cart/cart_list?token=${sessionStorage.getItem("token")}`;
      this.$http.get(url).then(res => {
        if (res.data.errcode === ERR_OK) {
          this.cartData = res.data.data;
          console.log(res.data.data);
          this.checked = [];
          this.cartData.forEach(() => {
            this.checked.push(false);
          });
        } else {
          this.cartData = [];
        }
        sessionStorage.setItem("carNum", this.cartData.length);
        vm.$emit("changeshow");
      });
    },
    delCommodity(id) {
      if (confirm("确认将该商品从购物车删除吗？")) {
        let url =
          "/Cart/cart_del?id=" +
          id +
          "&token=" +
          sessionStorage.getItem("token") +
          "";
        this.$http.get(url).then(res => {
          this._getCartData();
        });
      }
    }
  }
};
</script>
<style scoped lang="less">
.cart_box {
  width: 1200px;
  margin: 0px auto;
  height: auto;
  overflow: hidden;
  .title {
    margin-top: 25px;
    h2 {
      height: 40px;
      line-height: 40px;
      border-bottom: 2px solid #e1e1e1;
    }
  }
  .cart_title {
    height: 50px;
    background: #000;
    margin-top: 40px;
    border-left: 3px solid #d8000b;
    h2 {
      line-height: 50px;
      color: #fff;
      padding-left: 20px;
      font-weight: normal;
      i {
        font-style: normal;
        color: #d8000b;
      }
    }
  }
  .cart_empty {
    background: #fff;
    padding: 50px;
    text-align: center;
    margin: 20px auto;
    font-size: 18px;
    color: #666;
  }
  .cart_select_title {
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    width: 100%;
    background: #fff;
    margin-top: 30px;
    .select {
      text-align: left;
      padding-left: 15px;
    }
    div {
      text-align: center;
    }
  }
  .w28 {
    width: 28%;
    .text-black {
      color: #666 !important;
    }
    .f14 {
      font-size: 14px !important;
      a {
        padding: 0 5px;
        box-sizing: border-box;
      }
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .text-red {
      color: #ee2e3a !important;
    }
  }
  .w20 {
    width: 20%;
  }
  .w10 {
    width: 10%;
  }
  .cart_item {
    background: #fff;
    margin-top: 15px;
    height: 160px;
    overflow: hidden;
    .w35 {
      width: 30%;
      .select {
        line-height: 160px;
        padding-left: 15px;
        border-right: 1px solid #d8d8d8;
      }
      .text-center {
        text-align: center !important;
      }
      .pl0 {
        padding-left: 0px !important;
      }
      .w27 {
        width: 27%;
        .text-black {
          color: #666 !important;
        }
        .f14 {
          font-size: 14px !important;
        }
      }
      .cart .cart_item .w35 .img {
        text-align: center;
      }
      .w7 {
        width: 68%;
        a {
          text-decoration: none;
          color: #777;
          img {
            max-width: 100%;
            vertical-align: middle;
            display: inline-block;
          }
        }
      }
    }
    .cart_list_right {
      width: 70%;
      .title_line {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #d8d8d8;
        width: 100%;
        text-align: center;
        border-left: 1px solid #ddd;
        .cart .good-name {
          font-weight: bold;
        }
        .w28 {
          width: 28%;
          font-weight: 900;
        }
        .w15 {
          border-left: 1px solid #d8d8d8;
          width: 14%;
        }
        .fwb {
          font-weight: bold !important;
        }
        .text-red {
          color: #ee2e3a !important;
        }
        .date {
          line-height: 44px;
          padding-top: 10px;
        }
      }
    }
    .cart_format {
      line-height: 40px;
      height: 100px;
      position: relative;
      padding-left: 10px;
      border-left: 1px solid #ddd;
      span {
        border: 1px solid #d8d8d8;
        width: 70px;
        height: 25px;
        display: block;
        text-align: center;
        line-height: 25px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #000;
        background-color: #fff;
        font-weight: 900;
        cursor: pointer;
      }
      span:hover {
        background: #d8000b;
        color: #fff;
        border: none;
      }
    }
    .text-gray {
      color: #666 !important;
    }
  }
  .cart_total {
    height: 50px;
    background: #fff;
    margin-top: 20px;
    margin-bottom: 65px;
    .left {
      line-height: 50px;
      padding-left: 15px;
      i {
        font-style: normal;
        color: #d8000b;
      }
      .fwb {
        font-weight: bold !important;
      }
    }
    .right {
      span {
        font-size: 24px;
        padding-right: 15px;
        color: #d8000b;
      }
      button {
        height: 50px;
        line-height: 50px;
        width: 180px;
        color: rgb(255, 255, 255);
        font-size: 22px;
        font-family: 微软雅黑;
        background: rgb(216, 0, 11);
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        cursor: pointer;
      }
    }
  }
}
.cart {
  min-width: 1200px;
}
</style>
