import { Button } from "bootstrap";
import React from "react";
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const handleGoogleSignIn = () =>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.email)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
      <form >
        <input type='text' placeholder='Enter your email' required></input> <br></br>
        <input type='password' placeholder='Enter your password' required></input><br></br>
        <input type='Submit' value='submit'></input>
      </form>
    </div>
  );
};

export default Login;
