import { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const useAuthorization = () => {
  const [firebaseUser] = useAuthState(auth);

  useEffect(() => {
    if (firebaseUser)
      localStorage.setItem("user", JSON.stringify(firebaseUser));
  }, [firebaseUser]);

  const user = useMemo(
    () => JSON.parse(localStorage.getItem("user")) || firebaseUser,
    [firebaseUser]
  );

  return { user };
};
