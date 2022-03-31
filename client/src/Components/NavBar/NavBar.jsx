import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleLogOutClick, user }) {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar navbar-light">
      <div
        style={{
          backgroundColor: "#6dc2a0",
          borderRadius: "5px",
          fontFamily: "FinkHeavy",
          fontColor: "#eb7473",
        }}
        class="container-fluid"
      >
        <p class="navbar-brand">Villagrr</p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <p class="nav-link">
                <NavLink to="/home" exact>
                  {" "}
                  Home
                </NavLink>
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link">
                <NavLink to="/villagers" exact>
                  {" "}
                  Villagers
                </NavLink>
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link">
                <NavLink to="/islands" exact>
                  {" "}
                  Islands
                </NavLink>
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link">
                <NavLink to="/visitors" exact>
                  {" "}
                  Visitors
                </NavLink>
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link" onClick={handleLogOutClick}>
                Logout
              </p>
            </li>
            {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-divider"> </a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
          </ul>
          {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <span class="navbar-text">Hi, {user.username}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
