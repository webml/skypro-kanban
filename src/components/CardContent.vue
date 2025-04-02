<script setup>
import CalendarIcon from '@/components/icons/CalendarIcon.vue'
</script>

<template>
  <div class="card__content">
    <a href="" target="_blank">
      <h3 class="card__title">Название задачи</h3>
    </a>
    <div class="card__date">
      <CalendarIcon />
      <p>30.10.23</p>
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
