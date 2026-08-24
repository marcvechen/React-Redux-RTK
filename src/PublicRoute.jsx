import { Navigate, Outlet } from "react-router";

function PublicRoute() {
  const token = localStorage.getItem("access_token");
  if (token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
export default PublicRoute;
