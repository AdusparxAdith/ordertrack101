import React, { Fragment } from "react";
import EditForm from "./EditForm";
const Modal = ({ text, id }) => {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary option"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        {text}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {text}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EditForm text={text} id={id} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
