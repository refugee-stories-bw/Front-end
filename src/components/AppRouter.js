import React from "react";
import { Route } from "react-router-dom";
import LoginFormik from "./login";
import stories from "./stories";
import SignupForm from "./SignupForm";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

const AppRouter = () => {
  return (
    <>
      {/* <div className="Welcome"> */}
      <Route path="/" exact component={LoginFormik} />
      <Route path="/" exact component={SignupForm} />
      {/* </div> */}
      <div className="Story">
        <Route path="/stories" exact component={stories} />
      </div>
    </>
  );
};

export default AppRouter;
