import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>

        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/vans">Vans</NavLink>
        </div>
      </nav>
    </header>
  )
}