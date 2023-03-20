import { Navigate } from "react-router-dom";

import { URLS } from "./consts";

const AuthorizedRoute = ({ Component, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to={URLS.ROOT} /> : Component;
};

export default AuthorizedRoute;
