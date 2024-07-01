import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

const navItems = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Experience",
    to: "/experience",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav">
      <ul>
        {navItems.map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive || (to === "/about" && pathname === "/")
                  ? "active"
                  : ""
              }
            >
              {label}
              <span></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
