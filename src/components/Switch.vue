<template>
  <div ref="vswitch" :style="{ width: width + 'px' }" class="v-switch">
    <div :style="{ left: width - 27 + 'px' }" ref="circle" class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "VSwitch",
  props: {
    width: {
      type: Number,
      default: 51,
    },
  },
  data() {
    return {
      flag: false, // 开关状态
    };
  },
  computed: {
    // 计算应该移动的距离
    getMoveDistance() {
      let circleWidth = this.$refs.circle.offsetWidth;
      return this.width - circleWidth;
    },
  },
  watch: {
    flag: {
      handler(newVal) {
        if (newVal) {
          console.log("开关打开了");
          this.$refs.circle.style.left = 0 + "px";
        } else {
          console.log("开关关闭了");
          this.$refs.circle.style.left = this.getMoveDistance + "px";
        }
        this.handleChange();
      },
    },
  },
  methods: {
    // 切换开关状态
    handleSwitch() {
      this.flag = !this.flag;
    },
    // 开关发生改变时触发回调
    handleChange() {
      this.$emit("change");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-switch {
  position: relative;
  height: 27px;
  background: #2ebef3;
  opacity: 1;
  border-radius: 16px;
  .circle {
    position: absolute;
    width: 27px;
    height: 100%;
    background: #ffffff;
    border: 1px solid #2ebef3;
    box-shadow: -3px 1px 2px rgba(25, 143, 186, 0.15);
    border-radius: 50%;
    opacity: 1;
    transition: all 0.2s ease-in-out;
    top: 0;
  }
}
</style>
