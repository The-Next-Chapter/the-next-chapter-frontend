import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000
})

/* --------------------------
   RESPONSE INTERCEPTOR
   (Centralized error handling)
--------------------------- */
API.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response) {
      return Promise.reject({
        message: error.response.data?.message || "Server error",
        status: error.response.status
      })
    }

    if (error.request) {
      return Promise.reject({
        message: "No response from server",
        status: 503
      })
    }

    return Promise.reject({
      message: error.message,
      status: 500
    })
  }
)

/* --------------------------
   RESOURCE APIs
--------------------------- */
export const getResources = async () => {
  const res = await API.get("/resources")

  if (!Array.isArray(res.data)) {
    throw { message: "Invalid resources format" }
  }

  return res.data
}

export const getResourceBySlug = async (slug) => {
  const res = await API.get(`/resources/${slug}`)

  if (!res.data || !res.data.slug) {
    throw { message: "Invalid resource data" }
  }

  return res.data
}

/* --------------------------
   CONTACT API
--------------------------- */
export const sendContactMessage = async (data) => {

  if (!data?.name || !data?.email || !data?.message) {
    throw { message: "All fields are required" }
  }

  const res = await API.post("/contact", data)
  return res.data
}

/* --------------------------
   NEWSLETTER API
--------------------------- */
export const subscribeNewsletter = async (data) => {

  if (!data?.email || !data.email.includes("@")) {
    throw { message: "Invalid email" }
  }

  const res = await API.post("/newsletter", data)
  return res.data
}

export default API