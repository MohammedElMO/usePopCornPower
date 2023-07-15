import axios from "axios"

export default axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: import.meta.env.VITE_API_KEY,
  },
})
