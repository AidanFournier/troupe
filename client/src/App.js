import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Example of the Route for the specific instance */}
          {/* <Route exact path="/trip/:id">
            <Trip />
          </Route> */}
          <Route path="/register">
            <Register />
          </Route>
          {/* Example for redirect */}
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
