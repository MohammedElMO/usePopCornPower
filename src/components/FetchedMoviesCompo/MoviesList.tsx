import type { ApiResponse, MovieT } from "../../hooks/useMovies"
import Loader from "../common/Loader"
import Movie from "./Movie"
import empty from "../../assets/empty.png"
import emptyPage from "../../assets/page.png"
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
  if (!query)
    return (
      <div className="empty_state">
        <img src={empty} alt="no search query image" />
        <h1 className="error">No Search name was provided</h1>
      </div>
    )

  if (loading) return <Loader />
  if (!Boolean(movies.Response) || movies.Error)
    return (
      <div className="empty_state">
      <img src={emptyPage} alt="no search query image" />
      <h1 className="error">No Movies Were Found</h1>
    </div>
    )
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
