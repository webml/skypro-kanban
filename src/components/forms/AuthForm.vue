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

      <p v-if="error" class="error-message">
        {{ error }}
      </p>

      <BaseButton :disabled="!!error" :class="{ disabled: !!error }" :onclick="handleSubmit">
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
  error.value = ''
}

function validateForm() {
  let isValid = true
  let allFieldsFilled = true
  error.value = ''

  errors.value.name = false
  errors.value.login = false
  errors.value.password = false

  if (props.isSignUp && !formData.value.name.trim()) {
    errors.value.name = true
    isValid = false
    allFieldsFilled = false
  }

  if (!formData.value.login.trim()) {
    errors.value.login = true
    isValid = false
    allFieldsFilled = false
  }

  if (!formData.value.password.trim()) {
    errors.value.password = true
    isValid = false
    allFieldsFilled = false
  }

  if (!isValid && props.isSignUp) {
    error.value = allFieldsFilled
      ? 'Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.'
      : 'Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.'
  } else if (!isValid) {
    error.value = 'Пожалуйста, заполните все обязательные поля'
  }

  return isValid
}

async function handleSubmit(event) {
  event.preventDefault()

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
    if (!props.isSignUp) {
      error.value =
        'Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.'
    } else {
      error.value =
        'Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.'
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  border-color: red !important;
  background-color: rgba(255, 0, 0, 0.1);
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
}

.disabled {
  background-color: #ccc !important;
  cursor: not-allowed !important;
  pointer-events: none;
  color: #666 !important;
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
