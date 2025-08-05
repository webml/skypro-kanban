<template>
  <div class="page__container">
    <div class="form__container">
      <h3 class="head">
        {{ isSignUp ? 'Регистрация' : 'Вход' }}
      </h3>
      <BaseInput
        :class="{ error: errors.name }"
        v-show="isSignUp"
        placeholder="Имя"
        v-model="formData.name"
        @focus="clearError('name')"
      />
      <BaseInput
        :class="{ error: errors.login }"
        :type="'email'"
        :placeholder="'Эл. почта'"
        v-model="formData.login"
        @focus="clearError('login')"
      />
      <BaseInput
        :class="{ error: errors.password }"
        :type="'password'"
        :placeholder="'Пароль'"
        v-model="formData.password"
        @focus="clearError('password')"
      />

      <BaseButton :onclick="handleSubmit">
        {{ isSignUp ? 'Зарегистрироваться' : 'Войти' }}
      </BaseButton>
      <div v-show="!isSignUp">
        <p class="text">Нужно зарегистрироваться?</p>
        <RouterLink class="text link" to="/sign-up">Регистрируйтесь здесь</RouterLink>
      </div>
      <div v-show="isSignUp">
        <p class="text">Уже есть аккаунт?</p>
        <RouterLink class="text link" to="/log-in">Войдите здесь</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { logIn, signUp } from '@/services/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  isSignUp: Boolean,
})

const formData = ref({
  name: '',
  login: '',
  password: '',
})

const errors = ref({
  name: false,
  login: false,
  password: false,
})

const error = ref('')

const clearError = (field) => {
  errors.value[field] = false
}

function validateForm() {
  let isValid = true
  error.value = ''
  // Сбросим все ошибки
  errors.value.name = false
  errors.value.login = false
  errors.value.password = false
  // Проверка имени (только для регистрации)
  if (props.isSignUp && !formData.value.name.trim()) {
    errors.value.name = true
    isValid = false
  }
  // Проверка логина (эл. почты)
  if (!formData.value.login.trim()) {
    errors.value.login = true
    isValid = false
  }
  // Проверка пароля
  if (!formData.value.password.trim()) {
    errors.value.password = true
    isValid = false
  }
  // Если есть ошибки, установим общее сообщение
  if (!isValid) {
    error.value = 'Пожалуйста, заполните все обязательные поля'
  }

  return isValid
}

async function handleSubmit(event) {
  event.preventDefault()
  // Валидация формы перед отправкой
  if (!validateForm()) {
    return
  }
  try {
    const data = props.isSignUp
      ? await signUp(formData.value)
      : await logIn({ login: formData.value.login, password: formData.value.password })
    if (data) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      router.push('/')
    }
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style lang="scss" scoped>
.error {
  border-color: red !important;
  background-color: rgba(255, 0, 0, 0.1);
}

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
