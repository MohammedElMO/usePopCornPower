import { ReactNode, useState } from "react"
import Button from "../common/Button"

function MoviesWatchedOrSearched({ children }: { children: ReactNode }) {
  const [isOpenedMovies, setIsOpenedMovie] = useState(true)

  return (
    <section className="box">
      <Button
        className="btn-toggle"
        onClick={() => setIsOpenedMovie((open) => !open)}
      >
        <span>{isOpenedMovies ? "–" : "+"}</span>
      </Button>
      {isOpenedMovies && children}
    </section>
  )
}

export default MoviesWatchedOrSearched
