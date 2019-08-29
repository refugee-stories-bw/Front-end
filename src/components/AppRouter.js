import React from "react";
import { Route } from "react-router-dom";
import LoginFormik from "./login";
import stories from "./submitStory";
import SignupForm from "./SignupForm";
import storyList from "./storyList";

const AppRouter = () => {
  return (
    <>
      {/* <div className="Welcome"> */}
      <Route path="/" exact component={LoginFormik} />
      <Route path="/" exact component={SignupForm} />
      {/* </div> */}
      <div className="Story">
        <Route path="/submitStory" exact component={stories} />
        <Route path="/storyList" exact component={storyList} />
      </div>
    </>
  );
};

export default AppRouter;
