import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, path, element: Element, other }) {
  // replace with your actual authentication logic
  return isAuthenticated ? (
    <Element {...other} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
