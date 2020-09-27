import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
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
              <NavLink className="nav-link" to="/public">
                Public
              </NavLink>
            </li>
            {this.props.auth.isAuthenticated() === true && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/private">
                    Private
                  </NavLink>
                </li>
                {this.props.auth.userHasScope(["read:courses"]) === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/courses">
                      Courses
                    </NavLink>
                  </li>
                )}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ml-md-auto d-md-flex">
            {!this.props.auth.isAuthenticated() ? (
              <li className="nav-item">
                <button
                  onClick={this.props.auth.login}
                  className="btn btn-success my-2 my-sm-0 "
                >
                  Login
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  onClick={this.props.auth.logout}
                  className="btn btn-success my-2 my-sm-0 "
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
