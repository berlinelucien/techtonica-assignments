import React from "react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

//harcode data example
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  //stores the harcode data
  const [users, setUsers] = useState([marlin, nemo, dory]);
  // Every time the user types a name in the name field, the name state is updated
  // const [name, setName] = useState("");
  // const [name, setName] = useState("");
  const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

  //handle the change and set each value in newUser
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    //reset form to blank setNewUser
    setNewUser({ id: "", name: "", email: "" });
  };
  // when the form is submitted, get user information
  const set = (name) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [name]: value,
      }));
    };
  };
  // callback function deleteUser gets sent to DeleteUser file
  //delete function takes id as a parameter
  const deleteUser = (deleteId) => {
    //iterate thru users, if the id does not match the specific id
    const newUsers = users.filter((user) => user.id !== deleteId);
    setUsers(newUsers);
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#:</th>
              <th scope="col">Name:</th>
              <th scope="col">Email:</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((users, index) => {
              return (
                <tr key={index}>
                  <td>{newUser.name}</td>
                  <td>{users.email}</td>
                  <td> {users.id}</td>
                </tr>
              );
            })} */}
            {users.map((users, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{users.id}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* display all existing Users here 
        to access the data you need to do a dot notation */}
        {/* {users.map((users, index) => {
          return (
            <li key={index}>
              Name: {users.name}, Email: {users.email}, ID: {users.id}
            </li>
          );
        })} */}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" onSubmit={handleSubmit} action="#">
          <fieldset>
          <label>ID:</label>
            <input
              type="text"
              id="add-user-id"
              value={newUser.id}
              onChange={set("id")}
            />
            <label>Name: </label>
            <input
              type="text"
              id="add-user-name"
              value={newUser.name} // changes the name
              onChange={set("name")} //handle the change function
            />
            <label>Email: </label>
            <input
              type="text"
              id="add-user-email"
              value={newUser.email}
              onChange={set("email")}
            />
            
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
