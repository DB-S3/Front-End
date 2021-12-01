import React, { useState } from 'react';
import "./Login-page.css"
import mobdev from "./dc.svg"
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { setId } from '../../Redux/CredentialSlice';
import { useCookies } from 'react-cookie';

function Register() {
  const [cookies, setCookie] = useCookies(['id']);

  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);

  function resetcheck(input1, input2){
    if(input1 == input2){
        return true;
    }
    return false;
}

function register(_mail, _name, input1, input2){
    if(resetcheck(input1,input2) == true){
        axios.create({
            baseURL: 'https://localhost:5003'
          },{
            method: 'HEAD',
            mode: 'no-cors',
            rejectUnauthorized: false
        }).get('/register/register/'+ _name + '/' + input1 + '/' + _mail).then(response => registerComplete(response.data.succes, response.data.returnValue));
    }    
}
function registerComplete(bool, id){
  if(bool == true){
    setCookie('id', id, { path: '/' });
    setRedirect("plans");
  }
}

  if (redirect != null) {
      return <Redirect to={redirect} />
    }


    return <div className={"login-background"}>
      <div className={"login-box"}>
      <img style={{top: "20%",width: "50%",position: 'relative'}} src={mobdev}></img>

        <div className={"input-wrapper"}>
          <p className={"login-bigtext"}>Register</p>
          <input className={"login-input"} onChange={(e) => setMail(e.target.value)} placeholder="Email"></input><br/>
          <input className={"login-input"} onChange={(e) => setName(e.target.value)} placeholder="Name"></input><br/>
          <input type="password" className={"login-input"} onChange={(e) => setPassword1(e.target.value)} placeholder="Password"></input><br/>
          <input type="password" className={"login-input"} onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat Password"></input><br/>
          <span className={"login-buttonwrapper"}>
            <button onClick={() => register(mail, name, password1, password2)} className={"login-button"}>Register</button>
            <a  href="login"className={"login-linktext"}>Sign In</a>
          </span>
        </div>
      </div>
      <div className={"footer"}/>
    </div>;

}
 
export default Register;