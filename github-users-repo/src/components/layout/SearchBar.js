import React, { useRef } from "react";
import github from "../apis/github";

import { Button } from "react-bootstrap";

const SearchBar = () => {
  const searchTermRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    // const response = await fetch("https://api.github.com/users/usamafarooq169");
    const response = await github.get(`/${searchTermRef.current.value}`);
    console.log(response.data);
    // console.log(`Searchterm: ${searchTermRef.current.value}`);
  };

  return (
    <div className="search-bar ui segment">
      <form className="form-inline" onSubmit={submitHandler}>
        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
          <h4>Github username</h4>
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

        <button type="submit" className="btn btn-primary mb-2">
          Search user
        </button>
      </form>

      {/* <Button
        className="btn btn-primary"
        onClick={() => {
          submitHandler();
        }}
      >
        Search user
      </Button> */}
    </div>
  );
};

export default SearchBar;
