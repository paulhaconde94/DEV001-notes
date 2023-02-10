import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLblv1LlFqMiNEQLEidHLa2c1oCkfe20o",
  authDomain: "write-coffee-4b72f.firebaseapp.com",
  projectId: "write-coffee-4b72f",
  storageBucket: "write-coffee-4b72f.appspot.com",
  messagingSenderId: "888585045663",
  appId: "1:888585045663:web:ae50bcdac61364635704aa",
  measurementId: "G-S6LLWTZ8QR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app); 
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const loginWithGoogle = () => {
  const auth = getAuth();
  const user = auth.currentUser;
if (user !== null) {
  const displayNameUser = user.displayName;
  const emailUser = user.email;
  //const photoURLUser = user.photoURL;
  //const emailVerifiedUser = user.emailVerified;

  const uid = user.uid;
  console.log("usuario ingresado: ", emailUser)
  console.log("usuario display: ", displayNameUser)
}
  return googlePopUp();
};