<template>
  <div>
    <component
      class="component"
      :is="config.component"
      :style="getStyle(config.style)"
      :propValue="config.propValue"
      :element="config"
    />
  </div>
</template>

<script>
import { getStyle } from "../utils/style";
import runAnimation from "../utils/runAnimation";
export default {
  name: "ComponentWrapper",
  props: {
    config: {
      type: Object,
      require: true,
    },
  },
  methods: {
    getStyle,
  },
  mounted() {
    runAnimation(this.$el, this.config.animations);
  },
};
</script>

<style lang="scss" scoped>
.component {
  position: absolute;
}
</style>
