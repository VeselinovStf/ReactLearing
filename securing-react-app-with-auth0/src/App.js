import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigation from "./common/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
}

export default App;
