import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <>
      <nav className="flex gap-5 px-5 py-5">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "text-black hover:underline"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "text-black hover:underline"
          }
        >
          Income
        </NavLink>

        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "text-black hover:underline"
          }
        >
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616]"
              : "text-black hover:underline"
          }
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}