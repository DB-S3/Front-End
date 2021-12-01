import React,{useState} from 'react';
import "./PasswordReset.css"
import axios from 'axios';

function RequestPasswordReset() {
    const [Email, setEmail] = useState(true);

    function resetPassword(mail){
            axios.create({
                baseURL: 'https://localhost:5003'
              },{
                method: 'HEAD',
                mode: 'no-cors',
                rejectUnauthorized: false
            }).get('/recovery/CreateRecovery/'+ mail).then(response => console.log(response))
    }
        return <div className={"login-background"}>
        <div className={"login-box"}>
            <div className={"pw-reset-container"}>
            <input className={"pw-reser-input"} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input><br/>
            <button className={"pw-reset-button"} onClick={() => resetPassword(Email)}>Submit</button>
            </div>
        </div>
        <div className={"footer"}/>
      </div>;
}
 
export default RequestPasswordReset;