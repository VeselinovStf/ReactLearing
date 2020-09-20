import React from "react";
import Header from "./common/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import CoursesPage from "./courses/CoursesPage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default App;
