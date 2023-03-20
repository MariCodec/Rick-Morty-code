import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Character from "./pages/Character/Character";
import PrivateRoute from "./PrivateRoute";
import AuthorizedRoute from "./AuthorizedRoute";
import { URLS } from "./consts";
import { CharactersList } from "./pages/CharactersList/CharactersList";
import Login from "./pages/Login/Login";
import { useAuthorization } from "./hooks/useAuthorization";

import "./App.scss";

function App() {
  const { user } = useAuthorization();
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={URLS.CHARACTER}
            element={
              <PrivateRoute Component={<Character />} isAuthenticated={user} />
            }
          />
          <Route
            path={URLS.ROOT}
            element={
              <PrivateRoute
                Component={
                  <CharactersList
                    photoUser={user?.photoURL}
                    user={user}
                    search={search}
                    setSearch={setSearch}
                  />
                }
                isAuthenticated={user}
              />
            }
          />

          <Route
            path={URLS.LOGIN}
            element={
              <AuthorizedRoute Component={<Login />} isAuthenticated={user} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
