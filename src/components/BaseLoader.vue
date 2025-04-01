<template>
  <div
    class="loader"
    :style="{ width: loaderWidth, height: loaderHeight, borderRadius: loaderBorderRadius }"
  ></div>
</template>

<script>
export default {
  name: 'BaseLoader',
  props: {
    width: { type: String, default: '40px' },
    height: { type: String, default: '40px' },
    borderRadius: { type: String, default: '0' },
  },
  computed: {
    loaderWidth() {
      return this.width + 'px'
    },
    loaderHeight() {
      return this.height + 'px'
    },
    loaderBorderRadius() {
      return this.borderRadius + 'px'
    },
  },
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #c1cddc 0%, #e9eef7 100%);
}
</style>
