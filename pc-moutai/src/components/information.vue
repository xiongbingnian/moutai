<template>
  <div id="information">
    <div class="article information">
      <div class="meun">
        <ul>
          <li v-for="(item,index) in typeList" :key="index" :class="{active:item.id==tabBg}" @click="istabBg(item.id)">
            <router-link to="" v-text="item.class_name"></router-link>
          </li>
        </ul>
      </div>

      <div class="articleList">
        <ul class="clearfix">
          <li v-for="(item,index) in dataList" :key="index">
            <router-link v-bind="{to:'/informationDeatil/'+item.id}">
              <b>
                <img :src="item.image">
              </b>
              <h2 v-text="item.title"></h2>
              <p>{{ item.abbr }}
                <span class="more-btn">[详情]</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <p style="text-align:center;font-size:20px;padding:100px 0" v-if="dataList.length==0">无数据</p>
      <!-- 分页 -->
      <div class="page_box">
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabBg: null, //tab栏切换颜色
        typeList: [],
        dataList: [],
        // 表示当前第几页
        currentPage: 1,
        // 表示当前的页容量是多少
        pageSize: 12,
        // 当前的数据总条数是多少 
        total: 0,
      };
    },
    mounted() {
      this.getTypeList();
      this.getDataList();
    },
    methods: {
      /* 点击切换类型 */
      istabBg(id) {
        this.tabBg = id;
        let url = '/article/index?class_id=' + id + '';
        this.$http.get(url).then(res => {
          this.dataList = res.data.data;
          console.log(this.dataList);
          this.total = res.data.count_limit;
        })
      },
      /* 分页数据 */
      currentChange(page){
        this.currentPage = page;
        this.getDataList();
      },
      /* 获取类型按钮 */
      getTypeList() {
        let url = '/article/get_articl_class';
        this.$http.get(url).then(res => {
          this.typeList = res.data.data;
        })
      },
      /* 获取数据列表 */
      getDataList() {
        let url = '/article/index?page=' + this.currentPage + '&limit=' + this.pageSize + '';
        this.$http.get(url).then(res => {
          this.dataList = res.data.data;
          this.total = res.data.count_limit;
          console.log(res.data.data);
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
    margin-top: 50px;
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
