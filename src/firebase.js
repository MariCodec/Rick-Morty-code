import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKAJkf2stHOShLwYG6qHrnYlaHDMHqQ9M",
  authDomain: "authentication-52009.firebaseapp.com",
  projectId: "authentication-52009",
  storageBucket: "authentication-52009.appspot.com",
  messagingSenderId: "893741491139",
  appId: "1:893741491139:web:6692d5be06ea4bb42f9376",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
// export const googleAuthProvider = new GoogleAuthProvider();
