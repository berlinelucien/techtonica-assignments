import React from 'react'

const Users = () => {
  return (
      <div>
          <h2>
              React Fetch API from Backend
              </h2>
              <ul>
                  {Users.map((item, i) => {
                      return (
                          <li key={i}>
                              Name: {item.name} Email:{item.email}
                          </li>
                      );
                  })}
              </ul>
    </div>
  )
}

export default Users