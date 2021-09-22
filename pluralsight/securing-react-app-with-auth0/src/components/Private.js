import React, { Component } from "react";

class Private extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    fetch("/private", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessTocken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.error);
      })
      .then((response) => {
        this.setState({ message: response.message });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Private;
