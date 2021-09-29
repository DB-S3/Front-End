import React, { useState } from 'react';
import '../src/App.css';
import Home from './Dashboard/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Modules from './Dashboard/Modules';
import WebsiteBuilder from './Components/cms/WebsiteBuilder';
import Login from './Components/Home Page/Login';
import Register from './Components/Home Page/Register';

function App() {
  return (
    <div className="App">
         <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/Modules">
              <Modules />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cms">
              <WebsiteBuilder/>
            </Route>
            <Route path="*">
            404 Page Not Found<br/>
            <Link to="/">Back to Home</Link>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
