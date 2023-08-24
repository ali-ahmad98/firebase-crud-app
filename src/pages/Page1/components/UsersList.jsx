import React, { useEffect } from "react";

import { getDocuments, deletDocument } from "util/apiServices";

const UsersList = ({ users, setUsers, setUpdateUserForm }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getDocuments("users"));
    };
    fetchUsers();
  }, []);

  const onDeleteUser = async (userId) => {
    deletDocument(`users/${userId}`);
  };

  return (
    <div className="list-container">
      <h3>All Users</h3>
      {users.map((user, index) => (
        <ul key={index}>
          <li>{user?.username}</li>
          <li>{user?.age}</li>
          <li>
            <button onClick={() => setUpdateUserForm(user)}>Edit</button>
            <button onClick={() => onDeleteUser(user?.id)}>delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UsersList;
