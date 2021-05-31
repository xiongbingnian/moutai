<template>
  <div class="deatil">
    <div class="head">
      <el-breadcrumb separator="/" style="padding:30px 0">
        <el-breadcrumb-item :to="{ path: '/information' }">资讯天地</el-breadcrumb-item>
        <el-breadcrumb-item>酒文化</el-breadcrumb-item>
        <el-breadcrumb-item>正文内容</el-breadcrumb-item>
      </el-breadcrumb>
      <div v-html="deatilData.content" v-if="deatilData"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deatilData: {}
    };
  },
  created() {
    this.getDeatilPage();
  },
  watch: {
    // 当url的参数的发生改变的时候，会触发这个watch的重新执行
    $route: function() {
      // 当触发了这个方法就重新获取到最新的数据
      this.getDeatilPage();
    }
  },
  methods: {
    getDeatilPage() {
      let deatilId = this.$route.params.deatilId;
      let url = "/article/details?id=" + deatilId + "";
      this.$http.get(url).then(res => {
        this.deatilData = res.data.data;
      });
    }
  }
};
</script>
<style scoped lang="less">
.deatil {
  padding-bottom: 50px;
  background: #fff;
}
img {
  width: auto;
  margin: 0 auto;
}
p {
  padding: 0 50px;
  line-height: 30px;
  text-indent: 2em;
  margin-bottom: 20px;
}
</style>