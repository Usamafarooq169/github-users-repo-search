import React, { useRef, useState } from "react";
import github from "../apis/github";
import { Alert } from "react-bootstrap";
import FetchedUserDetails from "./FetchedUserDetails";

const SearchBar = () => {
  const searchTermRef = useRef();
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setError("");
      const response = await github.get(`/${searchTermRef.current.value}`);
      setPreview(true);
      setFetchedData(response.data);
    } catch {
      setError("Username not found! Please Enter a valid GITHUB username");
    }
  };
  console.log("From State: ", fetchedData);
  //   console.log("Username: ", fetchedData.login);
  //   console.log("ID: ", fetchedData.id);
  //   console.log("ID: ", fetchedData.avatar_url);
  return (
    <div className="search-bar ui segment">
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="form-inline" onSubmit={submitHandler}>
        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
          <h4>Github Username</h4>
        </label>

        <div className="input-group mb-2 mr-sm-2 mt-4">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            ref={searchTermRef}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2 mt-4">
          Search user
        </button>
      </form>

      {preview && (
        <FetchedUserDetails
          username={fetchedData.login}
          userId={fetchedData.id}
          avatarUrl={fetchedData.avatar_url}
          userBio={fetchedData.bio}
          reposUrl={fetchedData.repos_url}
          location={fetchedData.location}
          totalRepos={fetchedData.public_repos}
        />
      )}
    </div>
  );
};

export default SearchBar;
