import { NavLink } from "react-router-dom";
import "./Nav.css";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <NavLink to={href}>
              {label}
              <span></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
