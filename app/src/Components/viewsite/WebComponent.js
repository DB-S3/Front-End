import React, { Component } from 'react';
document.title = "Website"

class WebComponent extends Component {

    constructor(props) {
        super(props);

      }
       


    render() { 
        if(this.props.obj.type == 2){
            if(this.props.obj.children != null && this.props.obj.children.length != 0){
                return ( <div style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height + this.props.obj.options.heightUnit, width: this.props.obj.options.width + this.props.obj.options.widthUnit, left: this.props.obj.options.x + this.props.obj.options.xUnit, top: this.props.obj.options.y + this.props.obj.options.yUnit, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}}>
                    { this.props.obj.children.map(x=> 
                            <WebComponent key={x.key} obj={x}/>
                    )}
                </div> );
            } 
            if(this.props.obj.children == null || this.props.obj.children.length == 0){
                return ( <div style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height + this.props.obj.options.heightUnit, width: this.props.obj.options.width + this.props.obj.options.widthUnit, left: this.props.obj.options.x + this.props.obj.options.xUnit, top: this.props.obj.options.y + this.props.obj.options.yUnit, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} >
                </div> );
            } 
        }
        if(this.props.obj.type == 1){
            if(this.props.obj.children == null){
                return ( <img style={{backgroundColor: this.props.obj.options.backgroundColour, height: this.props.obj.options.height+"px", width: this.props.obj.options.width+"px", left: this.props.obj.options.x + "px", top: this.props.obj.options.y + "px", position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} >
                </img> );
            }
        }
        if(this.props.obj.type == 0){
            if(this.props.obj.children.length == 0){
                return ( <p style={{color: this.props.obj.options.colour, height: this.props.obj.options.height, width: this.props.obj.options.width, left: this.props.obj.options.x, top: this.props.obj.options.y, position: this.props.obj.options.position, borderRadius: this.props.obj.options.borderRadius + "px"}} >
                    {this.props.obj.options.text}
                </p> );
            }
        }
        return <p>error</p>
    }
} export default WebComponent;
