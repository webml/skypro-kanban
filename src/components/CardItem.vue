<script setup>
import BaseLoader from './BaseLoader.vue'
import CardContent from './CardContent.vue'
import ThreeDotsButton from './ThreeDotsButton.vue'
import { groups } from '@/mocks/groups'

defineProps({
  card: {
    id: Number,
    topic: String,
    title: String,
    date: String,
    status: String || null,
  },
  isLoading: Boolean,
})
</script>

<template>
  <div v-if="isLoading" class="cards__item">
    <div class="cards__card card">
      <div class="card__group">
        <BaseLoader class="card__theme" :width="82" :height="20" :border-radius="18" />
        <BaseLoader :width="18" :height="4" />
      </div>
      <div class="loader__content">
        <BaseLoader :width="113" :height="13" />

        <BaseLoader :width="58" :height="13" />
      </div>
    </div>
  </div>

  <div v-else class="cards__item">
    <div class="cards__card card">
      <div class="card__group">
        <div :class="['card__theme ', groups[card.topic]]">
          <p :class="[groups[card.topic]]">{{ card.topic }}</p>
        </div>
        <a href="#popBrowse" target="_self">
          <ThreeDotsButton />
        </a>
      </div>
      <CardContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

.loader__content {
  display: flex;
  flex-direction: column;
  height: 61px;
  justify-content: space-between;
}

.cards__item {
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
}
.cards__card {
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
}

.card__group {
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__theme {
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
}
.card__theme p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
}

@media screen and (max-width: 1200px) {
  .cards__card {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
}

._orange {
  background-color: #ffe4c2;
  color: #ff6d00;
}

._green {
  background-color: #b4fdd1;
  color: #06b16e;
}

._purple {
  background-color: #e9d4ff;
  color: #9a48f1;
}

._gray {
  background: #94a6be;
  color: #ffffff;
}
</style>
