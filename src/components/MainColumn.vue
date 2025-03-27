<script setup>
import CardItem from './CardItem.vue'

defineProps({ title: String, cards: Array })
</script>

<template>
  <div class="main__column">
    <div class="column__title">
      <p>{{ title }}</p>
    </div>
    <div class="cards">
      <CardItem v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
