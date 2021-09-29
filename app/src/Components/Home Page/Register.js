import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField} from '@fluentui/react'
import { Paper } from '@material-ui/core';
import background from "../Home Page/BackgroundLogin.svg"
import { Redirect } from 'react-router-dom'


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
        return ( <div>
            
                        <img src={background} style={{position: "absolute", bottom: "0px", left:"0px", zIndex: "-1"}}/>
                        <Paper elevation={5}  style={{ margin: "auto", position: "relative", top: "50px",padding: "10px", borderRadius:"5px", width:"400px", height: "480px"}} >

                            <div style={{width: "80%", margin: "auto"}}>
                            <TextField placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}/>

                            <TextField placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>

                            <TextField placeholder="Mail" onChange={(e) => this.setState({mail: e.target.value})}/>
                            
                            <PrimaryButton text={"register"} onClick={(e) => this.login(this.state.username, this.state.password, this.state.mail)}/>
                            </div>
                        </Paper>

        </div> );
    }
}
 
export default Register;