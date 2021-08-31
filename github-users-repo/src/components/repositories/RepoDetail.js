import React, { useState } from "react";

import { Card } from "react-bootstrap";
import classes from "./RepoDetail.module.css";

const FetchedItem = (props) => {
  return (
    <React.Fragment key={props.id}>
      <div className="eight wide column mt-4 ">
        <h2 className="ui header">
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="Github"
          />
          <div className="content">
            Repository Name: {props.name}
            <div className="sub header">Repository ID: {props.id}</div>
            <div className="sub header">
              View on github: <a href={props.url}>{props.name}</a>
            </div>
          </div>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default FetchedItem;
