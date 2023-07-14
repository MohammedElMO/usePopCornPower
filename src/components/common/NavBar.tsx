import Input from "./Input"
import { Movies } from "../../constants/movies"
type NavProps = {
  movies: Movies
  query: string
  setQuery: (movieName: string) => void
}

function NavBar({ movies, query, setQuery }: NavProps) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  )
}

export default NavBar
