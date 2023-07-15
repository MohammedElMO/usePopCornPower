import { AxiosError, AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import clientApi from "../api/client-api"

export interface MovieT {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface ApiResponse<T> {
  Search: T[] | undefined
  Response: string
  totalResults: string | undefined
  Error?: string
}

const useMovies = (s: string) => {
  const [movies, setMovies] = useState({} as ApiResponse<MovieT>)
  // const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const controller = new AbortController()
    if (!s) return
    const fetchMovies = async () => {
        setLoading(true)
        const res = await clientApi.get<ApiResponse<MovieT>>("", {
          params: {
            s,
          },
          signal: controller.signal,
        })
        if(res.status !== 200)
          throw new Error("Oppps!")
        setMovies(res.data)
        setLoading(false)
    }
    fetchMovies()

    return () => controller.abort()
  }, [s])

  return {
    movies,
    // error,
    loading,
  }
}
export default useMovies
