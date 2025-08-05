<template>
  <div class="pop-browse__btn-browse">
    <div v-if="isEdit" class="btn-group">
      <button class="btn-edit__edit _btn-bg _hover01">
        <a href="#" @click.prevent="saveTask">Сохранить</a>
      </button>
      <button class="btn-edit__edit _btn-bor _hover03">
        <a href="#" @click.prevent="cancelEdit">Отменить</a>
      </button>
      <button class="btn-edit__delete _btn-bor _hover03" id="btnDelete">
        <a href="#">Удалить задачу</a>
      </button>
    </div>
    <div v-else class="btn-group">
      <button @click.prevent="setEdit" class="btn-browse__edit _btn-bor _hover03">
        <a href="#">Редактировать задачу</a>
      </button>
      <button @click.prevent="removeTask" class="btn-browse__delete _btn-bor _hover03">
        <a href="#">Удалить задачу</a>
      </button>
    </div>
    <button class="btn-browse__close _btn-bg _hover01">
      <a href="#" @click.prevent="closeTask">Закрыть</a>
    </button>
  </div>
</template>

<script setup>
import { deleteTaskQuery } from '@/services/api'
import { inject, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isEdit = ref(false)
const route = useRoute()
const router = useRouter()

const taskId = route.params.id

watch(
  () => route.fullPath,
  (newPath) => {
    isEdit.value = newPath.endsWith('/edit')
  },
  { immediate: true },
)

const tasksStore = inject('tasksStore')

const removeTask = () => {
  console.log(taskId)
  deleteTaskQuery(taskId).then(({ tasks }) => {
    tasksStore.value = tasks
    router.push('/')
  })
}

const setEdit = () => {
  isEdit.value = true
  router.push(`/task/${taskId}/edit`)
}

const cancelEdit = () => {
  isEdit.value = false
  router.push(`/task/${taskId}`)
}

const saveTask = () => {
  // Логика сохранения задачи здесь
  isEdit.value = false
  router.push(`/task/${taskId}`)
}

const closeTask = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.pop-browse__btn-browse,
.pop-browse__btn-edit {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.pop-browse__btn-browse button,
.pop-browse__btn-edit button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
.pop-browse__btn-browse .btn-group button,
.pop-browse__btn-edit .btn-group button {
  margin-right: 8px;
}
</style>
