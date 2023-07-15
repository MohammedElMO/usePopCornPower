import type { ApiResponse, MovieT } from "../../hooks/useMovies"
import Loader from "../common/Loader"
import Movie from "./Movie"

type ListProps = {
  movies: ApiResponse<MovieT>
  query: string
  loading: boolean
  handleSelectedMovie: (movieId: string) => void
  idm: string
}

function MoviesList({
  movies,
  idm,
  query,
  loading,
  handleSelectedMovie
}: ListProps) {
  if (!query) return <h1 className="error">No Search name was provided</h1>
  if (loading) return <Loader />
  if (!Boolean(movies.Response) || movies.Error)
    return <h1 className="error">No Movies Was Found</h1>
  return (
    <>
      <ul className="list list-movies">
        {movies.Search?.map((movie) => (
          <Movie
            idm={idm}
            onChoose={handleSelectedMovie}
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </ul>
    </>
  )
}

export default MoviesList
