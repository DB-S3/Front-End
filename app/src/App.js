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
import Website from './Components/viewsite/Website';
import RequestPasswordReset from './Components/login/RequestPasswordReset';
import PasswordReset from './Components/login/PasswordReset';
import Test from './Components/auth0/Test';
import AuthService from './Components/auth0/AuthService';
import { Redirect } from 'react-router';
import Filetest from './Components/Filetest';
import Plans from '../src/Components/AccountSetup/Plans'
import SiteNamePicker from './Components/AccountSetup/SiteNamePicker';
import Page from './Components/cms/Page';
import CMS from './Components/cms/CMS';
import { Provider } from 'react-redux'
import store from "./Redux/store"
import { CookiesProvider } from 'react-cookie';
function App() {

  function startSession(history) {
    if(new AuthService().isAuthenticated()){
      return <Redirect to={"/dashboard"} />

    }
    new AuthService().handleAuthentication(history);
    
    return <div><p>Starting session...</p></div>;
  }

  return (  
    <Provider store={store}>
    <CookiesProvider>
      <div className="App">
          <Router>
            <Switch>
              <Route path="/login">
              <Test  auth={new AuthService()}/>
              </Route>
              <Route path="/page">
                <Page/>
              </Route>
              <Route path="/testfile">
              <Filetest/>
              </Route>
              <Route path="/resetRequest">
                <RequestPasswordReset/>
              </Route>
              <Route path="/startSession" render={({history}) => startSession(history)}/>
              <Route path="/reset/:id">
              <PasswordReset/>
              </Route>
              <Route path="/plans">
                <Plans />
              </Route>
              <Route path="/sitePicker">
                <SiteNamePicker/>
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/cms">
              <CMS/>
              </Route>
              <Route path="/website">
                <Website/>
              </Route>
              <Route path="/dashboard">
                <Home/>  
              </Route>
              <Route path="*">
              404 Page Not Found<br/>
              <Link to="/">Back to Home</Link>
              </Route>
            </Switch>
          </Router>
      </div>
      </CookiesProvider>
    </Provider>
  );
}

export default App;
