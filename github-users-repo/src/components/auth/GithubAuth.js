import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import { useSelector, useDispatch } from "react-redux";
import { getReposAuth } from "../../store/actions/index";
import RepoList from "../repositories/RepoList";

const config = {
  apiKey: "AIzaSyA8C2qhT0l8mAijvCPAcxsjaP6CixVZG-Y",
  authDomain: "fir-socialmedia-auth.firebaseapp.com",
  projectId: "fir-socialmedia-auth",
  storageBucket: "fir-socialmedia-auth.appspot.com",
  messagingSenderId: "970020649964",
  appId: "1:970020649964:web:e28f2a2825575f63ab5ec9",
};

function GithubAuth(props) {
  useEffect(() => {
    firebase.initializeApp(config);
  }, []);

  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [showTimeline, setShowTimeline] = useState(false);
  const dispatch = useDispatch();

  const githubSignin = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        // console.log("credential: ", credential);
        // // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // setToken(credential.accessToken);
        // // The signed-in user info.
        // setUser(result.user);

        console.log(result.user);
        dispatch(getReposAuth(props.username, credential.accessToken));
        setShowTimeline(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
    // console.log(provider);
  };
  const repos = useSelector((state) => state.repos);
  console.log("Auth Repositories", repos);
  //   console.log("User: ", credentials.user);
  //   console.log("Access Token: ", credentials.accessToken);
  return (
    <>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={githubSignin}
        startIcon={<GitHubIcon />}
      >
        Generate Timeline By Authenticating
      </Button>

      {/* {showTimeline && (
        <RepoList
          repos={repos}
          username={props.username}
          userUrl={props.html_url}
        />
      )} */}
    </>
  );
}

export default GithubAuth;
