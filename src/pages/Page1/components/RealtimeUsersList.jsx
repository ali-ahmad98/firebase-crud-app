import React, { useEffect } from "react";

import { onSanpshotDocuments, deletDocument } from "util/apiServices";

const RealtimeUsersList = ({ realtimeUsers, setRealtimeUsers, setUpdateUserForm }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      setRealtimeUsers(await onSanpshotDocuments("users"));
    };
    fetchUsers();
  }, []);

  const onDeleteUser = async (userId) => {
    deletDocument(`users/${userId}`);
  };

  return (
    <div className="list-container">
      <h3>Realtime Users List</h3>
      {realtimeUsers.map((user, index) => (
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

export default RealtimeUsersList;
