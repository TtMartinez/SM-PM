import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="not-found-link">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
