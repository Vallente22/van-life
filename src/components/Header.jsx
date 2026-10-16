import { Link, NavLink } from "react-router-dom"

export default function Header() {

  return (
    <header>
      <nav>
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>

        <div>
          <NavLink to="/host" className={({isActive}) => isActive ? "active-style" : null }>Host</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active-style" : null }>About</NavLink>
          <NavLink to="/vans" className={({isActive}) => isActive ? "active-style" : null }>Vans</NavLink>
        </div>
      </nav>
    </header>
  )
}