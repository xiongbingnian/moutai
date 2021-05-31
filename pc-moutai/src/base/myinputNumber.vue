<template>
    <div class="mycom">
      <button @click="substrict">-</button>
      <button>{{num}}</button>
      <button @click="add">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  // 用来接收父组件传入的值，格式：{gid:88,num:1}
  props: ["options"],
  created() {
    this.num = this.options.num;
  },
  methods: {
    // 减一
    substrict() {
      this.num--;
      this.send();
      if (this.num < 1) {
        this.num = 1;
      }
    },
    // 加一
    add() {
      this.num++;
      this.send();
    },
    // 触发子组件传值给父组件
    send() {
      this.$emit("update", {
        gid: this.options.gid,
        num: this.num,
        index: this.options.index
      });
    }
  }
};
</script>
<style scoped lang="less">
.mycom {
  font-size: 0;
  border-left: none;
  padding-top: 5px;
  height: 55px;
  button {
    width: 24px;
    height: 24px;
    font-weight: bold;
    cursor: pointer;
  }
  button:nth-child(2) {
    background: #fff;
    border-top: 1px #ddd solid;
    border-bottom: 1px #ddd solid;
    width: 44px;
    cursor: text;
  }
}
</style>
