<script setup>
import CardContent from './CardContent.vue'
import ThreeDotsButton from './ThreeDotsButton.vue'
import { groups } from '@/mocks/groups'

defineProps({
  card: { id: Number, topic: String, title: String, date: String, status: String || null },
})
</script>

<template>
  <div class="cards__item">
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

<style lang="scss" scoped></style>
