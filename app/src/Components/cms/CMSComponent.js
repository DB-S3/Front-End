import React, { Component } from 'react';
import img from './Defak.png';
import TaskBar from './TaskBar';
document.title = "Website Builder"
const test= "tse";
class CMSComponent extends Component {

    constructor(props) {
        super(props);
        this.mouseMove = this.mouseMove.bind(this);
        this.setlock = this.setlock.bind(this);
      }
       
    state = {
        editVisible: false,
        x: 0,
        y: 70,
        mouseX: 0,
        mouseY: 0,
        prevMouseX: 0,
        prevMouseY: 0,
        hold: false,
        width: 200,
        height: 200,
        lock: false
      }

      onClicking(click,shold){
          this.props.lock(click);
          this.setState({hold: shold})
      }

      setlock = (value) => {
          this.setState({lock: value});
      }
      mouseMove = (e) => {
        this.setState({prevMouseX: this.state.mouseX, prevMouseY: this.state.mouseY});
        this.setState({mouseX: e.clientX, mouseY: e.clientY});
        if(this.state.hold == true && this.state.lock == false){
            this.props.obj.options.x = this.props.obj.options.x + (this.state.mouseX - this.state.prevMouseX);
            this.props.obj.options.y = this.props.obj.options.y + (this.state.mouseY - this.state.prevMouseY);

            this.setState({x: this.state.x + (this.state.mouseX - this.state.prevMouseX), y: this.state.y + (this.state.mouseY - this.state.prevMouseY)});
        }
    }

    taskbar(){
        return <TaskBar/>
    }

    render() { 
        if(this.props.obj.type == 2){
            if(this.props.obj.children != null && this.props.obj.children.length != 0){
                return ( <div onMouseMove={(e) =>this.mouseMove(e)} style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height + this.props.obj.options.heightUnit, width: this.props.obj.options.width + this.props.obj.options.widthUnit, left: this.props.obj.options.x + this.props.obj.options.xUnit, top: this.props.obj.options.y + this.props.obj.options.yUnit, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} onMouseLeave={() => this.setState({hold: false})} onMouseDown={() =>  this.onClicking(true,true)} onMouseUp={() => this.onClicking(false,false)}>
                    { this.props.obj.children.map(x=> 
                            <CMSComponent key={x.key} lock={this.setlock} obj={x}/>
                    )}
                </div> );
            } 
            if(this.props.obj.children == null || this.props.obj.children.length == 0){
                return ( <div onMouseMove={(e) =>this.mouseMove(e)} style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height + this.props.obj.options.heightUnit, width: this.props.obj.options.width + this.props.obj.options.widthUnit, left: this.props.obj.options.x + this.props.obj.options.xUnit, top: this.props.obj.options.y + this.props.obj.options.yUnit, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} onMouseLeave={() => this.setState({hold: false})} onMouseDown={() =>  this.onClicking(true,true)} onMouseUp={() => this.onClicking(false,false)}>
                </div> );
            } 
        }
        if(this.props.obj.type == 1){
            if(this.props.obj.children == null){
                return ( <img onMouseMove={(e) =>this.mouseMove(e)} style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height+"px", width: this.props.obj.options.width+"px", left: this.props.obj.options.x + "px", top: this.props.obj.options.y + "px", position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} src={img} onMouseLeave={() => this.setState({hold: false})} onMouseDown={() =>  this.onClicking(true,true)} onMouseUp={() => this.onClicking(false,false)}>
                </img> );
            }
        }
        if(this.props.obj.type == 0){
            if(this.props.obj.children.length == 0){
                return ( <p onMouseMove={(e) =>this.mouseMove(e)} style={{color: this.props.obj.options.colour, height: this.props.obj.options.height, width: this.props.obj.options.width, left: this.props.obj.options.x, top: this.props.obj.options.y, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} onMouseLeave={() => this.setState({hold: false})} onMouseDown={() =>  this.onClicking(true,true)} onMouseUp={() => this.onClicking(false,false)}>
                    {this.props.obj.options.text}
                </p> );
            }
        }
        return <p>error</p>
    }
} export default CMSComponent;
