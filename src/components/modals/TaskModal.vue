<template>
  <div class="pop-browse" id="popBrowse">
    <div class="pop-browse__container">
      <div class="pop-browse__block">
        <div class="pop-browse__content">
          <div class="pop-browse__top-block">
            <BaseLoader v-if="isLoading" :width="220" :height="36" :border-radius="8" />
            <h3 v-else class="pop-browse__ttl">{{ task.title }}</h3>
            <BaseLoader v-if="isLoading" :width="120" :height="36" :border-radius="24" />
            <CategoryDisplay v-else :category="task.topic" :is-edit="isEdit" />
          </div>
          <ModalStatus v-model="task.status" :is-loading="isLoading" />
          <div class="pop-browse__wrap">
            <form class="pop-browse__form form-browse" id="formBrowseCard" action="#">
              <div class="form-browse__block">
                <label for="textArea01" class="subttl">Описание задачи</label>
                <textarea
                  class="form-browse__area"
                  name="text"
                  id="textArea01"
                  :readonly="!isEdit"
                  placeholder="Введите описание задачи..."
                  v-model="task.description"
                ></textarea>
              </div>
            </form>
            <BaseCalendar v-model="task.date" />
          </div>
          <CategorySelector v-model="task.topic" :is-edit="isEdit" />
          <ModalFooter :task="task" :is-edit="isEdit ? isEdit : false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCalendar from '@/components/ui/BaseCalendar.vue'
import ModalFooter from '../TaskModal/ModalFooter.vue'
import ModalStatus from '../TaskModal/ModalStatus.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getTaskById } from '@/services/api'
import BaseLoader from '../ui/BaseLoader.vue'
import CategorySelector from '../TaskModal/CategorySelector.vue'
import CategoryDisplay from '../TaskModal/CategoryDisplay.vue'

const task = ref({
  id: 0,
  topic: '',
  title: '',
  date: null,
  status: null,
  description: '',
})

const isLoading = ref(true)
const isEdit = ref(false)

const route = useRoute()
const taskId = route.params.id

onMounted(async () => {
  const taskById = await getTaskById(taskId)
  if (taskById) {
    task.value = taskById.task
    isLoading.value = false
  }
})

watch(
  () => route.path,
  () => {
    isEdit.value = route.meta.isEdit
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.pop-browse {
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
}
.pop-browse__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}
.pop-browse__block {
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
}
.pop-browse__content {
  display: block;
  text-align: left;
}
.pop-browse__content .categories__theme {
  opacity: 1;
}
.pop-browse__content .theme-down {
  margin-bottom: 20px;
}
.pop-browse__content .theme-top {
  display: block;
}
.pop-browse__top-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.pop-browse__ttl {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}
.pop-browse__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.pop-browse__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}
// .pop-browse__btn-browse,
// .pop-browse__btn-edit {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// }
// .pop-browse__btn-browse button,
// .pop-browse__btn-edit button {
//   height: 30px;
//   margin-bottom: 10px;
//   padding: 0 14px;
// }
// .pop-browse__btn-browse .btn-group button,
// .pop-browse__btn-edit .btn-group button {
//   margin-right: 8px;
// }
</style>
