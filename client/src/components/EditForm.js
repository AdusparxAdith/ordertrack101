import React, { useState } from "react";

const EditForm = ({ text, id }) => {
  const [form, setForm] = useState("");

  const handleSubmit = e => {
    const field = text.split(" ")[1];
    const value = form;
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">{text}</label>
        <input
          type="text"
          value={form}
          className="form-control"
          id="formGroupExampleInput"
          onChange={e => setForm(e.target.value)}
        />
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary option"
            onClick={e => handleSubmit(e)}
          >
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-secondary option"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
