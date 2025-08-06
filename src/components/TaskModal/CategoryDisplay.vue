<template>
  <div class="theme-down__categories theme-down" :class="{ _hide: isEdit }">
    <div
      v-if="category && categories[category]"
      class="categories__theme _active-category"
      :class="categories[category]"
    >
      <p :class="categories[category]">{{ category }}</p>
    </div>
    <div v-else class="categories__theme _gray">
      <p class="_gray">Без категории</p>
    </div>
  </div>
</template>

<script setup>
const categories = {
  'Web Design': '_orange',
  Research: '_green',
  Copywriting: '_purple',
}

defineProps({
  category: {
    type: String,
    default: '',
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
})
</script>
