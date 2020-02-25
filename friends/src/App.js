import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Router>
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>
        <Link to="/addFriend">Add a Friend</Link>
        </Router>
      </nav>
      <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Friends} />
        <Route path="/addFriend" component={FriendForm} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
