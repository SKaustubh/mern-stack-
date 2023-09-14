import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAppContext from "../AppContext";

const Navbar = () => {
  const { loggedin, logout } = UseAppContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const displayUserOption = () => {
    if (loggedin) {
      return (
        <>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </li>
          <li>
            <img
              height={50}
              className="rounded-circle"
              src={"http://localhost:5000/"+currentUser.avatar}
              alt=""
            />
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Signup">
              SignUp
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <div className="imgdiv">
            <img src="/logo192.png" className="img-fluid" alt="" />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/EventHandling">
                EventHandling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/StateManagement">
                StateManagement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/TodoList">
                TodoList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Browse">
                Browse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/ManageUser">
                ManageUser
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {displayUserOption()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
