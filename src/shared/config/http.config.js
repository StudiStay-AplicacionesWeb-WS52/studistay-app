import axios from 'axios'
import router from '../../router'

export const http = axios.create({
  baseURL: 'https://studistay.azurewebsites.net/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

//interceptor de solicitud (añade el token JWT en cada solicitud)
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user-token')
    if (token) {
      console.log("token")
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//interceptor de respuesta (maneja el error 401 - No Autorizado)
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //redirige al login si el error es 401 (No Autorizado)
      router.push('/login')
    }
    
    return Promise.reject(error)
  }
)
