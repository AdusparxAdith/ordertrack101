import React, { useState } from "react";
import axios from "axios";

const EditForm = ({ text, id, collapseThis }) => {
  const [form, setForm] = useState("");

  const handleSubmit = async e => {
    const field = text.split(" ")[1];
    const value = form;
    console.log(id);
    const result = await axios.put(
      `https://ordertrack101.herokuapp.com/api/update/${id}/${field}/${value}`
    );
    console.log(result);
    window.location.reload();
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
            data-toggle="collapse"
            data-target={`#${collapseThis}`}
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
