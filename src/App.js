import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MyComponent from "./Components/MyComponent/MyComponent";
import Blog from "./Components/Blog/Blog";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/mycomponent">
            <MyComponent></MyComponent>
          </PrivateRoute>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="*">
            <h1>
              Error:404 <p>Content not found</p>
            </h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
