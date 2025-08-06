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
        <a href="#" @click.prevent="removeTask">Удалить задачу</a>
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
import { deleteTaskQuery, updateTaskQuery } from '@/services/api'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  isEdit: {
    type: Boolean,
    required: true,
  },
  task: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const tasksStore = inject('tasksStore')

const removeTask = async () => {
  if (!props.task?._id) return
  await deleteTaskQuery(props.task.id).then(({ tasks }) => {
    tasksStore.value = tasks
    router.push('/')
  })
}

const setEdit = () => {
  router.push(`/task/${props.task._id}/edit`)
}

const cancelEdit = () => {
  router.push('/')
}

const saveTask = async () => {
  if (!props.task?._id) return
  await updateTaskQuery(props.task._id, props.task).then(({ tasks }) => {
    tasksStore.value = tasks
    router.push('/')
  })
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
