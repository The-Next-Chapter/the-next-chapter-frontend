import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})


export const getResources = () => API.get("/resources")

export const getResourceBySlug = (slug) => API.get(`/resources/${slug}`)

export const sendContactMessage = (data) => API.post("/contact", data)

export const subscribeNewsletter = (data) => API.post("/newsletter", data)

console.log(import.meta.env.VITE_API_BASE_URL)

export default API