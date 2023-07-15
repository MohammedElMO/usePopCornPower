import { useState } from "react"
import usePopMovieById, { UniqueMovie } from "../hooks/usePopMovieById"
import Rating from "./Rating"
import Loader from "./common/Loader"
type ViewerProps = {
  movieId: string
  onBackToMovies: () => void
  OnAddToWishList: (wishedMovie: UniqueMovie & { rating: number }) => void
  favMovies: (UniqueMovie & { rating: number })[]
}

function MovieViewer({
  movieId,
  OnAddToWishList,
  onBackToMovies,
  favMovies
}: ViewerProps) {
  const [rating, setRating] = useState<number>(0)
  const { uniqueMovie, loading } = usePopMovieById(movieId)

  const getFilledStars = (starsCount: number) => {
    setRating((_) => starsCount)
  }
  const watchedMovie = favMovies.find((fm) => fm.imdbID === movieId)
  if (loading) return <Loader />

  return (
    <section className="details">
      <header className="">
        <button className="btn-back" onClick={onBackToMovies}>
          &larr;
        </button>
        <img src={uniqueMovie.Poster} alt={uniqueMovie.Director} />
        <div className="details-overview">
          <h2>{uniqueMovie.Title}</h2>
          <p>
            {uniqueMovie.Released} {uniqueMovie.Runtime}
          </p>
          <p>{uniqueMovie.Genre}</p>
          <p>
            <span>⭐{uniqueMovie.imdbRating} IMDB reting </span>
          </p>
        </div>
      </header>
      <section className="details">
        <div className="rating">
          {!watchedMovie ? (
            <>
              <Rating
                getFilledStars={getFilledStars}
                size={30}
                color="gold"
                ratingStars={10}
                defaultRating={rating}
              />
              {rating > 0 && (
                <button
                  onClick={() => OnAddToWishList({ ...uniqueMovie, rating })}
                  className="btn-add"
                >
                  Add to list
                </button>
              )}
            </>
          ) : (
            <p>
              you already rated this Movie with {watchedMovie.rating}{" ⭐ "}
            </p>
          )}
        </div>
        <em>
          <p>{uniqueMovie.Plot}</p>
        </em>
        <p>Staring {uniqueMovie.Actors}</p>
        <p>Directed By {uniqueMovie.Director}</p>
      </section>
    </section>
  )
}

export default MovieViewer
