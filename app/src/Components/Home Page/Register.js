import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField} from '@fluentui/react'
import { Paper } from '@material-ui/core';
import background from "../Home Page/BackgroundLogin.svg"
import { Redirect } from 'react-router-dom'
import './loginPage.css'


class Register extends Component {

    state = { 
        username: "",
        password: "",
        mail: "",
        redirect: null
     }
     
     login(username,password,mail){
        fetch("http://localhost:7000/register/"+username+"/"+password+"/"+mail)
        .then(res => res.text())
        .then(text => {
            console.log(text);
            if(text == "succes"){
                this.setState({redirect: "/login"})
            }
        })
     }

    render() { 
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        return ( <div style={{backgroundColor: "#e6e1e1", height: "100vh", overflow: "none"}}>
                            <div className={"login-Background-container"}>
                                <div className={"login-Background-panel"}/>
                            </div>
                            <div className={"login-Panel"}>                               
                                <label for="fname">Username:</label><br/>
                                    <input className={"login-textInput"} type="text" id="Username" name="Username" onChange={(e) => this.setState({username: e.target.value})}/><br/>
                                    <label for="lname">Password:</label><br/>
                                    <input className={"login-textInput"} type="text" id="Password" name="Password"onChange={(e) => this.setState({password: e.target.value})}/><br/>
                                    <label for="fname">Mail:</label><br/>
                                    <input className={"login-textInput"} type="text" id="Username" name="Username" onChange={(e) => this.setState({mail: e.target.value})}/><br/>
                                    <button type="button" onClick={(e) => this.login(this.state.username, this.state.password)}>Login</button>
                            </div>
                        </div> );

    }
}
 
export default Register;