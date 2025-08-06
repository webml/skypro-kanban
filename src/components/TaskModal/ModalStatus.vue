<template>
  <div class="pop-browse__status status">
    <p class="status__p subttl">Статус</p>
    <BaseLoader v-if="isLoading" :width="104" :height="36" :border-radius="24" />
    <div v-else class="status__themes">
      <div
        v-for="status in statuses"
        :key="status"
        class="status__theme"
        :class="{
          _hide: !isEdit && currentStatus !== status.value,
          _gray: currentStatus === status.value,
          clickable: isEdit,
        }"
        @click="handleStatusClick(status.value)"
      >
        <p>{{ status.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineProps, defineEmits } from 'vue'
import { statuses } from '@/mocks/statuses'
import BaseLoader from '../ui/BaseLoader.vue'

const props = defineProps({
  modelValue: String, // текущий статус передаётся через v-model
  isLoading: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const isEdit = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  (newPath) => {
    isEdit.value = newPath.endsWith('/edit')
  },
  { immediate: true },
)

const currentStatus = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

console.log(currentStatus)

function handleStatusClick(status) {
  if (!isEdit.value) return
  currentStatus.value = status
}
</script>

<style scoped>
.status {
  margin-bottom: 11px;
}
.status__p {
  margin-bottom: 14px;
}
.status__themes {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.status__theme {
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #333;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
}
.status__theme p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
</style>
