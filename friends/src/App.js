import React from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route/>
        <Route/>
        <PrivateRoute/>
      </Switch>
    </div>
  );
}

export default App;
