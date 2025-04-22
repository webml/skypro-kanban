<template>
  <div class="error-container">
    <div class="error-code">404</div>
    <div class="error-message">Страница не найдена</div>
    <button class="error-button" @click="goHome">Вернуться на главную</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}

.error-container {
  text-align: center;
}

.error-code {
  font-size: 120px;
  color: #343a40;
  margin-bottom: 20px;
}

.error-message {
  font-size: 24px;
  color: #495057;
  margin-bottom: 30px;
}

.error-button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.error-button:hover {
  background-color: #0056b3;
}
</style>
