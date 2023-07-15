import { useEffect, useState } from "react"

export const useDebounce = (searchTerm: string, delay: number) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, delay)
  }, [debouncedSearchTerm,searchTerm])
  return debouncedSearchTerm
}
