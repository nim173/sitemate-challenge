import axios from 'axios'

const baseURL = 'http://localhost:5000'

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
