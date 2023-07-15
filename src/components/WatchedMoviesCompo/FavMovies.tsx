import { UniqueMovie } from "../../hooks/usePopMovieById"
import Button from "../common/Button"
import WatchedMovie from "./WatchedMovie"

type FavProps = {
  favWatchedMovies: (UniqueMovie & { rating: number })[]
  DeleteWatchedMovie: (movieId: string) => void
}

function FavMovies({ favWatchedMovies, DeleteWatchedMovie }: FavProps) {
  return (
    <>
      <ul className="list">
        {favWatchedMovies.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
          >
            <Button
              type="button"
              className="btn-delete"
              onClick={() => DeleteWatchedMovie(movie.imdbID)}
            >
              X
            </Button>
          </WatchedMovie>
        ))}
      </ul>
    </>
  )
}

export default FavMovies
