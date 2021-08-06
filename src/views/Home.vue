<template>
  <div class="canvas-container">
    <div
      class="canvas"
      :style="{
        width: changeStyleWithScale(canvasStyle.width, canvasStyle.scale),
        height: changeStyleWithScale(canvasStyle.height, canvasStyle.scale),
      }"
    >
      <ComponentWrapper
        v-for="(item, index) in componentData"
        :key="index"
        :config="item"
      ></ComponentWrapper>
    </div>
  </div>
</template>

<script>
import { changeStyleWithScale } from "../utils/translate";
import ComponentWrapper from "../components/ComponentWrapper";

export default {
  name: "Home",
  components: { ComponentWrapper },
  data() {
    return {
      canvasStyle: { width: "375", height: "812", scale: 100 },
      componentData: [
        {
          animations: [],
          events: {},
          groupStyle: {},
          isLock: false,
          component: "v-title",
          label: "标题",
          propValue:
            '{"left":"iconfanhui","center":"标题","right":"iconxiaoxitongzhi"}',
          icon: "iconwenzi",
          data: { config: { position: "center" } },
          callBackEvents: ["vTitleLeftClick", "vTitleRightClick"],
          style: {
            rotate: 0,
            opacity: 1,
            width: 375,
            height: 40,
            fontSize: 14,
            backgroundColor: "#1B2238",
            color: "#E9ECF0",
            top: 3,
            left: -1,
          },
          id: 0,
        },
      ],
    };
  },

  methods: {
    changeStyleWithScale,
  },
};
</script>
<style lang="scss" scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  .canvas {
    background: #fff;
    position: relative;
    margin: auto;
  }
}
</style>
