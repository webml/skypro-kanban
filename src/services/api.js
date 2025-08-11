import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api'

export async function logIn(userData) {
  try {
    const data = await axios.post(API_URL + '/user/login', userData, {
      headers: {
        'Content-Type': '',
      },
    })
    return data.data.user
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL + '/user',
      { login, name, password },
      {
        headers: {
          'Content-Type': '',
        },
      },
    )
    return data.data.user
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

const getAuthHeader = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const token = userInfo?.token
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': '' } : {}
}

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL + '/kanban', {
      headers: getAuthHeader(),
    })
    return response.data.tasks
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Пользователь не авторизован')
    }
    throw new Error('Ошибка получения задач')
  }
}

export const getTaskById = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/kanban/${taskId}`, {
      headers: getAuthHeader(),
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Пользователь не авторизован')
    }
    if (error.response?.status === 404) {
      throw new Error('Задача не найдена')
    }
    throw new Error('Ошибка получения задачи')
  }
}

export const addTaskQuery = async (taskData) => {
  try {
    const response = await axios.post(
      API_URL + '/kanban',
      {
        title: taskData.title || 'Новая задача',
        topic: taskData.topic || 'Research',
        status: taskData.status || 'no_status',
        description: taskData.description || ' ',
        date: taskData.date || new Date().toISOString(),
      },
      {
        headers: getAuthHeader(),
      },
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Пользователь не авторизован')
    }
    if (error.response?.status === 400) {
      throw new Error('Неправильный формат данных')
    }
    throw new Error('Ошибка добавления задачи')
  }
}

export const updateTaskQuery = async (taskId, taskData) => {
  try {
    const response = await axios.put(
      `${API_URL}/kanban/${taskId}`,
      {
        title: taskData.title || 'Новая задача',
        topic: taskData.topic || 'Research',
        status: taskData.status || 'no_status',
        description: taskData.description || ' ',
        date: taskData.date || new Date().toISOString(),
      },
      {
        headers: getAuthHeader(),
      },
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Пользователь не авторизован')
    }
    if (error.response?.status === 400) {
      throw new Error('Неправильный формат данных')
    }
    throw new Error('Ошибка обновления задачи')
  }
}

export const deleteTaskQuery = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/kanban/${taskId}`, {
      headers: getAuthHeader(),
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Пользователь не авторизован')
    }
    throw new Error('Ошибка удаления задачи')
  }
}
