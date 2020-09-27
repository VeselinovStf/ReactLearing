import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigation from "./common/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Auth/Auth";
import Callback from "./Auth/Callback";
import Public from "./components/Public";
import Private from "./components/Private";
import Courses from "./components/Courses";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
    };
  }

  render() {
    const { auth } = this.state;
    return (
      <AuthContext.Provider value={this.state.auth}>
        <Navigation auth={auth} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/profile"
              // auth={auth}
              component={Profile}
              scope={[]}
            />
            <PrivateRoute
              path="/private"
              // auth={auth}
              component={Private}
              scope={[]}
            />
            <PrivateRoute
              path="/courses"
              // auth={auth}
              scope={["read:courses"]}
              component={Courses}
            />
            <Route path="/public" component={Public} />
            <Route
              path="/callback"
              render={(props) => <Callback auth={auth} {...props} />}
            />
          </Switch>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
