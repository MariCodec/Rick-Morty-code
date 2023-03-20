import { Navigate } from "react-router-dom";
import { URLS } from "./consts";

const PrivateRoute = ({ Component, isAuthenticated }) => {
  return isAuthenticated ? Component : <Navigate to={URLS.LOGIN} />;
};

export default PrivateRoute;
