import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <NavLink to="/villagers" exact>
            Villagers
          </NavLink>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
