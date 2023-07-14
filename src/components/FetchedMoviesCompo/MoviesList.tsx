import Movie from "./Movie"
import { Movies } from "../../constants/movies"

type ListProps = {
  movies: Movies
}

function MoviesList({ movies }: ListProps) {
  return (
    <>
      <ul className="list">
        {movies?.map((movie,idx) => <Movie key={idx} movie={movie} />)}
      </ul>
    </>
  )
}

export default MoviesList
