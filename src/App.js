import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter";
// import LoginFormik from "./login";
// import SignupForm from "./SignupForm"
import StoryList from "./components/storyList";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StoryList />
      </header>
    </div>
  );
}

export default App;
