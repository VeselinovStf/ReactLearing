import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <NavLink className="navbar-brand" to="/">
          RAA0
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
