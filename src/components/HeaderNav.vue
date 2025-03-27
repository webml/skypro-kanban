<script setup>
import { ref } from 'vue'
import UserModal from './modals/UserModal.vue'

const isShowModal = ref(false)
const changeShowModal = () => {
  isShowModal.value = !isShowModal.value
}
</script>

<template>
  <nav class="header__nav">
    <button class="header__btn-main-new _hover01" id="btnMainNew">
      <a href="#popNewCard">Создать новую задачу</a>
    </button>
    <button class="header__user _hover02" @click="changeShowModal">Ivan Ivanov</button>
    <UserModal v-if="isShowModal" />
  </nav>
</template>

<style lang="scss" scoped></style>
