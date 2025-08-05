<script setup>
import { ref } from 'vue'
import UserModal from './modals/UserModal.vue'
import { useRouter } from 'vue-router'

const isShowModal = ref(false)
const changeShowModal = () => {
  isShowModal.value = !isShowModal.value
}

const router = useRouter()

const createTask = () => router.push('/task/add')
</script>

<template>
  <nav class="header__nav">
    <button class="header__btn-main-new _hover01" id="btnMainNew" :onclick="createTask">
      Создать новую задачу
    </button>
    <button class="header__user _hover02" @click="changeShowModal">Ivan Ivanov</button>
    <UserModal v-if="isShowModal" />
  </nav>
</template>

<style lang="scss" scoped>
.header__nav {
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__btn-main-new {
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
}
.header__btn-main-new a {
  color: #ffffff;
}
.header__user {
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  border: none;
  background: transparent;
}
.header__user::after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565eef;
  border-bottom: 1.9px solid #565eef;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}

@media screen and (max-width: 495px) {
  .header__btn-main-new {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
}
</style>
