import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@material-ui/lab/Alert";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined";
import ContactsIcon from "@material-ui/icons/Contacts";

import FetchedUserDetails from "./FetchedUserDetails";

import { getUser } from "../../store/actions";
import {
  Container,
  TextField,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // root: {
  //   color: "orange",
  //   marginTop: 14,
  // },

  margining: {
    marginTop: 5,
  },
});

const SearchBar = () => {
  const searchTermRef = useRef();
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState(false);

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(getUser(searchTermRef.current.value));
    console.log("From Ref: ", searchTermRef.current.value);
    setPreview(true);
  };

  console.log("From Redux: ", currentUser);

  return (
    // <div className="search-bar ui segment">
    // {/* {error && <Alert severity="error">{error}</Alert>} */}
    //   {error && <div>Hello Error</div>}
    //   <form className="form-inline" onSubmit={submitHandler}>
    //     <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
    //       <h4>Github Username</h4>
    //     </label>

    //     <div className="input-group mb-2 mr-sm-2 mt-4">
    //       <div className="input-group-prepend">
    //         <div className="input-group-text">
    //           <AccountBoxIcon />
    //         </div>
    //       </div>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="inlineFormInputGroupUsername2"
    //         placeholder="Username"
    //         ref={searchTermRef}
    //       />
    //     </div>

    //     <button type="submit" className="btn btn-primary mb-2 mt-4 ">
    //       <SearchIcon /> Search user
    //     </button>
    //   </form>

    // {preview && (
    //   <FetchedUserDetails
    //     username={currentUser.login}
    //     userId={currentUser.id}
    //     avatarUrl={currentUser.avatar_url}
    //     userBio={currentUser.bio}
    //     reposUrl={currentUser.repos_url}
    //     location={currentUser.location}
    //     totalRepos={currentUser.public_repos}
    //   />
    // )}
    // </div>
    <div style={{ marginTop: 15 }}>
      <Container maxWidth="xs">
        {error && <Alert severity="error">Error is there</Alert>}
        <form onSubmit={submitHandler}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="searchbar">
              <ContactsIcon />
            </InputLabel>
            <Input
              id="searchbar"
              aria-describedby="desc"
              inputRef={searchTermRef}
            />
            <FormHelperText id="desc">
              Enter github username to search profile.
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <Button
              id="searchButton"
              variant="contained"
              color="primary"
              startIcon={<PageviewOutlinedIcon />}
              type="submit"
            >
              Search
            </Button>
          </FormControl>
        </form>
      </Container>

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
