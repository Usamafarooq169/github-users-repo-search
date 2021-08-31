import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GetAppIcon from "@material-ui/icons/GetApp";
import RepoList from "../repositories/RepoList";
import { getRepos } from "../../store/actions";

export default function FetchedUserDetails(props) {
  // const [userRepos, setUserRepos] = useState([]);
  const [showTimeline, setShowTimeline] = useState(false);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user);
  const userRepos = useSelector((state) => state.repos);

  const handleClick = async () => {
    dispatch(getRepos(currentUser.login));
    setShowTimeline(true);
  };

  return (
    <>
      <div className="card mt-4 d-flex p-2">
        <h5 className="card-header">User Details</h5>
        <h2 className="ui icon header">
          <i>
            <img
              src={props.avatarUrl}
              className="float-right rounded-circle "
              alt="Avatar not found"
              style={{ width: "86px" }}
            />
          </i>
          <div className="content">
            {props.username}
            <div className="sub header">{props.userBio}</div>
            <p className="sub  sub header">{props.location}</p>
            <p className="sub  sub header">
              Total Repositories: {props.totalRepos}
            </p>
          </div>
        </h2>

        <button className="btn btn-primary mt-2 w-100" onClick={handleClick}>
          <GetAppIcon /> Generate Repository Timeline
        </button>
      </div>
      {showTimeline && (
        <RepoList
          repos={userRepos}
          username={props.username}
          userUrl={props.html_url}
        />
      )}
    </>
  );
}
