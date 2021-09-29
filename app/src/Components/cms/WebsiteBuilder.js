import React, { useState } from 'react';
import { Data } from './data';
import CMSComponent from './CMSComponent';
import TaskBar from './TaskBar';

function test(){}

function addObj(data){
    return  

}

function NewCMSObject(){

}

class WebsiteBuilder extends React.Component {

    constructor(props){
        super(props);
        this.state={
            dataJson: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/website').then(Response => Response.json()).then(data => {this.setState({dataJson: data})});
    }
    
    render() { 
        {console.log(this.state.dataJson)}
        return <div>
                <TaskBar/>
                <div>{this.state.dataJson.map( (data) => <CMSComponent key={data.key} lock={test} obj={data}/>)}</div>
        </div>;
    }
}
 
export default WebsiteBuilder;