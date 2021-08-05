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
          component: "rect-shape",
          label: "矩形",
          propValue: "&nbsp;",
          icon: "juxing",
          style: {
            rotate: 0,
            opacity: 1,
            width: "187.5",
            height: "406",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "",
            letterSpacing: 0,
            textAlign: "center",
            color: "",
            borderColor: "#000",
            borderWidth: 1,
            backgroundColor: "#A42121",
            borderStyle: "solid",
            verticalAlign: "middle",
            top: "0",
            left: "0",
          },
          id: 1,
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
    background: skyblue;
    position: relative;
    margin: auto;
  }
}
</style>
