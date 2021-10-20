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
import Landing from './Components/LandingPage/Landing';
import Plans from './Components/LandingPage/Plans';
import { useSelector, useDispatch } from 'react-redux'
import Website from './Components/viewsite/Website';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
         <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/Modules">
              <Modules />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/cms">
              <WebsiteBuilder/>
            </Route>
            <Route path="/website">
              <Website/>
            </Route>
            <Route path="/test">
             <p> {count} </p>  
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
