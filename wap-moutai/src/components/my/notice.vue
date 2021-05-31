<template>
  <div class="my-notice">
    <b-header :title="title"></b-header>
    <div class="content">
      <ul class="tab">
        <li class="tab-item" :class="{active:tabActive==0}" @click="_btnTab(0)">
          <span>系统通知</span>
        </li>
        <li class="tab-item" :class="{active:tabActive==1}" @click="_btnTab(1)">
          <span>系统公告</span>
        </li>
      </ul>
      <div class="message-none">
        <span>暂时没有系统通知</span>
      </div>
    </div>
  </div>
</template>
<script>
  import BHeader from "base/b-header/b-header";
  export default {
    data() {
      return {
        title: "我的消息",
        tabActive: 0
      };
    },
    components: {
      BHeader,
    },
    methods: {
      _btnTab(index) {
        this.tabActive = index;
      }
    }
  };

</script>

<style lang="stylus" scoped>
  .tab {
    display: flex;
    border-bottom: .04rem solid #e7e7e7;
    padding: 0 6%;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
    line-height: .78rem;
    padding: 0 6%;
    color: #4f4f4f;
  }

  .tab .tab-item.active span {
    border-bottom: .04rem solid #d60018;
    display: block;
    color: #000;
  }

  .message-none {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
  }

</style>
