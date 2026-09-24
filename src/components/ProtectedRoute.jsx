import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProtectedRoute({ children }) {
  const { user, loadingAuth } = useAuth()
  const location = useLocation()

  if (loadingAuth) {
    return <p className="loading-message">Verificando sesión...</p>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return children
}

export default ProtectedRoute