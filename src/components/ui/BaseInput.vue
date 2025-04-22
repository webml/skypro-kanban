<template>
  <input
    :type="inputType"
    :style="{
      width: inputWidth,
      height: inputHeight,
      borderRadius: inputBorderRadius,
      borderColor: inputBorderColor,
    }"
    class="base-input"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    width: { type: Number, default: 248 },
    height: { type: Number, default: 30 },
    borderRadius: { type: Number, default: 8 },
    type: { type: String, default: 'text' },
    borderColor: { type: String, default: 'rgba(148, 166, 190, 0.4)' },
  },
  computed: {
    inputWidth() {
      return this.width + 'px'
    },
    inputHeight() {
      return this.height + 'px'
    },
    inputBorderRadius() {
      return this.borderRadius + 'px'
    },
    inputType() {
      return this.type
    },
    inputBorderColor() {
      return this.borderColor
    },
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  border: 1px solid rgba(148, 166, 190, 0.4);
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  gap: 10px;
}
</style>
