import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../constants";
import { getStoredAccessToken } from "../services";

export function RequireAuthentication() {
  if (!getStoredAccessToken()) {
    return <Navigate to={ROUTES.login} replace />;
  }

  return <Outlet />;
}
