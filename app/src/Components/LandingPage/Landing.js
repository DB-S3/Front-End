import React, { Component } from 'react';
import "./style.css"
import mobdev from "./dc.svg"
import chart from "./piechart.svg"
class Landing extends React.Component {
    state={
        bg: false
    }
    render() { 
        return <div style={{backgroundColor: this.state.bg ? "#394047" : "white"}}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
            
            <div className={"purpleBG header headercontainer"}><p className={"center"}>test</p>                    <button style={{width: "10vw"}} className="joinbtn center">Login</button>                    
</div>
            <div className={"purpleBG panel"}>
                <div className={"panelcontainerVert"}>
                    <div className={"textContainer center"}>
                        <p style={{marginBottom: "30px"}} className={"white bigtext"}>Need a website?</p>
                    </div>
                    <div style={{justifyContent: 'center', marginBottom: "30vh"}} className={"panelcontainer"}>

                    <button className="joinbtn ">Join now</button>                    
                    <button className="joinbtn ">See more</button>
                    </div>

                </div>
            </div>
            <div className={"purple triangledownwards"}></div>
            <div className={"panel"}>
                <div className={"panelcontainer"}>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Mobile development ready</p>
                        <p className={"smalltext"}>Automatically resize your application for all platforms</p>
                        <a href="https://www.w3schools.com">read more</a>
                    </div>
                    <img src={mobdev}></img>
                </div>
            </div>

            <div className={"panel"}>
                <div className={"panelcontainer"}>
                    
                    <div className={"imgplaceholder"}>placeholder</div>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Module programming</p>
                        <p className={"smalltext"}>Add extra functionality through modules to external services</p>
                        <a href="https://www.w3schools.com">see list</a>
                    </div>
                </div>
            </div>

            <div className={"panel"}>
                <div className={"panelcontainer"}>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Advanced statistics</p>
                    </div>
                    <img style={{width: "20vw", height: "20vw"}} src={chart}></img>
                </div>
            </div>

        </div>;
    }
}
 
export default Landing;