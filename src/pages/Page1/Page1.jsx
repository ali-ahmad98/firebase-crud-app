import React, { useState } from "react";

import UserById from "./components/UserById";
import UsersList from "./components/UsersList";
import AddUserForm from "./components/AddUserForm";
import UpdateUserForm from "./components/UpdateUserForm";
import RealtimeUsersList from "./components/RealtimeUsersList";

const Page1 = () => {
  const [userById, setUserById] = useState({});
  const [users, setUsers] = useState([]);
  const [realtimeUsers, setRealtimeUsers] = useState([]);
  const [addUserForm, setAddUserForm] = useState({
    username: "",
    age: "",
  });
  const [updateUserForm, setUpdateUserForm] = useState({
    id: "",
    username: "",
    age: "",
  });

  return (
    <div>
      <UserById userById={userById} setUserById={setUserById} />
      <UsersList users={users} setUsers={setUsers} setUpdateUserForm={setUpdateUserForm} />
      <RealtimeUsersList
        realtimeUsers={realtimeUsers}
        setRealtimeUsers={setRealtimeUsers}
        setUpdateUserForm={setUpdateUserForm}
      />
      <AddUserForm addUserForm={addUserForm} setAddUserForm={setAddUserForm} />
      <UpdateUserForm updateUserForm={updateUserForm} setUpdateUserForm={setUpdateUserForm} />
    </div>
  );
};

export default Page1;
