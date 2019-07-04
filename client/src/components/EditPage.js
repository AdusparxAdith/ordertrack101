import React from "react";
import EditForm from "./EditForm";
const EditPage = ({ text, id, collapseThis }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#${collapseThis}`}
              aria-expanded="true"
              aria-controls={collapseThis}
            >
              {text}
            </button>
          </h2>
        </div>

        <div
          id={collapseThis}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <EditForm text={text} id={id} collapseThis={collapseThis} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
