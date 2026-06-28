import axios from 'axios'

let router = null

export function setRouter(r) {
  router = r
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert('Sesi login telah berakhir. Silakan login kembali.')
      localStorage.removeItem('token')
      localStorage.removeItem('isLoggedIn')
      if (router) {
        router.push('/login')
      } else {
        window.location.replace('/login')
      }
    }
    return Promise.reject(error)
  }
)

export default api
