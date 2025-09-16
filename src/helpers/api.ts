import axios, { type InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config.params) config.params = {}
  config.params['appid'] = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
  config.params['lang'] = 'vi'
  config.params['units'] = 'metric'

  return config
})

export default api
