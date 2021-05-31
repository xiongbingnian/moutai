<template>
  <div id="member">
    <div class="head">
      <div class="container">
        <ul class="tabs">
          <li @click="active(0)" :class="{active:0==this.$store.getters.getmember}">
            <router-link to="/member">个人中心</router-link>
          </li>
          <li @click="active(1)" :class="{active:1==this.$store.getters.getmember}">
            <router-link to="/messages" class="tabsMyInfo">我的消息</router-link>
          </li>
          <li @click="active(2)" :class="{active:2==this.$store.getters.getmember}">
            <router-link to="/standardOrder">我的订单</router-link>
          </li>
          <li @click="active(3)" :class="{active:3==this.$store.getters.getmember}">
            <router-link to="/note">我的留言</router-link>
          </li>
          <li @click="active(4)" :class="{active:4==this.$store.getters.getmember}">
            <router-link to="/setting">信息设置</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {},
    methods: {
      /* tab栏切换 */
      active(index) {
        localStorage.setItem('member', index)
        var index = localStorage.getItem('member')
        this.$store.dispatch('chagemember', index)
      }
    }
  };

</script>
<style scoped>


</style>
