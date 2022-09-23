import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SearchIcon from "@mui/icons-material/Search";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Users = () => {
  //stores the harcode data
  //const [users, setUsers] = useState([marlin, nemo, dory]);
  // Every time the user types a name in the name field, the name state is updated
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  console.log("users", users);
  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["id", "name"]);

  useEffect(() => {
    // our fetch codes
  }, []);

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
  // search users
  // input will be converted to string, toLowercase, only looking
  // for parameters q= name
  const searchItem = (users) => {
    return users.filter((user) => {
      return searchParam.some((newUser) => {
        return (
          user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <section className="user-management">
      <h2>
        <Header text="User Management" />
      </h2>

      <div className="search">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for user"
            value={q}
            /*
          // set the value of our useState q
          //  anytime the user types in the search box
          */
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="searchIcon">
            <SearchIcon />
          </span>
        </label>
      </div>
      <div className="container">
      <h3>All Users</h3>
        <div className="userList">
          <ul id="users-list">
            <table className="table table-hover border">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#UserID:</th>
                  <th scope="col">Name:</th>
                  <th scope="col">Email:</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {searchItem(users).map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
            
                      <td>
                        <MdDelete onClick={() => handleDeleteUser(user.id)} />
                        <Checkbox {...label}
                          color="secondary"
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />} />
                        <FaRegEdit />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ul>
        </div>
        <div>
          <div className="addUserArea">
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
      </div>
    </section>
  );
};

export default Users;
