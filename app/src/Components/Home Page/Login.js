import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField} from '@fluentui/react'
import { Paper } from '@material-ui/core';
import background from "../Home Page/BackgroundLogin.svg"
import { Redirect } from 'react-router-dom'


class Login extends Component {

    state = { 
        username: "",
        password: "",
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
        return ( <div>
                        <img src={background} style={{position: "absolute", bottom: "0px", left:"0px", zIndex: "-1"}}/>
                        <Paper elevation={5}  style={{ margin: "auto", position: "relative", top: "50px",padding: "10px", borderRadius:"5px", width:"400px", height: "480px"}} >

                            <div style={{width: "80%", margin: "auto"}}>
                            <TextField placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}/>

                            <TextField placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>

                            <PrimaryButton text={"Login"} onClick={(e) => this.login(this.state.username, this.state.password)}/>
                            <PrimaryButton text={"Create Account"} onClick={(e) => this.setState({redirect: "/register"})}/>

                            </div>
                        </Paper>

        </div> );
    }
}
 
export default Login;