import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Users = () => {
  //stores the harcode data
  //const [users, setUsers] = useState([marlin, nemo, dory]);
  // Every time the user types a name in the name field, the name state is updated
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
 

  console.log("users", users);
  // connect backend to frontend
  // You can change getUsers() code from promises to async/await so that asynchronous code is readable and appears to be executing synchronously
  /** GET LIST OF USER */
  const getUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const user = await response.json();
    setUsers(user);
  };
  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
  }, []);

  /** ADD USER */
  //handle the change and set each value in newUser
  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    //console.log(newUser)
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const content = await response.json();

    setUsers([...users, content]);
    setName("");
    setEmail("");
  };
 


  /** DELETE USER */
  const handleDeleteUser = async (deleteUser) => {
    // Simple DELETE HTTP request with async await
    let response = await fetch(`http://localhost:4000/users/${deleteUser}`, {
      method: "DELETE",
    });
    await response.json();
    // delete functionality
    const deleteUsers = users.filter((user) => user.id !== deleteUser);
    console.log(deleteUsers);
    setUsers(deleteUsers);
  };

  return (
    <section className="user-management">
      <h2>
        <Header text="User Management" />
      </h2>
      <div className="container">
        <ul id="users-list">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#UserID:</th>
                <th scope="col">Name:</th>
                <th scope="col">Email:</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td></td>
                    <td>
                      <MdDelete onClick={() => handleDeleteUser(user.id)} />

                      <FaRegEdit />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" onSubmit={handleAddUser} action="#">
            <fieldset>
              <label>Name: </label>
              <input
                type="text"
                id="add-user-name"
                value={name} // changes the name
                onChange={(e) => setName(e.target.value)} //handle the change function
              />
              <label>Email: </label>
              <input
                type="text"
                id="add-user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Users;
