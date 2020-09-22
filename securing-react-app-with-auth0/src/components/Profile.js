import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {
    profile: {},
    error: "",
  };

  componentDidMount() {
    this.loadProfileInfo();
  }

  loadProfileInfo() {
    this.props.auth.getUserProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <h1 className="text-center">Profile</h1>
        <div className="profileCard">
          <img src={profile.picture} style={{ width: 140 }} />
          <h1>{profile.nickname}</h1>
          <p className="profileTitle">{profile.name}</p>
          <p>{profile.email}</p>
        </div>
        ;
      </>
    );
  }
}

export default Profile;
