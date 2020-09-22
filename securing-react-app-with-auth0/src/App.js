import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigation from "./common/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Auth/Auth";
import Callback from "./Auth/Callback";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.auth0 = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <Navigation auth={this.auth0} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/profile"
              render={(props) =>
                this.auth0.isAuthenticated() ? (
                  <Profile auth={this.auth0} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.auth0} {...props} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
