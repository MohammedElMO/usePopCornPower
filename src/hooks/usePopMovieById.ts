import { useEffect, useState } from "react"
import clientApi from "../api/client-api"

export interface UniqueMovie {
  Response: string
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Released: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}

const usePopMovieById = (id: string) => {
  const [uniqueMovie, setUniqueMovie] = useState({} as UniqueMovie)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    if (!id) return
    const fetchUniqueMovie = async () => {
      setLoading(true)
      const res = await clientApi.get<UniqueMovie>("", {
        params: {
          i: id,
        },
        signal: controller.signal,
      })

      setUniqueMovie(res.data)
      setLoading(false)
    }
    fetchUniqueMovie()

    return () => controller.abort()
  }, [id])
  return {
    loading,
    uniqueMovie,
  }
}
export default usePopMovieById
