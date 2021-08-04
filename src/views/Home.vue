<template>
  <div class="canvas-container">
    <div
      class="canvas"
      :style="{
        width:
          changeStyleWithScale(canvasStyle.width, canvasStyle.scale) + 'px',
        height:
          changeStyleWithScale(canvasStyle.height, canvasStyle.scale) + 'px',
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
      canvasStyle: { width: "375", height: "740", scale: 100 },
      componentData: [
        {
          animations: [],
          events: {
            click:
              "const arr = [1, 2, 3, 4, 5, 6]\r\narr.forEach(v => {\r\n    console.log(v)\r\n})",
          },
          groupStyle: {},
          isLock: false,
          component: "rect-shape",
          label: "矩形",
          propValue: "&nbsp;",
          icon: "juxing",
          style: {
            rotate: 0,
            opacity: 1,
            width: 200,
            height: 200,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "",
            letterSpacing: 0,
            textAlign: "center",
            color: "",
            borderColor: "#000",
            borderWidth: 1,
            backgroundColor: "#AB2525",
            borderStyle: "solid",
            verticalAlign: "middle",
            top: 2,
            left: 1,
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
