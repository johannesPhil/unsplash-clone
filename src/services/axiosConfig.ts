import axios from 'axios'

//create a
const axiosInstance = axios.create({
  baseURL: `https://api.unsplash.com/search/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
})

export default axiosInstance
