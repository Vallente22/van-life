import { Link, NavLink } from "react-router-dom"

export default function Header() {

  return (
    <header>
      <nav className="flex justify-between items-center bg-[#FDF5E9] py-[10px]">
        <Link to="/">
          <h1 className="ml-5">#VANLIFE</h1>
        </Link>

        <div className="flex gap-5 mx-5">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Host
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  )
}