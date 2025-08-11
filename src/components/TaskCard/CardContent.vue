<script setup>
import CalendarIcon from '@/components/icons/CalendarIcon.vue'
import dayjs from 'dayjs'

const { task } = defineProps({
  task: {
    id: Number,
    topic: String,
    title: String,
    date: String,
    status: String || null,
  },
})
</script>

<template>
  <div class="card__content">
    <RouterLink :to="`/task/${task._id}`">
      <h3 class="card__title">{{ task.title }}</h3>
    </RouterLink>
    <div class="card__date">
      <CalendarIcon />
      <p>{{ dayjs(task.date).format('DD.MM.YY') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
}
.card__content {
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.card__date {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.card__date svg {
  width: 13px;
}
.card__date p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
}
</style>
