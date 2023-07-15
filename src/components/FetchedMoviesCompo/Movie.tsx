import { MovieT } from "../../hooks/useMovies"
import fallBack from "../../assets/fallback.png"
type MovieProps = {
  movie: MovieT
  onChoose:(movieId:string) => void
  idm:string

}

function Movie({ movie,onChoose,idm }: MovieProps) {
  return (
    <li key={movie.imdbID} onClick={() => onChoose(movie.imdbID)} className={`${movie.imdbID === idm ? "active" : ""}`}>
      <img src={movie.Poster || fallBack} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

export default Movie
