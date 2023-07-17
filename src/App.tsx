import { useState } from "react"
import MoviesList from "./components/FetchedMoviesCompo/MoviesList"
import MovieViewer from "./components/MovieViewer"
import FavMovies from "./components/WatchedMoviesCompo/FavMovies"
import MoviesWatchedOrSearched from "./components/WatchedMoviesCompo/MoviesWatched"
import Summary from "./components/WatchedMoviesCompo/Summary"
import NavBar from "./components/common/NavBar"
import { useDebounce } from "./hooks/useDebounce"
import useLocaleStorage from "./hooks/useLocaleStorage"
import useMovies from "./hooks/useMovies"
import { UniqueMovie } from "./hooks/usePopMovieById"

function App() {
  const [query, setQuery] = useState("")
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null)
  const Deboucedsearch = useDebounce(query, 1000)
  const { watched, setWatched } = useLocaleStorage("WatchedMovies", [])
  const { movies: searchedMovies, loading } = useMovies(Deboucedsearch)
  const handleSearchMove = (movieName: string) => {
    setQuery(movieName)
  }
  const handleSelectedMovie = (movieId: string | null) => {
    setSelectedMovie((choosenMovie) =>
      choosenMovie === movieId ? null : movieId
    )
  }
  const handleOnBackToMovies = () => {
    setSelectedMovie(null)
  }
  const handleAddToWishList = (
    wishedMovie: UniqueMovie & { rating: number; RatingDecisions: number }
  ) => {
    setWatched((wishedList) =>
      wishedList.find((m) => m.imdbID === wishedMovie.imdbID) ||
      wishedMovie.rating === 0
        ? wishedList
        : [...wishedList, wishedMovie]
    )
    setSelectedMovie(wishedMovie.rating > 0 ? null : selectedMovie)
  }
  const handleDeleteWatchedMovie = (idToDelete: string) => {
    setWatched((watched) => watched.filter((w) => w.imdbID !== idToDelete))
  }

  return (
    <div>
      <NavBar
        movies={searchedMovies}
        query={query}
        setQuery={handleSearchMove}
      />
      <main className="main">
        <MoviesWatchedOrSearched>
          <MoviesList
            idm={selectedMovie || ""}
            handleSelectedMovie={handleSelectedMovie}
            movies={searchedMovies}
            loading={loading}
            query={query}
          />
        </MoviesWatchedOrSearched>
        <MoviesWatchedOrSearched>
          {selectedMovie ? (
            <MovieViewer
              favMovies={watched}
              onBackToMovies={handleOnBackToMovies}
              movieId={selectedMovie}
              key={selectedMovie}
              OnAddToWishList={handleAddToWishList}
              fetchedMovies={searchedMovies}
            />
          ) : (
            <>
              <Summary watchedMovies={watched} />
              <FavMovies
                DeleteWatchedMovie={handleDeleteWatchedMovie}
                favWatchedMovies={watched}
              />
            </>
          )}
        </MoviesWatchedOrSearched>
      </main>
    </div>
  )
}

export default App
