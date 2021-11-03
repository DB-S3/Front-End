import React, { Component } from 'react';
import "./AccountPage.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Redirect } from 'react-router-dom'

class AccountPage extends React.Component {
    state={
        redirect: null,
        name: "Sample Name",
        plan: "Standard plan"
    }
    render() { 
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        return <div className={"AccountBackground"}>
            <div className={"AccountContentHorizontal"}>
                <div className={"AccountContentBox"}>
                    <ArrowBackIcon onClick={() => this.setState({redirect: "dashboard"})} fontSize={"large"} sx={{ marginLeft: "10px", marginTop: "10px",float: "left", color: "#fff" }}/>
                    <span className={"Account-Options-Container"}>
                        <span>
                        <p style={{ marginBottom: "0px"}} className={"Account-UserName"}>{this.state.name}</p>
                        <p style={{float: "left", fontSize:"0.7rem", marginTop: "0px"}} >{this.state.plan}</p>
                        </span>
                        <button className={"Account-Button"}>Change Password</button>
                    </span>
                </div>
                <div className={"AccountBillingBox"}>
                    <p className={"white Next-InvoiceHeader"}>Next Invoice</p>
                </div>
            </div>
        </div>;
    }
}
 
export default AccountPage;