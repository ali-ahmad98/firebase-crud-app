import React from "react";

import { setDocument } from "util/apiServices";

const UpdateUserForm = ({ updateUserForm, setUpdateUserForm }) => {
  const onTextFieldChange = (e) => {
    setUpdateUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onUpdateUser = (e) => {
    e.preventDefault();
    setDocument(`users/${updateUserForm.id}`, updateUserForm);
  };

  return (
    <div className="form-container">
      <h3>Update User</h3>
      <form>
        {/* Username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={updateUserForm.username}
            onChange={(e) => onTextFieldChange(e, setUpdateUserForm)}
          />
        </div>
        {/* Age */}
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={updateUserForm.age}
            onChange={(e) => onTextFieldChange(e, setUpdateUserForm)}
          />
        </div>
        {/* Submit */}
        <button type="submit" onClick={onUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
