<template>
  <div class="theme-down__categories theme-down" :class="{ _hide: !isEdit }">
    <p class="categories__p subttl">Категория</p>
    <div class="categories__list">
      <div
        v-for="(colorClass, category) in categories"
        :key="category"
        class="categories__theme"
        :class="[colorClass, { '_active-category': modelValue === category }]"
        @click="$emit('update:modelValue', category)"
      >
        <p :class="colorClass">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const categories = {
  'Web Design': '_orange',
  Research: '_green',
  Copywriting: '_purple',
}

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.categories__list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
  cursor: pointer;
}
</style>
