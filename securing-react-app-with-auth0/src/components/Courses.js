import React, { Component } from "react";

class Courses extends Component {
  state = {
    message: "",
    courses: [],
  };

  componentDidMount() {
    fetch("/courses", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessTocken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.error);
      })
      .then((response) => {
        this.setState({ courses: response.courses });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/admin", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessTocken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.error);
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.courses.map((c) => {
          return <li key={c.id}>{c.title}</li>;
        })}
      </ul>
    );
  }
}

export default Courses;
