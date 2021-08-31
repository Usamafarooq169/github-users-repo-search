import React, { useState } from "react";
import github from "../apis/github";
import RepoList from "../repositories/RepoList";

export default function FetchedUserDetails(props) {
  const [userRepos, setUserRepos] = useState([]);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleClick = async () => {
    const response = await github.get(`/${props.username}/repos`);
    setUserRepos(response.data);
    setShowTimeline(true);
    console.log(response.data);
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
        {/* <div className="card-body">
          <div>
            <h5 className="card-title">
              User ID: <strong>{props.userId}</strong>
            </h5>
            <p className="card-text">
              <strong>Bio:</strong> {props.userBio}
            </p>
            <p className="card-text">
              <strong>Location: </strong> {props.location}
            </p>
            <p className="card-text">
              <strong>Total Repositories: </strong> {props.totalRepos}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <img
              src={props.avatarUrl}
              className="float-right rounded-circle "
              alt="Avatar not found"
              style={{ width: "86px" }}

            />
          </div>
        </div> */}
        <button className="btn btn-primary mt-2 w-100" onClick={handleClick}>
          Generate Repository Timeline
        </button>
      </div>
      <RepoList repos={userRepos} />
    </>
  );
}
