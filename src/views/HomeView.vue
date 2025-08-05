<script setup>
import PageHeader from '@/components/PageHeader.vue'
import MainColumn from '@/components/MainColumn.vue'
import { statuses } from '@/mocks/statuses'
import { onMounted, ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import { getTasks } from '@/services/api'

const isLoading = ref(true)
const tasks = ref([])

provide('tasksStore', tasks)

onMounted(async () => {
  const taskList = await getTasks()
  if (taskList) {
    tasks.value = taskList
    isLoading.value = false
  }
})
</script>

<template>
  <div class="wrapper">
    <PageHeader />
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            <div
              v-if="!isLoading && tasks.length === 0"
              style="display: flex; justify-content: center; align-items: center"
            >
              <p>Задач нет</p>
            </div>
            <MainColumn
              v-else
              v-for="status in statuses"
              :key="status.label"
              :title="status.label"
              :cards="tasks.filter((task) => task.status === status.value)"
              :isLoading="isLoading"
            />
          </div>
        </div>
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
}

.main {
  width: 100%;
  background-color: #eaeef6;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.main__content {
  width: 100%;
  display: flex;
}

@media screen and (max-width: 495px) {
  .container {
    width: 100%;
    padding: 0 16px;
  }
}

@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
  .main__content {
    display: block;
  }
}
</style>
