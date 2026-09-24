import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useAuth } from "../context/AuthContext"
import { categories } from "../services/products"
import "./Navbar.css"

function Navbar() {
  const { user, logout } = useAuth()

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

      <div className="navbar-actions">
        {user ? (
          <div className="navbar-user">
            <span className="navbar-user-email">{user.email}</span>
            <button onClick={logout} className="navbar-logout">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="navbar-login">
            Iniciar sesión
          </NavLink>
        )}

        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar