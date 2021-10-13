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

     register(username,password,mail){
        fetch("http://localhost:7000/register/"+username+"/"+password+"/"+mail)
        .then(res => res.text())
        .then(text => {
            console.log(text);
            if(text == "succes"){
                this.setState({redirect: "/login"})
            }
        })
     }

     currentMenu(bool){
        if(bool == true){
            return (<div><label for="fname">Username</label><br/>
            <input className={"login-textInput"} type="text" id="Username" name="Username" onChange={(e) => this.setState({username: e.target.value})}/><br/>
            <label for="lname">Password</label><br/>
            <input className={"login-textInput"} type="text" id="Password" name="Password"onChange={(e) => this.setState({password: e.target.value})}/><br/></div>)
        }else{
        return (<div><label for="fname">Username</label><br/>
            <input className={"login-textInput"} type="text" id="Username" name="Username" onChange={(e) => this.setState({username: e.target.value})}/><br/>
            <label for="fname">Mail</label><br/>
            <input className={"login-textInput"} type="text" id="Username" name="Username" onChange={(e) => this.setState({mail: e.target.value})}/><br/>
            <label for="lname">Password</label><br/>
            <input className={"login-textInput"} type="text" id="Password" name="Password"onChange={(e) => this.setState({password: e.target.value})}/><br/>
            <label for="lname">Repeat Password</label><br/>
            <input className={"login-textInput"} type="text" id="Password" name="Password"onChange={(e) => this.setState({passwordRepeat: e.target.value})}/><br/></div>)
        } 
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
                                <p className={"login-top-text"}>Login</p>
                                <div className={"login-switchbtn-container"}>
                                    <a className={this.state.type ? "login-active login-one" : "login-one"} onClick={()=> this.setState({type: true})} type="button">Login</a>
                                    <span className={this.state.type ? "login-switchbtn-bg" : "login-change login-switchbtn-bg"}> </span>
                                    <a className={this.state.type ? " login-two" : "login-active login-two"} onClick={()=> this.setState({type: false})} type="button">Register</a>
                                </div>
                                    {this.currentMenu(this.state.type)}
                                    <button type="button" onClick={(e) => this.login(this.state.username, this.state.password)}>Login</button>
                            </div>
                        </div> );
    }
}
 
export default Login;