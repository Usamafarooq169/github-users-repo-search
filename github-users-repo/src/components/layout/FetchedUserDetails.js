import React from "react";
import github from "../apis/github";

export default function FetchedUserDetails(props) {
  const handleClick = async () => {
    const response = await github.get(`/${props.username}/repos`);
    console.log(response.data);
  };

  return (
    <div className="card mt-4 d-flex p-2">
      <h5 className="card-header">
        Username: <strong>{props.username}</strong>
      </h5>

      <div className="card-body">
        <div>
          <h5 className="card-title">
            User ID: <strong>{props.userId}</strong>
          </h5>
          <p className="card-text">
            <strong>Bio:</strong> {props.userBio}
          </p>
          <a href={props.reposUrl}>Repositories</a>
        </div>
        <div className="d-flex justify-content-end">
          <img
            src={props.avatarUrl}
            className="float-right rounded-circle "
            alt="Avatar not found"
            style={{ width: "86px" }}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-2 w-100" onClick={handleClick}>
        Generate Repository Timeline
      </button>
    </div>
  );
}
