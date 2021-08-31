import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteRecord } from "../../actions";

import { Card, Alert } from "react-bootstrap";
import classes from "./fetchedItem.module.css";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import UpdateForm from "../ui/updateForm";

const FetchedItem = (props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [updateFormIsVisible, setUpdateFormIsVisible] = useState(false);

  const dispatch = useDispatch();

  function deleteHandler() {
    setModalIsVisible(true);
  }

  const editHandler = () => {
    setUpdateFormIsVisible(true);
  };

  function closeModal() {
    setModalIsVisible(false);
  }

  function deleteItem() {
    dispatch(deleteRecord(props.id));
    setModalIsVisible(false);
  }

  return (
    <React.Fragment key={props.id}>
      <div className="eight wide column">
        <Card>
          <div>
            <div>
              <div>
                <div className={classes.content}>
                  <h1>ID: {props.id}</h1>
                  <p>
                    <b>Title: </b> {props.title}
                  </p>
                  <p>
                    <b>Body: </b>
                    {props.description}
                  </p>

                  <p>Index: {props.index}</p>
                </div>
                <div className="right floated content">
                  <div className="ui compact menu">
                    <a
                      className="item"
                      onClick={() => {
                        editHandler();
                      }}
                    >
                      <i className="edit icon"></i>
                      Update
                    </a>

                    <a
                      className="item"
                      onClick={() => {
                        deleteHandler();
                      }}
                    >
                      <i className="delete icon"></i>
                      Delete
                    </a>
                  </div>
                </div>

                {modalIsVisible && (
                  <Modal onCancel={closeModal} onConfirm={deleteItem} />
                )}
                {/* {modalIsVisible && <Backdrop onCancel={closeModal} />} */}

                {/* {modalIsOpen && (
                  <Modal onCancel={closeModal} onConfirm={deleteItem} />
                  // <Alert variant="danger">Deleting</Alert>
                )}
                 */}

                {updateFormIsVisible && (
                  <UpdateForm
                    index={props.index}
                    id={props.id}
                    body={props.description}
                    title={props.title}
                  />
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default FetchedItem;
