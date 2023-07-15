import { UniqueMovie } from "../../hooks/usePopMovieById"
import { average } from "../../utils/average"

type SumProps = {
  watchedMovies: (UniqueMovie & { rating: number })[]
}

function Summary({ watchedMovies }: SumProps) {
  const avgImdbRating = average([
    ...watchedMovies.map((movie) => movie.rating)
  ]).toFixed(2)
  const avgUserRating = average([
    ...watchedMovies.map((movie) =>
      Number(movie.Ratings[0].Value.split("/")[0])
    )
  ]).toFixed(2)
  const avgRuntime = average([
    ...watchedMovies.map((movie) =>
      Number(movie.Runtime.split(" ")[0])
    )
  ]).toFixed()
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
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgImdbRating}</span>
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
