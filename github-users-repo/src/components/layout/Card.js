import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
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
      <button className="btn btn-primary mt-2 w-100">
        Generate Repository Timeline
      </button>
    </div>
  );
}
