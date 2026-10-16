import { Link, NavLink } from "react-router-dom"

/**
 * Challenge - part 1:
 * Make the main navbar indicate the currently-active route. (You can
 * leave the home link alone, since it's doubling as our logo. Only
 * make changes to the /host, /about, and /vans links)
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * You can use either inline styles or a className.
 */

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