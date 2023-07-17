import Input from "./Input"
import type { ApiResponse, MovieT } from "../../hooks/useMovies"
import useKeys from "../../hooks/useKeys"
type NavProps = {
  movies: ApiResponse<MovieT>
  query: string
  setQuery: (movieName: string) => void
}

function NavBar({ movies, query, setQuery }: NavProps) {
  const { Ref } = useKeys<HTMLInputElement>(
    "Enter",
    "keypress",
    () => {
      setQuery("")
      Ref.current?.focus()
    },

    [setQuery]
  )
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <Input
        ref={Ref}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.Search?.length || 0}</strong> results
      </p>
    </nav>
  )
}

export default NavBar
