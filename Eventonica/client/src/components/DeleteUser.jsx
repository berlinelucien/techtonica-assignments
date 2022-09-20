import React from "react";
import { useState } from "react";

// deleteUser is my props/function (deconstructing props)
// we will pass this logic component to Users
const DeleteUser = ({ deleteUser }) => {
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser(id);
    setId("");
  };

  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label>User ID</label>
          <input
            type="text"
            id="delete-user-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>
        <input type="submit" value="Delete"/>
      </form>
    </div>
  );
};

export default DeleteUser;
