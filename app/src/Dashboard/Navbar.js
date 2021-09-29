import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import { useHistory } from "react-router-dom";

function Navbar(){
    const history = useHistory();

    function GoToHome() {
        history.push("/");
    }
    
    function GoToWebsite() {
        history.push("/website");
    }

    function GoToStatistics() {
        history.push("/website");
    }

    function GoToModules() {
      history.push("/modules");
    }

    function GoToSettings() {
        history.push("/settings");
    }

    return(                
    <div style={{ color:"white", display: "flex" ,flexDirection: "column", marginLeft: "30%", marginTop: "20%"}}>
    <div onClick={GoToHome}>
      <HomeRoundedIcon fontSize={'medium'} style={{float: "left", color: "white", marginRight: "5%"}}/> <p style={{float: "left", marginTop:"0.5%"}} >Home</p>
    </div>
    <div onClick={GoToWebsite}>
    <LanguageRoundedIcon fontSize={'medium'} style={{float: "left", color: "white", marginRight: "5%"}}/> <p style={{float: "left", marginTop:"0.5%"}}>Website</p>
    </div>
    <div onClick={GoToStatistics}>
    <AssessmentRoundedIcon fontSize={'medium'} style={{float: "left", color: "white", marginRight: "5%"}}/> <p style={{float: "left", marginTop:"0.5%"}}>Statistics</p>
    </div>
    <div onClick={GoToModules}>
    <AppsSharpIcon fontSize={'medium'} style={{float: "left", color: "white", marginRight: "5%"}}/> <p style={{float: "left", marginTop:"0.5%"}}>Modules</p>
    </div>
    <div onClick={GoToSettings}>
    <SettingsApplicationsSharpIcon fontSize={'medium'} style={{float: "left", color: "white", marginRight: "5%"}}/> <p style={{float: "left", marginTop:"0.5%"}}>Settings</p>
    </div>
    </div>);

} export default Navbar;
