import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      id="header-navigation"
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <NavLink className="navbar-brand" to="/">
        CourseManager
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link ">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/courses">
            Courses
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
