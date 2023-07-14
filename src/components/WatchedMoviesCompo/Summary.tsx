import { WatchedMovies } from "../../constants/movies"
import { average } from "../../utils/average"

type SumProps = {
  watchedMovies: WatchedMovies
}

function Summary({ watchedMovies }: SumProps) {
  const avgImdbRating = average([
    ...watchedMovies.map((movie) => movie.imdbRating),
  ])
  const avgUserRating = average([
    ...watchedMovies.map((movie) => movie.userRating),
  ])
  const avgRuntime = average([...watchedMovies.map((movie) => movie.runtime)])

  return (
    <>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watchedMovies.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Summary