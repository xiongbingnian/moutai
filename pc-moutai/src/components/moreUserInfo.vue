<template>
  <div class="tab_container">
    <div id="tab5" class="tab_content" style="display: block; ">
      <div class="info">
        <div class="customize_li">
          <ul>
            <li>
              <router-link to="/setting">基本信息</router-link>
            </li>
            <li>
              <router-link to="/avatar">头像照片</router-link>
            </li>
            <li class="active">
              <router-link to="/moreUserInfo">更多个人信息</router-link>
            </li>
            <li>
              <router-link to="/address">常用收货地址</router-link>
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
      return {};
    },
    methods: {}
  };

</script>
<style scoped>
</style>