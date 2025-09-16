// src/helpers/weather.ts
import api from '@/helpers/api'

// Hà Nội coordinates
const LAT = 21.0285
const LON = 105.8542

export const getWeatherSimple = async () => {
  return await api.get('', {
    params: {
      lat: LAT,
      lon: LON,
      exclude: 'minutely,daily,alerts', // chỉ lấy current + hourly nếu muốn
    },
  })
}
