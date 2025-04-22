<template>
  <div class="page__container">
    <div class="form__container">
      <h3 class="head">Вход</h3>
      <BaseInput :type="email" :placeholder="'Эл. почта'" />
      <BaseInput :type="password" :placeholder="'Пароль'" />
      <BaseButton :onclick="handleLogIn">Войти</BaseButton>
      <div>
        <p class="text">Нужно зарегистрироваться?</p>
        <a class="text link" href="#">Регистрируйтесь здесь</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import router from '@/router'

async function handleLogIn(e) {
  e.preventDefault() // Предотвращаем перезагрузку страницы
  localStorage.setItem('userInfo', 'true') // Сохраняем флаг авторизации
  router.push('/') // Перенаправляем на главную страницу
}
</script>

<style lang="scss" scoped>
.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
  color: rgba(148, 166, 190, 0.4);
}

.link {
  border-bottom: 1px solid rgba(148, 166, 190, 0.4);
}
.head {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
}
.page__container {
  background: rgba(234, 238, 246, 1);
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 60px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(212, 219, 229, 1);
  width: fit-content;
  height: fit-content;
}
</style>
