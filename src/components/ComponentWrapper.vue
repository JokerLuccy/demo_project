<template>
  <div @click="handleClick">
    <component
      :is="config.component"
      :element="config"
      :propValue="config.propValue"
      :style="getStyle(config.style)"
      class="component"
    />
  </div>
</template>

<script>
import { getStyle } from "../utils/style";
import runAnimation from "../utils/runAnimation";
import { mixins } from "../utils/events";
import vm from "@/utils/eventBus";
export default {
  name: "ComponentWrapper",
  mixins: [mixins],
  props: {
    config: {
      type: Object,
      require: true,
    },
  },

  methods: {
    getStyle,
    handleClick() {
      const events = this.config.events;
      Object.keys(events).forEach((event) => {
        this[event](events[event]);
      });
    },
    handleLeftClick() {
      console.log("左侧图标触发");
    },
    handleRightClick() {
      console.log("右侧图标触发");
    },
  },
  mounted() {
    runAnimation(this.$el, this.config.animations);
    vm.$on("vTitleLeftClick", this.handleLeftClick);
    vm.$on("vTitleRightClick", this.handleRightClick);
  },
};
</script>

<style lang="scss" scoped>
.component {
  position: absolute;
}
</style>
