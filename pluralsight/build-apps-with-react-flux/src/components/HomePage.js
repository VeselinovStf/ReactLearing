import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>Building Applications with React and Flux course application</p>
      <Link to="/about" className="btn btn-info">
        About
      </Link>
    </div>
  );
}

export default HomePage;
