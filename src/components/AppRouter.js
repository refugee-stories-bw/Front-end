import React from "react";
import { Route } from "react-router-dom";
import LoginFormik from "./login";
import stories from "./submitStory";
import SignupForm from "./SignupForm";
import storyList from "./storyList";
import TabNav from "./TabNav";

const AppRouter = () => {
  return (
    <>
      {/* <div className="NavStyle"> */}
      <Route path="/" exact component={TabNav} />
      {/* </div> */}
      <div className="FormBody">
        <Route path="/stories" exact component={TabNav} />
        <Route path="/" exact component={LoginFormik} />
        <Route path="/" exact component={SignupForm} />
      </div>
      <Route path="/submitStory" exact component={TabNav} />
      <div className="FormSubBody">
        <Route path="/submitStory" exact component={stories} />
        <Route path="/storyList" exact component={storyList} />
      </div>
    </>
  );
};

export default AppRouter;
