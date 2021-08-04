<template>
  <div class="v-text preview">
    <div
      v-html="element.propValue"
      :style="{ verticalAlign: element.style.verticalAlign }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      require: true,
    },
    element: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-text {
  width: 100%;
  height: 100%;
  display: table;

  div {
    display: table-cell;
    width: 100%;
    height: 100%;
    outline: none;
  }

  .canEdit {
    cursor: text;
    height: 100%;
  }
}

.preview {
  user-select: none;
}
</style>
