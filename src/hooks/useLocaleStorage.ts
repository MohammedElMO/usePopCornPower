import { useEffect, useState } from "react"
import { UniqueMovie } from "./usePopMovieById"

export type MovieWithExtraDate = {
  data: (UniqueMovie & {
    rating: number
    RatingDecisions: number
  })[]
}

const useLocaleStorage = (key: string, initialState: NonNullable<any>) => {
const callBack = () => JSON.parse(localStorage.getItem(key)!) 

  const [watched, setWatched] = useState<
    (UniqueMovie & {
      rating: number
      RatingDecisions: number
    })[]
  >(callBack?.() || initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(watched))
  }, [watched])

  return { watched, setWatched }
}

export default useLocaleStorage
