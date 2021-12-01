import React, { useState } from 'react';
import "./Login-page.css"
import mobdev from "./dc.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setId } from '../../Redux/CredentialSlice';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';

function Login(){
  const [cookies, setCookie] = useCookies(['id']);

  const id = useSelector(state => state.credentials.value)
  const dispatch = useDispatch()
  const [redirect, setRedirect] = useState(null);
  const [password, setPassword] = useState(null);
  const [mail, setMail] = useState(null);

  function signIn(_mail,_password){
    axios.create({
        baseURL: 'https://localhost:5003'
      },{
        method: 'HEAD',
        mode: 'no-cors',
        rejectUnauthorized: false
    }).get('/login/login/'+ _mail + '/' + _password).then(response => signInComplete(response.data.succes, response.data.returnValue))
  }

  function signInComplete(bool, id){
    if(bool == true){
      setCookie('id', id, { path: '/', maxAge: 20 });
      setRedirect("dashboard");
    }
  }

  if (redirect != null) {
    return <Redirect to={redirect} />
  }
    return <div className={"login-background"}>
      <div className={"login-box"}>
      <img style={{top: "20%",width: "50%",position: 'relative'}} src={mobdev}></img>

        <div className={"input-wrapper"}>
          <p className={"login-bigtext"}>Login to continue</p>
          <input className={"login-input"} onChange={(e) => setMail(e.target.value)} placeholder="Email"></input><br/>
          <input type="password" className={"login-input"} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input><br/>
          <span className={"login-buttonwrapper"}>
            <button className={"login-button"} onClick={() => signIn(mail, password)}>Login</button>
            <a href="register" className={"login-linktext"} >Forgot Password</a>
          </span>
        </div>
      </div>
      <div className={"footer"}/>
    </div>;
}
 
export default Login;