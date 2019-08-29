import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import login from "./components/login";
import submitStories from "./components/submitStory";
import * as serviceWorker from "./serviceWorker";
import { ProtectedRoute } from "./components/protected.route";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/" component={login} />
//         <ProtectedRoute exact path="/submitStory" component={submitStories} />
//         <Route path="*" component={() => "404 NOT FOUND"} />
//       </Switch>
//     </div>
//   );
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
