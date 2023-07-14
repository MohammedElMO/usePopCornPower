import { useState } from "react"
import MoviesList from "./components/FetchedMoviesCompo/MoviesList"
import FavMovies from "./components/WatchedMoviesCompo/FavMovies"
import MoviesWatchedOrSearched from "./components/WatchedMoviesCompo/MoviesWatched"
import Summary from "./components/WatchedMoviesCompo/Summary"
import NavBar from "./components/common/NavBar"
import { tempMovieData, tempWatchedData } from "./constants/movies"
import Rating from "./components/Rating"

function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  const handleSearchMove = (movieName: string) => {
    setQuery(movieName)
  }

  return (
    <div>
      <NavBar movies={[]} query={query} setQuery={handleSearchMove} />
      <main className="main">
        <Rating />
        <MoviesWatchedOrSearched>
          <MoviesList movies={movies} />
        </MoviesWatchedOrSearched>
        <MoviesWatchedOrSearched>
          <Summary watchedMovies={watched} />
          <FavMovies favWatchedMovies={watched} />
        </MoviesWatchedOrSearched>
      </main>
    </div>
  )
}

export default App
