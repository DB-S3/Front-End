import React, { useState } from 'react';
import '../src/App.css';
import Home from './Dashboard/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WebsiteBuilder from './Components/cms/WebsiteBuilder';
import Landing from './Components/LandingPage/Landing';
import Plans from './Components/LandingPage/Plans';
import { useSelector, useDispatch } from 'react-redux'
import Website from './Components/viewsite/Website';
import AccountPage from './Dashboard/AccountPage';
import LoginButton from './Components/login/Login';
import Profile from './Components/login/Profile';
import Register from './Components/login/Register';
import RequestPasswordReset from './Components/login/RequestPasswordReset';
import PasswordReset from './Components/login/PasswordReset';
import Test from './Components/auth0/Test';
import AuthService from './Components/auth0/AuthService';
import { Redirect } from 'react-router';
import Filetest from './Components/Filetest';

function App() {

  function startSession(history) {
    if(new AuthService().isAuthenticated()){
      return <Redirect to={"/dashboard"} />

    }
    new AuthService().handleAuthentication(history);
    
    return <div><p>Starting session...</p></div>;
  }

  if(window.location.hostname == "localhost"){
  return (
    <div className="App">
         <Router>
          <Switch>
            <Route path="/login">
             <Test  auth={new AuthService()}/>
            </Route>
            <Route path="/test">
             <Filetest/>
            </Route>
            <Route path="/register">
             <Register />
            </Route>
            <Route path="/resetRequest">
              <RequestPasswordReset/>
            </Route>
            <Route path="/startSession" render={({history}) => startSession(history)}/>
            <Route path="/reset/:id">
            <PasswordReset/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/plans">
              <Plans />
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
            <Route path="/dashboard">
              <Home/>  
            </Route>
            <Route path="/account">
              <AccountPage/>  
            </Route>
            <Route path="*">
            404 Page Not Found<br/>
            <Link to="/">Back to Home</Link>
            </Route>
          </Switch>
        </Router>
    </div>
  );
  } else {
    return(<Website/>)
    
  }
}

export default App;
