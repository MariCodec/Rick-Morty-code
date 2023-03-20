import React from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import git from "../../assets/github.png";
import Header from "../../components/Header/Header";
import { auth } from "../../firebase";

import "./index.scss";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken;
      let photoURL =
        result?.user?.photoURL + "?height=500&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL });
    } catch (error) {
      console.log(error);
    }
  };

  const gitLogin = async () => {
    try {
      const result = await signInWithPopup(auth, gitProvider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="authorization">
      <Header />
      <h1>choose a login method</h1>
      <div className="form">
        <div className="loginSocial">
          <button onClick={googleLogin} className="login gmail">
            {" "}
            <img src={google} alt="" />
            Continue with google
          </button>
          <button onClick={fbLogin} className="login faceboock">
            <img src={facebook} alt="" /> Continue with facebook
          </button>
          <button onClick={gitLogin} className="login git">
            <img src={git} alt="" /> Continue with github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
