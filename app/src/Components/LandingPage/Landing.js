import React, {  useRef, useState } from 'react';
import "./landing-style.css"
import mobdev from "./dc.svg"



function Landing(){
    const myRef = useRef(null)
    const [bg, setBG] = useState(false);
    const [menu, setMenu] = useState(false);
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const executeScroll = () => scrollToRef(myRef)


    return ( 
        <div style={{backgroundColor: bg ? "#394047" : "white"}}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
            
            <div className={"purpleBG header headercontainer"}><p className={"center"}>Ortisy</p>              
                <div onClick={()=> setMenu(!menu)} className="right menubtn center"> 
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <div className={menu ? "open menu" : "menu"}> 
                    <a onClick={()=> setMenu(false)} className="closebtn">&times;</a>
                    <a className={"first menuItem"} href="#">Login</a>
                    <a className={"menuItem"} href="#">Plans</a>
                    <a className={"menuItem"} href="#">Support</a>
                </div> 
                <div className={"desktop center"}> 
                    <a className={"menuItem"} href="#">Plans</a>
                    <a className={"menuItem"} href="#">Support</a>
                    <button className="login joinbtn ">Login</button>                    
                </div> 
</div>
            <div className={"purpleBG panel"}>
                <div className={"panelcontainerVert"}>
                    <div className={"textContainer center"}>
                        <p style={{marginBottom: "30px"}} className={"white bigtext"}>Need a website?</p>
                        <p style={{marginBottom: "30px"}} className={"white smalltext"}>..to promote your artwork, business or yourself. Look no further.</p>

                    </div>
                    <div style={{justifyContent: 'center', marginBottom: "30vh"}} className={"column panelcontainer"}>

                    <button className="joinbtn ">Join now</button>                    
                    <button onClick={executeScroll} className="joinbtn ">See more</button>
                    </div>

                </div>
            </div>
            <div ref={myRef} className={"purple triangledownwards"}></div>
            <div className={"panel"}>
                <div className={"panelcontainer"}>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Mobile development ready</p>
                        <p className={"smalltext"}>Automatically resize your application for all platforms</p>
                        <a href="">Read more</a>
                    </div>
                    <img className={"images"} src={mobdev}></img>
                </div>
            </div>

            <div className={"panel"}>
                <div className={"column panelcontainer"}>
                    
                    <img className={"images"} src={mobdev}></img>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Module programming</p>
                        <p className={"smalltext"}>Add extra functionality through modules to external services</p>
                        <a href="">See list</a>
                    </div>
                </div>
            </div>

            <div className={"panel"}>
                <div className={"panelcontainer"}>
                    <div className={"textContainer"}>
                        <p className={"bigtext"}>Advanced statistics</p>
                        <p className={"smalltext"}>Get insight into your websites traffic</p>
                        <a href="">Read more</a>
                    </div>
                    <img className={"images"} src={mobdev}></img>
                </div>
            </div>

        </div>);
    }

 
export default Landing;