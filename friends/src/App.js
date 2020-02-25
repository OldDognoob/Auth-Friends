import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

//components
import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>
        <Link to="addFriend">Add a Friend</Link>
      </nav>
      <Header />
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/addFriend" component={FriendForm}/>
        <PrivateRoute path="/protected" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
