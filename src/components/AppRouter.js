import React from "react";
import { Route } from "react-router-dom";
import LoginFormik from "./Login";
import stories from "./stories";
import SignupForm from "./SignupForm";

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

//Hello!
