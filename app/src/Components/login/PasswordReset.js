import React, {useState}from 'react';
import "./PasswordReset.css"
import {
    useParams
  } from "react-router-dom";
import axios from 'axios';

function PasswordReset() {
    const { id } = useParams();
    const [password1, setPassword1] = useState(true);
    const [password2, setPassword2] = useState(true);

    function resetcheck(input1, input2){
        if(input1 == input2){
            return true;
        }
        return false;
    }

    function resetPassword(input1, input2){
        if(resetcheck(input1,input2) == true){
            axios.create({
                baseURL: 'https://localhost:5003'
              },{
                method: 'HEAD',
                mode: 'no-cors',
                rejectUnauthorized: false
            }).get('/recovery/Recover/'+ id + '/' + input1).then(response => console.log(response));
        }
        
    }

        return <div className={"login-background"}>
        <div className={"login-box"}>
            <div className={"pw-reset-container"}>
            <input className={"pw-reser-input"} onChange={(e) => setPassword1(e.target.value)} placeholder="Password"></input><br/>
            <input className={"pw-reser-input"} onChange={(e) => setPassword2(e.target.value)} style={{marginTop: "10px"}} placeholder="Repeat Password"></input><br/>
            <button className={"pw-reset-button"} onClick={() => resetPassword(password1, password2)}>Submit</button>
            </div>
        </div>
        <div className={"footer"}/>
      </div>;

}
 
export default PasswordReset;