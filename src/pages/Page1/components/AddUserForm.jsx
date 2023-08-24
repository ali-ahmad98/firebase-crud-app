import React from "react";

import { addDocument } from "util/apiServices";

const AddUserForm = ({ addUserForm, setAddUserForm }) => {
  const onTextFieldChange = (e) => {
    setAddUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onAddUser = (e) => {
    e.preventDefault();
    addDocument("users", addUserForm);
  };

  return (
    <div className="form-container">
      <h3>Add User</h3>
      <form>
        {/* Username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={addUserForm.username}
            onChange={onTextFieldChange}
          />
        </div>
        {/* Age */}
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={addUserForm.age}
            onChange={onTextFieldChange}
          />
        </div>
        {/* Submit */}
        <button type="submit" onClick={onAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
