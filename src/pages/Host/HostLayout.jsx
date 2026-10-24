import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex gap-5 px-5 py-5">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive
              ? "font-bold underline"
              : "hover:underline"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline"
              : "hover:underline"
          }
        >
          Income
        </NavLink>

        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline"
              : "hover:underline"
          }
        >
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline"
              : "hover:underline"
          }
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}