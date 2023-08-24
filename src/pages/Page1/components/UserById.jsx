import React, { useEffect } from "react";

import { getDocumentById } from "util/apiServices";

const UsersList = ({ userById, setUserById }) => {
  useEffect(() => {
    const fetchUsers = async () => {
      setUserById(await getDocumentById("users/4g7weDQB1Cpt20EBcW0y"));
    };
    fetchUsers();
  }, []);

  return (
    <div className="list-container">
      <h3>User By Id</h3>
      <ul>
        <li>{userById?.username}</li>
        <li>{userById?.age}</li>
      </ul>
    </div>
  );
};

export default UsersList;
