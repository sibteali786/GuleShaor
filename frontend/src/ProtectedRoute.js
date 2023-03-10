import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, path, element: Element }) {
  // replace with your actual authentication logic
  return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
