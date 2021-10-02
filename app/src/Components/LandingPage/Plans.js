import React, { Component } from 'react';
import "./Plans-style.css"
class Plans extends React.Component {
    render() { 
        return <div>
                    <div className={"container"}>
                        <div className={"first card"}>
                            <p className={"bigtext"}>Standard</p>
                            <span>
                            <p>Custom Domain</p>
                            <p>10 Modules</p>
                            <p>3 GB Storage</p>
                            <p>Unlimited Traffic</p>
                            <p>Regular Support</p>
                            </span>
                            <button className={"selectplanbtn"}>Select Plan</button>
                        </div>
                        <div className={"second card"}>
                            <p className={"bigtext"}> To Be Named</p>
                            <span>
                            <p>Custom Domain</p>
                            <p>50 Modules</p>
                            <p>6 GB Storage</p>
                            <p>Unlimited Traffic</p>
                            <p>Regular Support</p>
                            </span>
                            <button className={"selectplanbtn"}>Select Plan</button>
                        </div>
                        <div className={"textWhite third card"}>
                            <p className={"bigtext"}> Pro</p>
                            <span>
                            <p>Custom Domain</p>
                            <p>Unlimited Modules</p>
                            <p>12 GB Storage</p>
                            <p>Unlimited Traffic</p>
                            <p>Priority Support</p>
                            </span>
                            <button className={"selectplanbtn"}>Select Plan</button>
                        </div>
                    </div>
        </div>;
    }
}
 
export default Plans;