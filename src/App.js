import React from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter";
// import LoginFormik from "./login";
// import SignupForm from "./SignupForm"

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
