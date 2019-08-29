import React from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter";
// import LoginFormik from "./login";
// import SignupForm from "./SignupForm"
import StoryList from './components/storyList';
import 'semantic-ui-css/semantic.min.css';
//import data from "./components/data";


function App() {
  return (
    <div>
      <StoryList />
    </div>
  );
}

export default App;
