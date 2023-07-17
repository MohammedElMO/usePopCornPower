import { ReactNode, useEffect,  } from "react"
import { UniqueMovie } from "../../hooks/usePopMovieById"

type WatchedProps = {
  movie: UniqueMovie & { rating: number }
  children: ReactNode
}

function WatchedMovie({ movie, children }: WatchedProps) {
  useEffect(() => {
    console.log()
    
  }, [movie])
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.Ratings[0].Value || ""}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.rating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
      </div>
      {children}
    </li>
  )
}

export default WatchedMovie
