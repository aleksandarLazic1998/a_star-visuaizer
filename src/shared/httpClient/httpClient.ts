import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

httpClient.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token')!)
    if (token && config.headers) config.headers.Authorization = token
    return config
})

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) window.location.replace('/')
        else throw error
    }
)

export default httpClient
