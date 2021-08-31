import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Alert } from "react-bootstrap";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SearchIcon from "@material-ui/icons/Search";

import FetchedUserDetails from "./FetchedUserDetails";

import { getUser } from "../../store/actions";

const SearchBar = () => {
  const searchTermRef = useRef();
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setError("");
      dispatch(getUser(searchTermRef.current.value));
      setPreview(true);
    } catch {
      setError("Username not found! Please Enter a valid GITHUB username");
    }
  };
  console.log("From Redux: ", currentUser);

  return (
    <div className="search-bar ui segment">
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="form-inline" onSubmit={submitHandler}>
        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
          <h4>Github Username</h4>
        </label>

        <div className="input-group mb-2 mr-sm-2 mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <AccountBoxIcon />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            ref={searchTermRef}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2 mt-4 ">
          <SearchIcon /> Search user
        </button>
      </form>

      {preview && (
        <FetchedUserDetails
          username={currentUser.login}
          userId={currentUser.id}
          avatarUrl={currentUser.avatar_url}
          userBio={currentUser.bio}
          reposUrl={currentUser.repos_url}
          location={currentUser.location}
          totalRepos={currentUser.public_repos}
        />
      )}
    </div>
  );
};

export default SearchBar;
