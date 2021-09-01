import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@material-ui/lab/Alert";

import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined";
import ContactsIcon from "@material-ui/icons/Contacts";

import FetchedUserDetails from "./FetchedUserDetails";

import { getUser } from "../../store/actions";

import {
  Container,
  FormControl,
  FormHelperText,
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
    <div style={{ marginTop: 30 }}>
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
              style={{ marginTop: 15 }}
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
