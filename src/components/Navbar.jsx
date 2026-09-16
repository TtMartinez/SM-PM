import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { categories } from "../services/products"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-name">SM</span>
        <span className="brand-sub">Pamela Martin</span>
      </NavLink>

      <ul className="navbar-categories">
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/category/${category.slug}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar
