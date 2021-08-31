import React, { useState } from "react";

import { Card } from "react-bootstrap";
import classes from "./RepoDetail.module.css";

const FetchedItem = (props) => {
  return (
    <React.Fragment key={props.id}>
      <div className="eight wide column">
        <Card>
          <div>
            <div>
              <div>
                <div className={classes.content}>
                  <h3>
                    <strong>Repository Title: </strong> {props.name}
                  </h3>
                  <p>
                    <b>Repository ID: </b> {props.id}
                  </p>
                  <p>
                    <b>View Repository: </b>
                    <a href={props.url}>{props.name}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default FetchedItem;
