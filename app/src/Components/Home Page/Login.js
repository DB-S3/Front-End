import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField} from '@fluentui/react'
import { Paper } from '@material-ui/core';
import background from "../Home Page/BackgroundLogin.svg"
import { Redirect } from 'react-router-dom'
import './loginPage.css'

class Login extends Component {

    state = { 
        username: "",
        password: "",
        passwordRepeat: "",
        mail: "",
        type: true,
        redirect: null
     }
     
     login(username,password){
        fetch("http://localhost:7000/login/"+username+"/"+password)
        .then(res => res.text())
        .then(text => {
            console.log(text);
            if(text != "invalid"){
                this.setState({redirect: "/"})
            }
        })
     }

    render() { 
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return ( <div style={{backgroundColor: "#000", height: "100vh"  , overflow: "none"}}>
                           <div className={"login-container"}>
                                <div className={'login-img'}>img</div>
                                <div className={"login-panel"}>
                                    <div style={{margin: "25px 12% 0px", width: "50px"}}>
                                        <p style={{margin: "0",color: "#e1f6fc", position: 'relative', float: 'left', fontSize: "2.3em"}}>Login</p><br/><br/><br/>
                                        <a style={{color: "#e1f6fc", position: 'relative', float: 'left', paddingLeft:"4px", fontSize: "0.7em"}}>Register</a>
                                    </div>
                                    <div className={"login-input-box"}>
                                        <input type="text" className={"login-input"} placeholder="Email"></input>
                                        <input type="text" className={"login-input"} placeholder="Password"></input><br/>
                                        <div style={{width: "90%", margin: 'auto'}}>
                                            <a className={"login-reset-password"}>Forgot password</a>
                                            <button className={"login-button"}>➜</button>
                                        </div>
                                   </div>
                               </div>
                           </div>
                        </div> );
    }
}
 
export default Login;