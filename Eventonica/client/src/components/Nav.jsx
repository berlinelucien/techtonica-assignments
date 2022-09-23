import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
    <div className="navBar">
           <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
        Welcome
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">
                  Event
                </NavLink>
              </li>
    
        
            </ul>
          </div>
        </div>
      </nav>
 </div>
  )
}

export default Nav