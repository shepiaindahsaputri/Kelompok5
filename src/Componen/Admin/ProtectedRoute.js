import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminToken")
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
