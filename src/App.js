import React from "react";
import ReactDOM from "react-dom";
import TabNav from "./components/TabNav";
import "./App.css";
import AppRouter from "./components/AppRouter";
// import LoginFormik from "./login";
// import SignupForm from "./SignupForm"
import StoryList from "./components/storyList";
import "semantic-ui-css/semantic.min.css";

//

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
