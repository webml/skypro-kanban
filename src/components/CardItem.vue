<script setup>
import CardContent from './CardContent.vue'
import ThreeDotsButton from './ThreeDotsButton.vue'
</script>

<template>
  <div class="cards__card card">
    <div class="card__group">
      <div class="card__theme _green">
        <p class="_green">Research</p>
      </div>
      <a href="#popBrowse" target="_self">
        <ThreeDotsButton />
      </a>
    </div>
    <CardContent />
  </div>
</template>

<style lang="scss" scoped></style>
